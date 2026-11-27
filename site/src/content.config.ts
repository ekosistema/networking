import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Campos propios que escribe scripts/sync-content.mjs a partir del catálogo y del contenido.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        section: z.string().optional(),   // diseno | implantacion | administracion | audio | empleabilidad | indice
        unit: z.string().optional(),      // id de la unidad (mercado, proyecto…)
        kind: z.string().optional(),      // portada | conceptual | tecnico | casos | …
        minutes: z.number().optional(),   // minutos de lectura estimados
      }),
    }),
  }),
};
