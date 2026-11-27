#!/usr/bin/env node
// Genera la imagen para compartir en redes (public/og.png, 1200×630) y el icono táctil (public/apple-touch-icon.png).
//   npm run og
//
// Los textos se convierten a trazados con opentype.js (Archivo) para que el resultado no dependa de las fuentes
// instaladas en la máquina que lo genere. El PNG resultante se versiona: se ejecuta solo cuando cambia la marca.

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const opentype = require('opentype.js');
const here = path.dirname(fileURLToPath(import.meta.url));
const site = path.resolve(here, '..');
const pub = path.join(site, 'public');

const loadFont = (weight) => {
  const buf = fs.readFileSync(path.join(site, `node_modules/@fontsource/archivo/files/archivo-latin-${weight}-normal.woff`));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};
const bold = loadFont(700);
const regular = loadFont(400);
const n2 = (v) => +v.toFixed(2);

// Texto → trazado SVG, letra a letra (sin motor de sustituciones; véase make-logo.mjs).
function textPath(font, text, x, y, size, fill) {
  const scale = size / font.unitsPerEm;
  let pen = x;
  let d = '';
  for (const ch of text) {
    const g = font.charToGlyph(ch);
    d += g.getPath(pen, y, size).commands
      .map((c) => {
        switch (c.type) {
          case 'M': case 'L': return `${c.type}${n2(c.x)} ${n2(c.y)}`;
          case 'C': return `C${n2(c.x1)} ${n2(c.y1)} ${n2(c.x2)} ${n2(c.y2)} ${n2(c.x)} ${n2(c.y)}`;
          case 'Q': return `Q${n2(c.x1)} ${n2(c.y1)} ${n2(c.x)} ${n2(c.y)}`;
          default: return 'Z';
        }
      })
      .join('');
    pen += g.advanceWidth * scale;
  }
  return `<path d="${d}" fill="${fill}"/>`;
}

const uri = (file) => `data:image/svg+xml;base64,${fs.readFileSync(file).toString('base64')}`;
const ratio = (file) => {
  const [, , w, h] = fs.readFileSync(file, 'utf8').match(/viewBox="([\d.\s]+)"/)[1].split(/\s+/).map(Number);
  return w / h;
};
const brandFile = path.join(site, 'src/assets/networking-logo-on-dark.svg');
const celeroFile = path.join(pub, 'brand/celerolab-logo-on-dark.svg');

const title = ['Aprende a diseñar,', 'implantar y administrar', 'redes'];
const lines = title
  .map((t, i) => textPath(bold, t, 80, 232 + i * 76, 66, i === 2 ? '#a79cff' : '#f4f5fb'))
  .join('');
const sub = ['Guía abierta en español: ocho unidades con casos resueltos,', 'laboratorio y audio, en el orden del oficio.']
  .map((t, i) => textPath(regular, t, 80, 478 + i * 36, 26, '#b8bcd2'))
  .join('');

const og = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="a" cx="15%" cy="0%" r="75%"><stop offset="0" stop-color="#7c6cff" stop-opacity=".55"/><stop offset="1" stop-color="#7c6cff" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="95%" cy="25%" r="55%"><stop offset="0" stop-color="#22d3ee" stop-opacity=".28"/><stop offset="1" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>
    <pattern id="g" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#232739" stroke-width="1"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#0b0d14"/>
  <rect width="1200" height="630" fill="url(#g)" opacity=".5"/>
  <rect width="1200" height="630" fill="url(#a)"/>
  <rect width="1200" height="630" fill="url(#b)"/>
  <image href="${uri(brandFile)}" x="80" y="60" height="64" width="${Math.round(64 * ratio(brandFile))}"/>
  ${lines}
  ${sub}
  <text x="80" y="580" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#8a8fab">Un proyecto de</text>
  <image href="${uri(celeroFile)}" x="236" y="560" height="28" width="${Math.round(28 * ratio(celeroFile))}"/>
  <g transform="translate(860 150)" fill="none" stroke-width="3" stroke-linecap="round">
    <g stroke="#c7c0ff"><path d="M130 40 40 130M130 40 220 130M40 130H220"/></g>
    <g stroke="#fbbf24"><path d="M40 130 0 230M40 130 80 230M220 130 180 230M220 130 260 230"/></g>
    <g stroke="#22d3ee"><path d="M0 230V290M80 230V290M180 230V290M260 230V290"/></g>
    <g stroke-width="3"><circle cx="130" cy="40" r="26" fill="#252153" stroke="#c7c0ff"/><circle cx="40" cy="130" r="20" fill="#252153" stroke="#c7c0ff"/><circle cx="220" cy="130" r="20" fill="#252153" stroke="#c7c0ff"/></g>
    <g fill="#3a2c0e" stroke="#fbbf24"><rect x="-18" y="212" width="36" height="36" rx="9"/><rect x="62" y="212" width="36" height="36" rx="9"/><rect x="162" y="212" width="36" height="36" rx="9"/><rect x="242" y="212" width="36" height="36" rx="9"/></g>
    <g fill="#0b3a46" stroke="#22d3ee"><rect x="-12" y="290" width="24" height="24" rx="6"/><rect x="68" y="290" width="24" height="24" rx="6"/><rect x="168" y="290" width="24" height="24" rx="6"/><rect x="248" y="290" width="24" height="24" rx="6"/></g>
  </g>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(path.join(pub, 'og.png'));

// Icono táctil: la insignia sobre fondo sólido, sin transparencia (iOS la recorta por su cuenta).
const mark = fs.readFileSync(path.join(pub, 'favicon.svg'), 'utf8');
await sharp(Buffer.from(mark), { density: 600 }).resize(180, 180).png().toFile(path.join(pub, 'apple-touch-icon.png'));

console.log('✔ public/og.png (1200×630) y public/apple-touch-icon.png (180×180)');
