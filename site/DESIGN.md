# DESIGN.md · Sistema de diseño del sitio (Networking)

Directrices de diseño, UX, accesibilidad, SEO y rendimiento de **Networking**, el sitio estático que presenta los `.md` de la raíz del repositorio. Es la referencia para cualquier cambio en `site/`: si una decisión no está aquí, se discute y se añade aquí.

> Los tokens viven en [`src/styles/tokens.css`](src/styles/tokens.css); la integración con Starlight, en [`src/styles/custom.css`](src/styles/custom.css); el aspecto del contenido, en [`src/styles/content.css`](src/styles/content.css) y [`src/plugins/rehype-enhance.mjs`](src/plugins/rehype-enhance.mjs); la estructura de navegación, en [`src/data/catalog.mjs`](src/data/catalog.mjs).

---

## 1. Principios

1. **Aprender antes que navegar.** Cada pantalla responde a "¿qué hago ahora?". Hay siempre un siguiente paso evidente: la ruta, el índice o el buscador.
2. **El contenido manda.** El diseño enmarca el texto, no compite con él: líneas de unos 68 caracteres, tablas legibles, código con ancho fijo y poco ruido.
3. **La fuente de verdad son los `.md`.** El sitio nunca contiene contenido propio duplicado. Todo énfasis visual sale de patrones editoriales ya presentes en el Markdown (etiquetas en negrita, `Errores típicos`, tablas), que un plugin convierte en componentes. Los `.md` siguen siendo Markdown puro y legibles en GitHub.
4. **Énfasis con criterio.** Cada estilo significa algo y se repite igual en todo el sitio (§6). Si todo destaca, nada destaca.
5. **Accesible por defecto.** WCAG 2.2 AA es el mínimo. Nada se comunica solo con color, movimiento o hover: el color del bloque siempre va con su nombre.
6. **Rápido de verdad.** HTML estático, JavaScript solo donde aporta (buscador), sin dependencias de terceros en tiempo de ejecución.
7. **Citable.** Cada página se entiende sin ejecutar JS: encabezados claros, datos estructurados y migas de pan.

## 2. Navegación

Tres formas de entrar, visibles desde cualquier página:

| Modo | Para quién | Dónde |
|---|---|---|
| **Ruta** | "No sé por dónde empezar" | Cabecera (`Ruta`), portada, menú (Guía) |
| **Bloques y unidades** | "Sé qué tema busco" | Menú lateral, portada |
| **Búsqueda** | "Necesito un dato ya" | Cabecera (Ctrl K), botón de la portada |

### Menú lateral explicativo

El menú no solo lista: **dice para qué sirve cada entrada**. Cada etiqueta lleva un verbo o una pista tras un punto medio.

- Grupos: `Guía · para orientarse`, `Diseño · qué comprar y cómo documentarlo`, `Implantación · planificar y demostrar`, `Administración · operar y arreglar`, `Empleabilidad · llevarlo al trabajo`, `Audioapuntes · repasar escuchando`.
- Dentro de cada unidad, las piezas llevan su verbo: `Entender · conceptual`, `Consultar · técnico`, `Aplicar · casos prácticos`, `Comprobar · autoevaluación`, `Memorizar · tarjetas`, `Practicar · laboratorio`.
- Los bloques y las unidades se pliegan; la unidad actual se despliega sola.
- Las etiquetas viven en `catalog.mjs` (única fuente: menú, migas, pestañas y portada las leen de ahí).

### Migas de pan y pestañas de unidad

- **Migas** (`Inicio › Bloque › Unidad`) en todas las páginas salvo la portada. También se emiten como `BreadcrumbList`.
- **Franja de datos** bajo el título: bloque (con su color), para qué sirve la pieza y minutos de lectura.
- **Pestañas de unidad** en las páginas de una unidad: Presentación, Conceptual, Técnico, Casos, Autoevaluación, Tarjetas, Laboratorio y Audio. Dan la vista de conjunto de la unidad sin recorrer el menú.

### Anterior y siguiente

Solo existen donde **aportan un orden de lectura real**:

- Dentro de una unidad: Presentación → Conceptual → Técnico → Casos → Autoevaluación → Tarjetas → Laboratorio.
- Entre la parte uno y la parte dos de un audioapunte.

Nunca saltan entre unidades, bloques ni documentos de la guía: ahí el orden lo dan las migas y el menú. Lo calcula `sync-content.mjs` (`prev`/`next` en el frontmatter, `false` por defecto).

## 3. Tokens

Tres niveles: **primitivos** (valores crudos, no se usan en componentes) → **semánticos** (cambian con el tema) → **de sistema** (no cambian). Los componentes consumen solo semánticos y de sistema. Prefijo `--ds-`.

### Sistema (no cambian con el tema)

| Familia | Tokens |
|---|---|
| Espaciado (rejilla de 4 px) | `--ds-space-1` .25rem · `-2` .5 · `-3` .75 · `-4` 1 · `-5` 1.5 · `-6` 2 · `-7` 3 · `-8` 4.5 |
| Radios | `--ds-radius-sm` .4rem · `-md` .7 · `-lg` 1 · `-pill` 999px |
| Movimiento | `--ds-ease` cubic-bezier(.2,.7,.2,1) · `--ds-dur-fast` .15s · `--ds-dur` .25s |
| Objetivos táctiles | `--ds-target-min` 1.75rem (≥ 24 px WCAG 2.2) · `--ds-target-touch` 2.75rem en punteros táctiles |
| Medidas | `--ds-measure` 68ch · `--ds-content-width` 50rem · `--ds-wide-width` 72rem |

### Semánticos

| Token | Oscuro (por defecto) | Claro | Uso |
|---|---|---|---|
| `--ds-bg` | `#0b0d14` | `#ffffff` | Fondo de página |
| `--ds-surface` | `#10131d` | `#ffffff` | Tarjetas, cabecera |
| `--ds-surface-raised` | `#171a27` | `#f0f1f8` | Chips, cabeceras de tabla, código en línea |
| `--ds-border` | `#232739` | `#dfe1ee` | Bordes |
| `--ds-text` / `-muted` / `-subtle` | `#f4f5fb` / `#b8bcd2` / `#8a8fab` | `#0f1222` / `#3b405a` / `#5d627e` | Texto principal, secundario y de apoyo |
| `--ds-accent` / `-text` / `-wash` | `#7c6cff` / `#c7c0ff` / `#1c1a4b` | `#5b45f0` / `#3a28b8` / `#e6e3ff` | Acento de marca, texto de acento y fondo suave |
| `--ds-focus` | `#a79cff` | `#5b45f0` | Anillo de foco |

### Color por bloque

Cada bloque del oficio tiene un color que se repite en la portada, la franja de datos y la ilustración. **Nunca es el único canal**: siempre aparece junto al nombre del bloque.

| Bloque | Token | Oscuro | Claro |
|---|---|---|---|
| Diseño | `--ds-block-diseno` | `#c7c0ff` (índigo) | `#5b45f0` |
| Implantación | `--ds-block-implantacion` | `#fbbf24` (ámbar) | `#92400e` |
| Administración | `--ds-block-administracion` | `#22d3ee` (cian) | `#0e7490` |

### Tipografía

- Una sola sans para todo: **Archivo** (variable), una grotesca de herencia industrial, seria y equilibrada, sin formas geométricas ni aristas llamativas. Títulos, etiquetas y navegación usan `--ds-font-display`, que apunta a la misma familia con más peso (600) y tracking ligeramente cerrado. Código y esquemas ASCII: **IBM Plex Mono** (Archivo no tiene versión monoespaciada). Ambas cubren el español completo y se sirven desde el propio sitio (paquetes `@fontsource`), sin peticiones a terceros. Regla: no mezclar una segunda familia de texto.
- Escala base de Starlight; títulos de sección 1.65 rem y 1.3 rem, con `letter-spacing` ligeramente negativo.

## 4. Temas

Oscuro por defecto, claro bajo `data-theme='light'`. Todos los pares de color del texto cumplen **AA** (4,5:1 el texto normal, 3:1 el grande y los componentes). Antes de añadir un color, comprueba su contraste en ambos temas.

## 5. Portada

Una sola idea: aprender redes en el orden del oficio. Estructura, de arriba abajo:

1. **Hero**: titular, una frase de apoyo, buscador, dos llamadas a la acción (ruta e índice) y tres cifras reales (unidades, casos, audioapuntes). A la derecha, un **esquema de red** en SVG (núcleo, distribución y acceso) cuyos colores son los de los tres bloques; sus líneas animadas se detienen con `prefers-reduced-motion`.
2. **Los tres lados del oficio**: una tarjeta por bloque con su pregunta, su color y sus unidades con una línea de descripción.
3. **Seis formas de estudiar una unidad**: Entender, Consultar, Aplicar, Comprobar, Memorizar y Practicar, con su para qué y su tiempo.
4. **Tres formas de entrar**: empezar de cero, buscar un dato, repasar.
5. **Preguntas frecuentes** (también como `FAQPage`).

Reglas: un único `h1`, una llamada principal por pantalla, nada que dependa del hover y ninguna cifra inventada (se calculan del catálogo).

## 6. Énfasis del contenido

Los `.md` marcan la intención con etiquetas en negrita; `rehype-enhance.mjs` las reconoce y `content.css` las pinta. **Un patrón, un significado**:

| En el Markdown | Componente | Significado |
|---|---|---|
| `> **En una frase.** …` | Llamada *lead* (acento, chispa) | La idea de la página en una línea |
| `> **Cómo usarlo.** / **Para qué sirve.** / **Alcance.**` | Llamada informativa (cian, icono de información) | Instrucciones de uso y alcance |
| `> **Nota de vigencia.** / **Aviso.**` | Llamada de aviso (ámbar, triángulo) | Dato que puede haber caducado |
| `> **Véase también.** …` | Llamada de referencia (índigo, flecha) | Enlace a otra unidad |
| `**La intuición.** / **Lo formal.** / **Un ejemplo.**` | Tarjeta de concepto (cian / índigo / verde) | Las tres miradas a una idea |
| `**Enunciado.** / **Se pide.** / **Solución.** / **Rúbrica…**` | Bloques de caso (cian / índigo / verde / ámbar) | El problema, lo que se pide y su resolución |
| `**Objetivo.** / **Pasos.** / **Qué debes observar.** / **Ampliación.**` | Bloques de laboratorio | Qué se practica y qué debería salir |
| `## Errores típicos` y `**Error típico.**` | Panel rosa con tarjetas numeradas | Lo que más se confunde |
| Tablas | Contenedor con borde, cabecera fija y filas alternas | Datos de consulta |
| `**N.** pregunta` + opciones | Tarjeta de pregunta con número | Autoevaluación |
| Lista de `Qué te llevas de aquí` | Marcas de verificación verdes | Resultados de aprendizaje |

Reglas:
- El plugin **no inventa** contenido: solo añade clases y envoltorios. Si un `.md` no usa la etiqueta, no hay componente.
- Para añadir un patrón: etiqueta en el Markdown, entrada en `rehype-enhance.mjs`, estilo en `content.css`, fila en esta tabla.
- Colores y significados son los del §3; no se introducen colores nuevos en el contenido.

## 7. Accesibilidad

- Contraste AA en ambos temas; foco visible de 3 px (`--ds-focus`); objetivos de 28 px (44 px en táctil).
- Un solo `h1` por página, jerarquía sin saltos y `lang="es"`.
- Migas y pestañas con `aria-label`; la pestaña actual con `aria-current="page"`.
- Los iconos de las llamadas son decorativos (máscaras CSS); el significado está siempre en la etiqueta de texto.
- `prefers-reduced-motion` desactiva animaciones; `forced-colors` mantiene bordes visibles.
- Los bloques de código con scroll horizontal reciben `tabindex` (Head.astro).

## 8. SEO y GEO

Todo se genera en el build (HTML estático): nada depende de JavaScript para ser rastreado o citado. `npm run check:seo` audita el resultado en cada despliegue y bloquea la publicación si falla.

**Por página**
- `title` único (`Unidad: pieza | Networking`), `description` propia de 50 a 170 caracteres (se genera del catálogo, no se repite), `canonical` propio, un solo `h1`, `lang="es"`.
- Open Graph y Twitter completos con imagen propia (`og.png`, 1200×630, generada con `npm run og`) y `twitter:card=summary_large_image`.
- `robots`: `index, follow, max-snippet:-1, max-image-preview:large`; la 404 lleva `noindex`.
- Fecha real de última modificación (de git) visible en la página, en `article:modified_time` y en el JSON-LD.

**Datos estructurados (JSON-LD, servidos en el HTML)**
- Todas las páginas: `Organization` (CeleroLab) y `WebSite`.
- Portada: `FAQPage` (siete preguntas con respuesta de texto plano) e `ItemList` con las ocho unidades.
- Resto: `LearningResource` (tipo de pieza, tiempo de lectura, qué enseña, licencia, fecha) y `BreadcrumbList`.

**Descubrimiento**
- `sitemap-index.xml` con `<lastmod>` real por página, enlazado con `<link rel="sitemap">`; la 404 no se incluye.
- `llms.txt` (índice para asistentes de IA, del catálogo) y `llms-full.txt` (resúmenes conceptuales y guía en un fichero).
- `robots.txt` permite a los rastreadores de buscadores y de IA y declara el sitemap con URL absoluta. Es efectivo porque el sitio cuelga de la raíz de un dominio propio (`networking.celerolab.com`).
- Buscador local con Pagefind (sin servicios externos).

**Contenido citable (GEO)**
- Cada unidad empieza por una frase que declara qué es y para qué sirve (`En una frase`), y la portada declara la entidad (qué es Networking, de quién, con qué licencia y con qué alcance).
- Las preguntas frecuentes responden en 2 o 3 frases autocontenidas, sin pronombres sin antecedente.
- Procedencia, licencia (CC BY-SA 4.0) y carácter no oficial visibles en el pie de todas las páginas y en `llms.txt`.
- Los datos volátiles llevan año o marca (`[no verificado]`, `[orientativo]`, `[comprobar]`).

## 9. Rendimiento

- Cero JavaScript propio salvo el botón del buscador y el foco en bloques de código.
- Tipografía autoalojada y precargada (Archivo latino); sin imágenes raster.
- La portada usa `content-visibility: auto` en las secciones bajo el primer pliegue.
- Objetivo: LCP < 2,5 s, CLS < 0,1.

## 10. Créditos y marca

- El sitio es un proyecto de **CeleroLab**. Se usa su **logotipo oficial** (`public/brand/celerolab-logo-on-dark.svg` y `-on-light.svg`) mediante el componente `CeleroLogo.astro`, sin deformarlo ni recolorearlo.
- Aparece en la portada (bloque de crédito) y en el pie de **todas** las páginas, siempre enlazado a celerolab.com con UTM (`utm_source=networking`).
- El nombre y la marca del sitio se definen solo en `src/data/site.mjs`.
- **Logotipo de Networking**: insignia de esquinas redondeadas con degradado índigo → cian y una «N» dibujada como red (cuatro nodos y tres enlaces), junto a la palabra «NETWORKING» en Archivo SemiBold con tracking moderado, convertida a trazados. Variantes `on-dark` y `on-light` en `src/assets/`; el icono suelto es `public/favicon.svg`. Se regenera con `npm run logo` (`scripts/make-logo.mjs`). En la cabecera se muestra discreto, a 1,5 rem de alto (unos 150 px de ancho). Margen de seguridad: el alto del nodo; no deformar ni recolorear fuera de las dos variantes.

## 11. Cómo cambiar el diseño

1. Un valor repetido se convierte en token (`tokens.css`); nunca se pone un color o un tamaño suelto en un componente.
2. Un componente nuevo usa solo tokens semánticos y de sistema y trae sus estados (hover, foco, activo, deshabilitado) y sus dos temas.
3. Se prueba en oscuro y claro, a 375 px y a 1360 px, con teclado y con `prefers-reduced-motion`.
4. Se documenta aquí.
