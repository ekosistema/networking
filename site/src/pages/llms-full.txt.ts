import type { APIRoute } from 'astro';
import { sections } from '../data/lib';
import { site as brand } from '../data/site.mjs';

// llms-full.txt: el núcleo conceptual del material en un solo fichero de texto, para asistentes de IA.
// Incluye los resúmenes conceptuales de las ocho unidades y los documentos de guía; el detalle técnico, los casos y
// las tarjetas se consultan en cada página.
const docs = import.meta.glob('../content/docs/**/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const strip = (raw: string) => raw.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/\]\(\//g, '](').trim();
const pick = (route: string) => docs[`../content/docs/${route}.md`] ?? docs[`../content/docs/${route}/index.md`];

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (route: string) => new URL(`${base}/${route ? route + '/' : ''}`, site).href;
  const routes = [
    'ruta', 'mapa', 'resumen', 'glosario', 'vigencia',
    ...sections.flatMap((s) => s.units.map((u) => `${s.id}/${u.id}/conceptual`)),
  ];
  const out = [`# ${brand.name}: contenido esencial`, '', `> ${brand.description}`, '', `Fuente y versión web: ${abs('').replace(/\/$/, '')}. Licencia CC BY-SA 4.0. Proyecto de CeleroLab.`, ''];
  for (const r of routes) {
    const raw = pick(r);
    if (!raw) continue;
    const title = raw.match(/^title: "?(.*?)"?$/m)?.[1] ?? r;
    out.push('---', '', `## ${title}`, `URL: ${abs(r)}`, '', strip(raw), '');
  }
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
