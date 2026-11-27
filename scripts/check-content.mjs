#!/usr/bin/env node
// Comprobaciones de calidad del contenido (sin dependencias; Node 18+).
//
//   node scripts/check-content.mjs
//
// Sale con código 1 si hay errores. Comprueba:
//   1. Frontmatter completo (title, description, section, kind, order) en cada .md de contenido.
//   2. Enlaces relativos entre documentos y anclas a ficheros existentes.
//   3. Términos que no deben aparecer (referencias al centro de formación, calendario, códigos de unidad).
//   4. Guiones largos y medios (guía de estilo en español).
//   5. Audioapuntes: cuerpo sin dígitos, símbolos ni Markdown (lo leerá un lector de voz).
//   6. Cada documento está en el catálogo de la web (site/src/data/catalog.mjs).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP_FILES = new Set(['CLAUDE.md', 'ROADMAP.md', 'LICENSE.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md', 'SUPPORT.md']);
const SKIP_DIRS = new Set(['.git', 'node_modules', 'site', 'scripts', '.github']);

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.md') && !SKIP_FILES.has(e.name)) files.push(full);
  }
})(ROOT);

const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');
const errors = [];
const err = (f, line, msg) => errors.push(`${rel(f)}${line ? ':' + line : ''}  ${msg}`);

// Términos prohibidos. `allow` son excepciones por fichero o por línea.
const FORBIDDEN = [
  { re: /Ferrol/i, why: 'referencia al centro' },
  { re: /centro de formaci[oó]n/i, why: 'referencia al centro', allowLine: /no est[aá] avalado/i },
  { re: /calendario (real|docente|del centro)/i, why: 'calendario del centro' },
  { re: /\bUF[0-9]{4}\b/, why: 'código de unidad formativa' },
  { re: /\bMF0[0-9]{3}/, why: 'código de módulo formativo' },
  { re: /\bMP0[0-9]{3}\b/, why: 'código de módulo de prácticas' },
  { re: /\bIFCT0410\b/, why: 'código del certificado', allowFiles: ['README.md'] },
  { re: /Obsidian|Gitea|b[oó]veda/i, why: 'referencia al entorno de edición' },
  { re: /\btemario\b/i, why: 'usa "programa de referencia"' },
  { re: /\bexamen(es)?\b/i, why: 'lenguaje de examen', allowLine: /examen de las evidencias|pasar un examen|Un examen con un corrector|el examen final|propio examen|propios ex/ },
  { re: /\b20(2[7-9]|3\d)-\d\d-\d\d\b/, why: 'fecha absoluta de calendario', allowFiles: ['Planificacion_Tecnico.md', 'Planificacion_Laboratorio.md', 'Ejecucion_Tecnico.md', 'Ejecucion_Casos.md', 'Equipos_Casos.md'] },
];

const catalog = await import(pathToFileURL(path.join(ROOT, 'site/src/data/catalog.mjs')).href);
const inCatalog = new Set(catalog.allPages().map((p) => p.file));

for (const f of files) {
  const r = rel(f);
  const text = fs.readFileSync(f, 'utf8');
  const lines = text.split('\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!inCatalog.has(r)) err(f, 0, 'no está en catalog.mjs');
  const isReadme = r === 'README.md'; // portada de GitHub: sin frontmatter (se mostraría como una tabla)
  if (!m && !isReadme) { err(f, 1, 'sin frontmatter'); continue; }
  if (m) {
    for (const k of ['title', 'description', 'section', 'kind', 'order']) {
      if (!new RegExp(`^${k}: .+`, 'm').test(m[1])) err(f, 1, `frontmatter sin "${k}"`);
    }
  }
  const bodyStart = m ? m[0].split('\n').length - 1 : 0;
  let inFence = false;
  const isAudio = r.startsWith('05_Audioapuntes/') && !r.endsWith('README.md');

  lines.forEach((line, i) => {
    const n = i + 1;
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (n > bodyStart) {
      for (const t of FORBIDDEN) {
        if (!t.re.test(line)) continue;
        if (t.allowFiles?.some((a) => r.endsWith(a))) continue;
        if (t.allowLine?.test(line)) continue;
        err(f, n, `${t.why}: ${line.trim().slice(0, 80)}`);
      }
      if (/[—–]/.test(line) && !inFence) err(f, n, 'guion largo o medio');
      if (isAudio && line.trim()) {
        if (/[0-9]/.test(line)) err(f, n, 'audioapunte con dígitos');
        if (/[%&\/#|*`_\[\]<>]/.test(line)) err(f, n, 'audioapunte con símbolos o Markdown');
      }
      if (!inFence) {
        for (const lm of line.matchAll(/\]\(([^)\s]+)\)/g)) {
          const href = lm[1];
          if (/^[a-z]+:/i.test(href) || href.startsWith('#')) continue;
          const [target] = href.split('#');
          const dest = path.resolve(path.dirname(f), target);
          if (!fs.existsSync(dest)) err(f, n, `enlace roto: ${href}`);
        }
      }
    }
  });
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n✖ ${errors.length} problema(s) en ${files.length} documentos`);
  process.exit(1);
}
console.log(`✔ ${files.length} documentos sin problemas`);
