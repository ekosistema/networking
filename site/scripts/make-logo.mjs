#!/usr/bin/env node
// Genera el logotipo de Networking (src/assets/networking-logo-on-{dark,light}.svg) y el icono (public/favicon.svg).
//   npm run logo
//
// Icono: una insignia de esquinas redondeadas con degradado índigo → cian y una «N» dibujada como una red:
// cuatro nodos unidos por tres enlaces (dos verticales y una diagonal). Logotipo: «NETWORKING» en Archivo SemiBold,
// mayúsculas con tracking amplio, convertido a trazados SVG: no depende de ninguna fuente instalada.
//
// Para cambiar el diseño, edita este fichero y vuelve a ejecutarlo.

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const opentype = require('opentype.js');
const here = path.dirname(fileURLToPath(import.meta.url));
const site = path.resolve(here, '..');

// ── Parámetros de diseño ───────────────────────────────────────────────────────
const NAME = 'NETWORKING';
const FONT_FILE = path.join(site, 'node_modules/@fontsource/archivo/files/archivo-latin-600-normal.woff');
const CAP_HEIGHT = 36;      // altura de las mayúsculas en unidades del lienzo
const TRACKING = 110;       // espaciado entre letras (milésimas de em)
const ICON = 72;            // lado del icono
const GAP = 20;             // separación icono ↔ palabra
const PAD_Y = 4;            // margen vertical del lienzo

const THEMES = {
  dark:  { text: '#f4f5fb', from: '#7c6cff', to: '#22d3ee' },
  light: { text: '#0f1222', from: '#5b45f0', to: '#0891b2' },
};

// ── Palabra ────────────────────────────────────────────────────────────────────
const buf = fs.readFileSync(FONT_FILE);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const capRatio = (font.tables.os2?.sCapHeight ?? font.unitsPerEm * 0.7) / font.unitsPerEm;
const fontSize = CAP_HEIGHT / capRatio;
const baseline = PAD_Y + ICON / 2 + CAP_HEIGHT / 2;                 // centrada con el icono
const textX = ICON + GAP;
// Composición letra a letra: se evita el motor de sustituciones (GSUB) de opentype.js, que falla con algunas
// fuentes variables. Para mayúsculas con tracking amplio no se pierde nada.
const scale = fontSize / font.unitsPerEm;
const commands = [];
let penX = textX;
let endX = textX;
for (const ch of NAME) {
  const glyph = font.charToGlyph(ch);
  commands.push(...glyph.getPath(penX, baseline, fontSize).commands);
  endX = penX + glyph.advanceWidth * scale;
  penX = endX + (TRACKING / 1000) * fontSize;
}
const wordPath = { commands };
const width = Math.ceil(endX + 4);
const height = ICON + PAD_Y * 2;
const n2 = (v) => +v.toFixed(2);
const wordD = wordPath.commands
  .map((c) => {
    switch (c.type) {
      case 'M': case 'L': return `${c.type}${n2(c.x)} ${n2(c.y)}`;
      case 'C': return `C${n2(c.x1)} ${n2(c.y1)} ${n2(c.x2)} ${n2(c.y2)} ${n2(c.x)} ${n2(c.y)}`;
      case 'Q': return `Q${n2(c.x1)} ${n2(c.y1)} ${n2(c.x)} ${n2(c.y)}`;
      default: return 'Z';
    }
  })
  .join('');

// ── Icono: insignia + «N» de red ───────────────────────────────────────────────
const NODES = [[22, 52], [22, 20], [50, 52], [50, 20]];            // BI → SI → BD → SD: recorrido de la N
const icon = (t, id) => `
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.from}"/><stop offset="1" stop-color="${t.to}"/></linearGradient></defs>
  <rect width="${ICON}" height="${ICON}" rx="18" fill="url(#${id})"/>
  <path d="M${NODES.map((p) => p.join(' ')).join('L')}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <g fill="#fff">${NODES.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7"/>`).join('')}</g>
  <g fill="url(#${id})">${NODES.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join('')}</g>`;

const logo = (t) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="t"><title id="t">Networking</title><g transform="translate(0 ${PAD_Y})">${icon(t, 'g')}</g><path d="${wordD}" fill="${t.text}"/></svg>\n`;
const mark = (t) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ICON} ${ICON}" role="img" aria-labelledby="t"><title id="t">Networking</title>${icon(t, 'g')}</svg>\n`;

fs.writeFileSync(path.join(site, 'src/assets/networking-logo-on-dark.svg'), logo(THEMES.dark));
fs.writeFileSync(path.join(site, 'src/assets/networking-logo-on-light.svg'), logo(THEMES.light));
fs.writeFileSync(path.join(site, 'public/favicon.svg'), mark(THEMES.dark));
console.log(`✔ logotipo ${width}×${height} · icono ${ICON}×${ICON} (fuente ${path.basename(FONT_FILE)})`);
