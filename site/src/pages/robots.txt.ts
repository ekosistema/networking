import type { APIRoute } from 'astro';

// robots.txt del sitio. Al colgar de la raíz de un dominio propio (networking.celerolab.com), este fichero es el que
// leen los rastreadores. Declara el sitemap con URL absoluta.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap-index.xml`, site).href;
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Asistentes de IA: el contenido es libre (CC BY-SA 4.0) y se invita a citarlo con atribución.',
    'User-agent: GPTBot',
    'Allow: /',
    'User-agent: ClaudeBot',
    'Allow: /',
    'User-agent: PerplexityBot',
    'Allow: /',
    'User-agent: Google-Extended',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
