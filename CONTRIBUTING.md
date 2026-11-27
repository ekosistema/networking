# Guía de contribución

¡Gracias por querer mejorar Networking! Este repositorio es una guía de redes en **español** (Markdown) y la web que la publica (`site/`). Contribuir es, sobre todo, editar texto: no hay ninguna aplicación que compilar para tocar el contenido.

Al participar aceptas cumplir el [Código de conducta](CODE_OF_CONDUCT.md). Las contribuciones se publican bajo la licencia del proyecto, [CC BY-SA 4.0](LICENSE).

## Formas de contribuir

- **Corregir un error**: dato desactualizado, norma derogada, enlace roto, cálculo que no sale, errata. Abre una [incidencia](https://github.com/ekosistema/networking/issues/new/choose) o envía directamente un Pull Request.
- **Actualizar una norma o una cifra**: versiones, vigencia, fin de vida de una tecnología. Cita siempre la fuente oficial.
- **Mejorar una explicación**: una analogía que no funciona, un caso que se puede resolver mejor, una pregunta de autoevaluación ambigua.
- **Proponer una unidad o una pieza nueva**: abre antes una incidencia para comprobar que encaja y que nadie la está redactando.
- **Mejorar la web** (`site/`): accesibilidad, diseño, rendimiento. Lee antes [`site/DESIGN.md`](site/DESIGN.md).

Para dudas generales, usa una incidencia; para vulnerabilidades, sigue la [política de seguridad](SECURITY.md).

## Cómo enviar un cambio

1. Haz un fork y crea una rama desde `main` (`docs/tema`, `fix/descripcion`).
2. Aplica tus cambios siguiendo las convenciones de abajo.
3. Ejecuta el comprobador y corrige lo que señale (requiere Node 18 o posterior y no instala dependencias):

   ```bash
   node scripts/check-content.mjs
   ```

4. Si tocas `site/`, comprueba que compila y pasa la auditoría SEO:

   ```bash
   cd site
   npm ci
   npm run build
   npm run check:seo
   ```

5. Haz commits siguiendo Conventional Commits en español (`docs: …`, `fix: …`, `feat(site): …`).
6. Abre el Pull Request rellenando la plantilla.

## Convenciones del contenido

- **Español de España**, con todas sus tildes y signos. Sin guiones largos ni medios (`—`, `–`): usa coma, dos puntos, paréntesis o «de X a Y».
- **Markdown puro**: sin HTML, LaTeX ni imágenes. Los diagramas son ASCII en bloques `text`, de 78 columnas como máximo.
- **Enlaces relativos** entre ficheros, nunca enlaces a carpetas.
- **Frontmatter** en cada documento de contenido: `title`, `description`, `section`, `unit` (si procede), `kind`, `order` y `tags`.
- **No inventes cifras, normas ni fechas.** Verifica en la fuente oficial y cítala; si no puedes comprobar algo, márcalo con `[no verificado]`, `[orientativo]` o `[comprobar]`. Los datos volátiles llevan año.
- **Texto propio.** No copies párrafos, tablas ni ejemplos de otras obras: explica con tus palabras y enlaza la fuente.
- **Nada que ate el material a un centro, un calendario o una prueba concreta**: sin códigos de unidad o módulo formativo, sin fechas de calendario y sin lenguaje de examen. El comprobador lo vigila.
- **Audioapuntes**: guion en prosa para un lector de voz, sin dígitos, símbolos ni Markdown en el cuerpo, con las siglas deletreadas la primera vez y frases de menos de 40 palabras.

## Si añades, renombras o mueves un documento

1. Actualiza `site/src/data/catalog.mjs`: el sincronizador y el comprobador avisan si falta.
2. Actualiza los índices: `README.md`, `00_Indice/README.md`, el README del bloque y `05_Audioapuntes/README.md`.
3. Mantén los enlaces relativos.

## Revisión

Una persona mantenedora revisará tu Pull Request y puede pedirte cambios o fuentes. Las discusiones deben ser respetuosas y centrarse en el contenido. El comprobador debe pasar antes de fusionar, y el flujo de despliegue repite la comprobación y la auditoría SEO antes de publicar.
