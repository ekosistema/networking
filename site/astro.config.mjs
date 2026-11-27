import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { sidebar } from './src/data/catalog.mjs';
import rehypeEnhance from './src/plugins/rehype-enhance.mjs';
import { site as brand } from './src/data/site.mjs';

// SITE_URL se fija en el workflow de despliegue (https://networking.celerolab.com). SITE_BASE queda vacío porque el sitio
// cuelga de la raíz de un dominio propio; solo se usaría para publicar bajo una ruta (por ejemplo, un GitHub Pages de proyecto).
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.SITE_BASE || undefined;
const repo = process.env.REPO_URL ?? brand.repo;
const abs = (p) => new URL(`${base ?? ''}${p}`, site).href;

// Fechas reales de última modificación por ruta (las genera scripts/sync-content.mjs a partir de git).
let lastmod = {};
try { lastmod = JSON.parse(fs.readFileSync(new URL('./src/data/lastmod.json', import.meta.url), 'utf8')); } catch { /* sin historial: sin lastmod */ }
const routeOf = (url) => new URL(url).pathname.replace(base ?? '', '').replace(/^\/|\/$/g, '');

export default defineConfig({
  site,
  base,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  markdown: { rehypePlugins: [rehypeEnhance] },
  integrations: [
    // Se declara antes que Starlight para controlar el sitemap: añade <lastmod> y prioriza la portada.
    sitemap({
      serialize(item) {
        const date = lastmod[routeOf(item.url)];
        if (date) item.lastmod = date;
        return item;
      },
    }),
    starlight({
      title: brand.name,
      description: brand.description,
      defaultLocale: 'root',
      locales: { root: { label: 'Español', lang: 'es' } },
      favicon: '/favicon.svg',
      logo: {
        light: './src/assets/networking-logo-on-light.svg',
        dark: './src/assets/networking-logo-on-dark.svg',
        alt: brand.name,
        replacesTitle: true,
      },
      social: [{ icon: 'github', label: 'GitHub', href: repo }],
      lastUpdated: true,
      credits: false,
      expressiveCode: { defaultProps: { frame: 'code' } },
      customCss: [
        '@fontsource-variable/archivo',
        '@fontsource/ibm-plex-mono/400.css',
        '@fontsource/ibm-plex-mono/500.css',
        '@fontsource/ibm-plex-mono/600.css',
        './src/styles/custom.css',
      ],
      head: [
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${base ?? ''}/apple-touch-icon.png` } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: brand.name } },
        { tag: 'meta', attrs: { property: 'og:image', content: abs('/og.png') } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: `${brand.name}: ${brand.tagline.toLowerCase()}` } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: abs('/og.png') } },
        { tag: 'meta', attrs: { name: 'author', content: brand.author } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0b0d14' } },
        { tag: 'link', attrs: { rel: 'license', href: 'https://creativecommons.org/licenses/by-sa/4.0/' } },
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', href: abs('/llms.txt'), title: 'llms.txt' } },
      ],
      components: {
        Head: './src/components/Head.astro',
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      sidebar: sidebar(),
    }),
  ],
});
