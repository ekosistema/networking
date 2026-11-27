import type { APIRoute } from 'astro';
import { sections, kinds, guide } from '../data/lib';
import { site as brand } from '../data/site.mjs';

// llms.txt: índice en texto plano para asistentes de IA (convención llmstxt.org). Se genera del catálogo.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (route: string) => new URL(`${base}/${route ? route + '/' : ''}`, site).href;
  const lines: string[] = [
    `# ${brand.name}`,
    '',
    `> ${brand.description}`,
    '',
    'Material de estudio general en español, no oficial. Parte del programa formativo publicado en el BOE (RD 1531/2011, modificado por el RD 628/2013) como referencia de temas; los textos, ejemplos y ejercicios son propios. Licencia CC BY-SA 4.0: se puede citar y reutilizar con atribución y la misma licencia. Proyecto de CeleroLab.',
    '',
    '## Guía',
    ...guide.map((g) => `- [${g.label}](${abs(g.route)})`),
    '',
  ];
  for (const s of sections) {
    lines.push(`## ${s.title}`, `${s.question}`, '');
    for (const u of s.units) {
      lines.push(`### ${u.title}`, u.blurb);
      for (const k of kinds) lines.push(`- [${k.label}](${abs(`${s.id}/${u.id}/${k.id}`)}): ${k.why}`);
      lines.push('');
    }
  }
  lines.push('## Otros', `- [Competencias y empleabilidad](${abs('empleabilidad')})`, `- [Audioapuntes](${abs('audio')})`, `- [Contenido completo en un fichero](${abs('llms-full.txt').replace(/\/$/, '')})`, '');
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
