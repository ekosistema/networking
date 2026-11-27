// Plugin de rehype: da forma visual a los patrones editoriales del Markdown sin tocar las fuentes.
// Los .md siguen siendo Markdown puro; aquí solo se añaden clases y envoltorios que el CSS (content.css) pinta.
//
//   > **En una frase.** …        → llamada destacada (lead)
//   > **Cómo usarlo.** …         → llamada informativa
//   **La intuición.** / **Lo formal.** / **Un ejemplo.**                → tarjetas de concepto
//   **Enunciado.** / **Se pide.** / **Solución.** / **Rúbrica…**       → bloques de caso práctico
//   **Objetivo.** / **Pasos.** / **Qué debes observar.** / **Ampliación.** → bloques de laboratorio
//   **Error típico.** / ## Errores típicos                             → panel de avisos
//   tablas                                                              → contenedor con scroll
//   preguntas numeradas de la autoevaluación                            → tarjetas de pregunta

const text = (n) => (n.type === 'text' ? n.value : (n.children ?? []).map(text).join(''));
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const el = (tagName, className, children) => ({ type: 'element', tagName, properties: { className }, children });
const cls = (n) => [].concat(n.properties?.className ?? []);
const addClass = (n, ...c) => { n.properties ??= {}; n.properties.className = [...cls(n), ...c]; };

const CALLOUTS = [
  [/^en una frase/, 'lead'],
  [/^(como usar|para que sirve|por que existe|alcance)/, 'info'],
  [/^nota de vigencia/, 'warn'],
  [/^aviso/, 'warn'],
  [/^vease tambien/, 'see'],
];

const LABELS = {
  'la-intuicion': 'intuicion', 'lo-formal': 'formal', 'un-ejemplo': 'ejemplo',
  'enunciado': 'enunciado', 'se-pide': 'sepide', 'solucion': 'solucion', 'rubrica-10-puntos': 'rubrica',
  'objetivo': 'objetivo', 'pasos': 'pasos', 'que-debes-observar': 'observar', 'ampliacion': 'ampliacion',
  'error-tipico': 'error', 'errores-tipicos': 'error',
};

function label(node) {
  if (node.type !== 'element' || node.tagName !== 'p') return null;
  const first = node.children?.find((c) => !(c.type === 'text' && !c.value.trim()));
  if (!first || first.type !== 'element' || first.tagName !== 'strong') return null;
  return LABELS[norm(text(first))] ?? null;
}

const isHeading = (n) =>
  n.type === 'element' &&
  (/^h[1-6]$/.test(n.tagName) || (n.tagName === 'div' && cls(n).includes('sl-heading-wrapper')));
const headingLevel = (n) => {
  if (!isHeading(n)) return 0;
  const h = /^h[1-6]$/.test(n.tagName) ? n : n.children.find((c) => c.type === 'element' && /^h[1-6]$/.test(c.tagName));
  return h ? Number(h.tagName[1]) : 0;
};
const headingText = (n) => text(n);

export default function rehypeEnhance() {
  return (tree) => {
    const out = [];
    let section = '';
    let block = null; // bloque etiquetado abierto

    const close = () => { block = null; };

    for (const node of tree.children) {
      if (node.type === 'element') {
        // Encabezados: cierran bloque y fijan la sección actual (h2)
        if (isHeading(node)) {
          close();
          if (headingLevel(node) === 2) section = norm(headingText(node));
          out.push(node);
          continue;
        }

        // Llamadas (blockquote con etiqueta en negrita)
        if (node.tagName === 'blockquote') {
          const p = node.children.find((c) => c.type === 'element' && c.tagName === 'p');
          const strong = p?.children.find((c) => c.type === 'element' && c.tagName === 'strong');
          const key = strong ? norm(text(strong)).replace(/-/g, ' ') : '';
          const hit = CALLOUTS.find(([re]) => re.test(key));
          if (hit) addClass(node, 'callout', `callout-${hit[1]}`);
          else if (/telematicas?$|unidad \d/.test(key + ' ' + norm(text(p ?? node)))) addClass(node, 'unit-tag');
          close();
          out.push(node);
          continue;
        }

        // Tablas: contenedor desplazable
        if (node.tagName === 'table') {
          const wrap = el('div', ['table-wrap'], [node]);
          if (block) block.children.push(wrap); else out.push(wrap);
          continue;
        }

        // Preguntas de la autoevaluación: "**12.** enunciado"
        if (node.tagName === 'p') {
          const first = node.children.find((c) => !(c.type === 'text' && !c.value.trim()));
          if (first?.type === 'element' && first.tagName === 'strong' && /^\d+\.$/.test(text(first).trim())) {
            addClass(node, 'quiz-q');
            close();
            out.push(node);
            continue;
          }
        }
        if (node.tagName === 'ul') {
          const prev = [...out].reverse().find((n) => n.type === 'element');
          if (prev && cls(prev).includes('quiz-q')) addClass(node, 'quiz-opts');
        }

        // Bloques etiquetados
        const kind = label(node);
        if (kind) {
          block = el('div', ['lb', `lb-${kind}`], [node]);
          out.push(block);
          continue;
        }

        // En la sección de errores típicos, todo va en un panel
        if (section === 'errores-tipicos') {
          if (!block || !cls(block).includes('lb-panel')) { block = el('div', ['lb', 'lb-panel'], []); out.push(block); }
          block.children.push(node);
          continue;
        }

        if (block && !cls(block).includes('lb-panel')) { block.children.push(node); continue; }
      }
      out.push(node);
    }
    tree.children = out;

    // Marcas por sección para el CSS (listas de "qué te llevas", comprobaciones finales…)
    let sec = '';
    for (const n of tree.children) {
      if (isHeading(n) && headingLevel(n) === 2) sec = norm(headingText(n));
      else if (n.type === 'element' && sec) { n.properties ??= {}; n.properties.dataSec = sec; }
    }
  };
}
