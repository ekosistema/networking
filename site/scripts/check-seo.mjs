#!/usr/bin/env node
// Auditoría SEO/GEO del sitio compilado (site/dist). Sin dependencias; sale con 1 si hay errores.
//   SITE_URL=https://networking.celerolab.com npm run build && npm run check:seo
//
// Comprueba en cada página: título único, descripción (50 a 170 caracteres, única), canonical propio, un solo h1,
// Open Graph y Twitter completos, lang, JSON-LD válido, robots (noindex en la 404) y enlaces internos.
// Y en el sitio: sitemap con todas las páginas, robots.txt, llms.txt, llms-full.txt, og.png e icono táctil.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const SITE = (process.env.SITE_URL ?? '').replace(/\/$/, '');
const BASE = (process.env.SITE_BASE ?? '').replace(/\/$/, '');
const errors = [];
const warns = [];
const err = (f, m) => errors.push(`${f}: ${m}`);

const pages = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== 'pagefind' && e.name !== '_astro') walk(f); }
    else if (f.endsWith('.html')) pages.push(f);
  }
})(dist);

const rel = (f) => path.relative(dist, f).replace(/\\/g, '/');
const titles = new Map();
const descs = new Map();
const urls = [];
let links = 0;

for (const f of pages) {
  const r = rel(f);
  const h = fs.readFileSync(f, 'utf8');
  const is404 = r === '404.html';
  const get = (re) => h.match(re)?.[1];
  const title = get(/<title>([^<]*)<\/title>/);
  const desc = get(/<meta name="description" content="([^"]*)"/);
  const canonical = get(/<link rel="canonical" href="([^"]*)"/);
  if (!title) err(r, 'sin <title>');
  else titles.set(title, [...(titles.get(title) ?? []), r]);
  if (!desc) err(r, 'sin meta description');
  else {
    if (!is404 && (desc.length < 50 || desc.length > 170)) err(r, `description de ${desc.length} caracteres`);
    descs.set(desc, [...(descs.get(desc) ?? []), r]);
  }
  if (!canonical) err(r, 'sin canonical');
  else if (SITE && !is404) {
    const expected = `${SITE}${BASE}/${r === 'index.html' ? '' : r.replace(/index\.html$/, '')}`;
    if (canonical !== expected) err(r, `canonical ${canonical} (esperado ${expected})`);
    urls.push(canonical);
  }
  if ((h.match(/<h1[\s>]/g) ?? []).length !== 1) err(r, 'debe haber exactamente un h1');
  if (!/<html lang="es"/.test(h)) err(r, 'html sin lang="es"');
  for (const p of ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']) if (!h.includes(`property="${p}"`)) err(r, `falta ${p}`);
  if (!/name="twitter:card" content="summary_large_image"/.test(h)) err(r, 'twitter:card no es summary_large_image');
  if (!h.includes('name="twitter:image"')) err(r, 'falta twitter:image');
  const robots = get(/<meta name="robots" content="([^"]*)"/);
  if (!robots) err(r, 'sin meta robots');
  else if (is404 !== /noindex/.test(robots)) err(r, `robots "${robots}" no corresponde a ${is404 ? 'la 404' : 'una página indexable'}`);
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ld.length) err(r, 'sin JSON-LD');
  for (const m of ld) { try { JSON.parse(m[1]); } catch { err(r, 'JSON-LD no válido'); } }
  if (!is404 && r !== 'index.html' && !h.includes('BreadcrumbList')) err(r, 'sin BreadcrumbList');
  for (const m of h.matchAll(/(?:href|src)=["']?(\/[^"'\s>#?]*)/g)) {
    const u = decodeURIComponent(m[1]);
    if (BASE && !u.startsWith(BASE + '/') && u !== BASE) { if (!u.startsWith('//')) err(r, `enlace sin la base: ${u}`); continue; }
    links++;
    const p = BASE ? u.slice(BASE.length) : u;
    const cands = [path.join(dist, p), path.join(dist, p, 'index.html')];
    if (!cands.some((c) => fs.existsSync(c) && fs.statSync(c).isFile())) err(r, `enlace roto: ${u}`);
  }
}

for (const [t, fs_] of titles) if (fs_.length > 1) err(fs_.join(', '), `título repetido: "${t}"`);
for (const [d, fs_] of descs) if (fs_.length > 1 && !fs_.every((x) => x === '404.html')) warns.push(`descripción repetida en ${fs_.length} páginas: "${d.slice(0, 60)}…"`);

// Sitemap
const sm = fs.existsSync(path.join(dist, 'sitemap-0.xml')) ? fs.readFileSync(path.join(dist, 'sitemap-0.xml'), 'utf8') : '';
const locs = [...sm.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
if (!locs.length) err('sitemap-0.xml', 'vacío o inexistente');
for (const u of urls) if (!locs.includes(u)) err('sitemap-0.xml', `falta ${u}`);
if (locs.some((u) => u.includes('/404'))) err('sitemap-0.xml', 'incluye la 404');
if (!/<lastmod>/.test(sm)) warns.push('el sitemap no tiene <lastmod> (sin historial de git)');

// Ficheros del sitio
for (const f of ['robots.txt', 'llms.txt', 'llms-full.txt', 'og.png', 'apple-touch-icon.png', 'favicon.svg', 'sitemap-index.xml']) {
  if (!fs.existsSync(path.join(dist, f))) err(f, 'no existe en dist');
}
const robotsTxt = fs.existsSync(path.join(dist, 'robots.txt')) ? fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8') : '';
if (!/Sitemap: https?:\/\//.test(robotsTxt)) err('robots.txt', 'sin línea Sitemap absoluta');

for (const w of warns) console.warn(`⚠️  ${w}`);
if (errors.length) {
  console.error(errors.slice(0, 40).join('\n'));
  if (errors.length > 40) console.error(`… y ${errors.length - 40} más`);
  console.error(`\n✖ ${errors.length} problema(s) en ${pages.length} páginas`);
  process.exit(1);
}
console.log(`✔ ${pages.length} páginas · ${links} enlaces internos · ${locs.length} URL en el sitemap · sin problemas`);
