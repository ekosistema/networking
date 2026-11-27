#!/usr/bin/env node
// Sincroniza los .md de la raíz del repositorio con el contenido de Starlight.
// - No modifica nada fuera de site/. Todo lo generado está en .gitignore.
// - Convierte frontmatter, quita el H1 (Starlight pinta el título) y reescribe los enlaces relativos
//   entre documentos a rutas de la web.

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { allPages, sections, kinds } from '../src/data/catalog.mjs';
import { site as brand } from '../src/data/site.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(here, '..');
const ROOT = path.resolve(SITE, '..');
const DOCS = path.join(SITE, 'src/content/docs');
const BASE = (process.env.SITE_BASE ?? '').replace(/\/$/, '');
const REPO = process.env.REPO_URL ?? brand.repo;

const pages = allPages();
const routeOf = new Map(pages.map((p) => [p.file, p.route]));
const routes = pages.map((p) => p.route);

const errors = [];
for (const p of pages) if (!fs.existsSync(path.join(ROOT, p.file))) errors.push(`no existe el fichero ${p.file}`);

// Cualquier .md de contenido que no esté en el catálogo es un descuido.
const SKIP = new Set(['CLAUDE.md', 'ROADMAP.md', 'LICENSE.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md', 'SUPPORT.md']);
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules' || e.name === 'site' || e.name === 'scripts') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.md') && !SKIP.has(e.name)) {
      const rel = path.relative(ROOT, full).replace(/\\/g, '/');
      if (!routeOf.has(rel)) errors.push(`${rel} no está en catalog.mjs`);
    }
  }
})(ROOT);

if (errors.length) {
  for (const e of errors) console.error(`✖ ${e}`);
  process.exit(1);
}

const esc = (s) => JSON.stringify(s);

// Las descripciones de meta se recortan a ~160 caracteres en un límite de palabra (Google trunca por encima).
const clip = (jsonStr, max = 160) => {
  const s = JSON.parse(jsonStr);
  if (s.length <= max) return jsonStr;
  return esc(s.slice(0, max - 1).replace(/[\s,;:.]+\S*$/, '') + '…');
};

// Fecha real de la última modificación del fichero fuente (git). Sin historial disponible, no se inventa nada.
const lastmod = {};
function gitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: ROOT, encoding: 'utf8' }).trim();
    return out ? out.slice(0, 10) : '';
  } catch { return ''; }
}

function rewriteLinks(text, fromFile) {
  const fence = /^(\s*)(```|~~~)/;
  let inFence = false;
  return text
    .split('\n')
    .map((line) => {
      if (fence.test(line)) { inFence = !inFence; return line; }
      if (inFence) return line;
      return line.replace(/\]\(([^)\s]+)\)/g, (m, href) => {
        if (/^[a-z]+:/i.test(href) || href.startsWith('#')) return m;
        const [target, hash = ''] = href.split('#');
        const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), target));
        if (!routeOf.has(resolved)) {
          console.warn(`⚠️  enlace sin destino en ${fromFile}: ${href}`);
          return m;
        }
        const r = routeOf.get(resolved);
        return `](${BASE}/${r ? r + '/' : ''}${hash ? '#' + hash : ''})`;
      });
    })
    .join('\n');
}

fs.rmSync(DOCS, { recursive: true, force: true });
fs.mkdirSync(DOCS, { recursive: true });

// Vecinos de lectura: solo dentro de una unidad (presentación → piezas) y entre las dos partes de un audio.
// En cualquier otro sitio no hay anterior/siguiente: las migas y el menú lateral bastan.
const neighbours = new Map();
for (const s of sections) {
  for (const u of s.units) {
    const seq = [{ route: `${s.id}/${u.id}`, label: 'Presentación' }, ...kinds.map((k) => ({ route: `${s.id}/${u.id}/${k.id}`, label: k.label }))];
    seq.forEach((e, i) => neighbours.set(e.route, { prev: seq[i - 1], next: seq[i + 1] }));
    const a = { route: `audio/${u.id}`, label: 'Audio, parte uno' };
    const b = { route: `audio/${u.id}-parte-2`, label: 'Audio, parte dos' };
    neighbours.set(a.route, { next: b });
    neighbours.set(b.route, { prev: a });
  }
}
const link = (e) => (e ? `\n  link: ${esc(`${BASE}/${e.route}/`)}\n  label: ${esc(e.label)}` : ' false');

let count = 0;
for (const p of pages) {
  if (p.landing) continue;
  const raw = fs.readFileSync(path.join(ROOT, p.file), 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { console.error(`✖ ${p.file}: sin frontmatter`); process.exit(1); }
  const title = p.title ? esc(p.title) : m[1].match(/^title: (.*)$/m)?.[1];
  const rawDescription = p.description ? esc(p.description) : m[1].match(/^description: (.*)$/m)?.[1];
  const description = rawDescription && clip(rawDescription);
  if (!title || !description) { console.error(`✖ ${p.file}: falta title o description`); process.exit(1); }
  const date = gitDate(p.file);
  if (date) lastmod[p.route] = date;
  let body = raw.slice(m[0].length);
  body = body.replace(/^\s*# .+\n/, '');           // Starlight ya pinta el título
  body = body.replace(/^\s*```text\n={10,}\n[\s\S]*?\n={10,}\n```\n/, ''); // rótulo ASCII decorativo de las portadas
  body = rewriteLinks(body, p.file).replace(/\n{3,}/g, '\n\n').trim() + '\n';

  const front = [
    '---',
    `title: ${title}`,
    `description: ${description}`,
    `editUrl: ${esc(`${REPO}/edit/main/${p.file}`)}`,
    'sidebar:',
    `  label: ${esc(p.label)}`,
    ...['section', 'unit', 'kind'].flatMap((k) => {
      const v = m[1].match(new RegExp(`^${k}: (.*)$`, 'm'))?.[1];
      return v ? [`${k}: ${v}`] : [];
    }),
    `minutes: ${Math.max(1, Math.round(body.split(/\s+/).length / 200))}`,
    ...(date ? [`lastUpdated: ${date}`] : []),
    `prev:${link(neighbours.get(p.route)?.prev)}`,
    `next:${link(neighbours.get(p.route)?.next)}`,
    '---',
    '',
  ].join('\n');

  const hasChildren = routes.some((r) => r.startsWith(p.route + '/') && p.route !== '');
  const out = p.route === '' ? 'index.md' : hasChildren ? `${p.route}/index.md` : `${p.route}.md`;
  const dest = path.join(DOCS, out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, front + '\n' + body);
  count++;
}
fs.writeFileSync(path.join(SITE, 'src/data/lastmod.json'), JSON.stringify(lastmod, null, 2) + '\n');

// Portada diseñada: no sale del README (que es la portada de GitHub), sino de site/src/landing.
fs.copyFileSync(path.join(SITE, 'src/landing/index.mdx'), path.join(DOCS, 'index.mdx'));
console.log(`✔ ${count} documentos sincronizados`);
