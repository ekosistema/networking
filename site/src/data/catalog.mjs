// Catálogo editorial: bloques, unidades y tipos de pieza. Los .md de la raíz son la fuente de verdad;
// esto solo dice cómo se ordenan en la web, qué ruta tiene cada documento y cómo se explica en el menú.

export const kinds = [
  { id: 'conceptual', file: 'Conceptual', short: 'Conceptual', label: 'Resumen conceptual', verb: 'Entender', menu: 'Entender · conceptual', why: 'La idea desde cero, con analogías y sin tablas de datos.', time: '15 min' },
  { id: 'tecnico', file: 'Tecnico', short: 'Técnico', label: 'Resumen técnico', verb: 'Consultar', menu: 'Consultar · técnico', why: 'Cifras, normas, tablas y procedimientos para volver a ellos.', time: '1 a 2 h' },
  { id: 'casos', file: 'Casos', short: 'Casos', label: 'Casos prácticos', verb: 'Aplicar', menu: 'Aplicar · casos prácticos', why: 'Seis casos con solución paso a paso y rúbrica para autoevaluarte.', time: '1,5 a 2,5 h' },
  { id: 'autoevaluacion', file: 'Autoevaluacion', short: 'Autoevaluación', label: 'Autoevaluación', verb: 'Comprobar', menu: 'Comprobar · autoevaluación', why: 'Preguntas con la explicación de cada error habitual.', time: '40 a 50 min' },
  { id: 'tarjetas', file: 'Tarjetas', short: 'Tarjetas', label: 'Tarjetas de repaso', verb: 'Memorizar', menu: 'Memorizar · tarjetas', why: 'Cifras y definiciones para repaso espaciado.', time: '15 min' },
  { id: 'laboratorio', file: 'Laboratorio', short: 'Laboratorio', label: 'Guía de laboratorio', verb: 'Practicar', menu: 'Practicar · laboratorio', why: 'Cinco prácticas con herramientas gratuitas.', time: 'una tarde cada una' },
];

export const sections = [
  {
    id: 'diseno', dir: '01_Diseno', title: 'Diseño de redes', menu: 'Diseño · qué comprar y cómo documentarlo',
    question: '¿Qué hay que comprar y cómo se justifica?',
    units: [
      { id: 'mercado', dir: '01_Mercado_Comunicaciones', slug: 'Mercado', n: 1, title: 'Mercado de comunicaciones', blurb: 'Modelos de capas, señal, medios, equipos y contratos de acceso.' },
      { id: 'proyecto', dir: '02_Proyecto_Red', slug: 'Proyecto', n: 2, title: 'Proyecto de red', blurb: 'Requisitos, topología, cableado, direccionamiento y viabilidad.' },
      { id: 'documentacion', dir: '03_Documentacion_Tecnica', slug: 'Documentacion', n: 3, title: 'Documentación técnica', blurb: 'Calidad, normativa, memoria, planos y pliego.' },
    ],
  },
  {
    id: 'implantacion', dir: '02_Implantacion', title: 'Implantación de redes', menu: 'Implantación · planificar y demostrar',
    question: '¿Cómo se construye y cómo se demuestra que cumple?',
    units: [
      { id: 'planificacion', dir: '01_Planificacion_Proyectos', slug: 'Planificacion', n: 4, title: 'Planificación de proyectos', blurb: 'Alcance, EDT, Gantt, camino crítico, costes y riesgos.' },
      { id: 'ejecucion', dir: '02_Ejecucion_Proyectos', slug: 'Ejecucion', n: 5, title: 'Ejecución de proyectos', blurb: 'Seguimiento, protocolos, instalación eléctrica, certificación y cierre.' },
    ],
  },
  {
    id: 'administracion', dir: '03_Administracion', title: 'Administración de redes', menu: 'Administración · operar y arreglar',
    question: '¿Cómo se mantiene viva y se arregla cuando falla?',
    units: [
      { id: 'equipos', dir: '01_Equipos_Servicios', slug: 'Equipos', n: 6, title: 'Equipos y servicios de red', blurb: 'VLAN, rutas, ACL, DHCP, DNS, NAT y servicios.' },
      { id: 'gestion', dir: '02_Gestion_Redes', slug: 'Gestion', n: 7, title: 'Gestión de redes', blurb: 'SNMP, monitorización, capacidad, mantenimiento y auditoría.' },
      { id: 'incidencias', dir: '03_Incidencias', slug: 'Incidencias', n: 8, title: 'Incidencias', blurb: 'Diagnóstico con método, herramientas, prioridad y cierre.' },
    ],
  },
];

export const guide = [
  { route: 'indice', file: '00_Indice/README.md', label: 'Índice general', menu: 'Índice general · todo enlazado' },
  { route: 'ruta', file: '00_Indice/Ruta_de_aprendizaje.md', label: 'Ruta de aprendizaje', menu: 'Ruta de aprendizaje · por dónde empezar' },
  { route: 'mapa', file: '00_Indice/Mapa_de_conceptos.md', label: 'Mapa de conceptos', menu: 'Mapa de conceptos · cómo se conecta' },
  { route: 'resumen', file: '00_Indice/Resumen_de_estudio.md', label: 'Resumen por unidades', menu: 'Resumen por unidades · repaso rápido' },
  { route: 'formulario', file: '00_Indice/Formulario_y_tablas.md', label: 'Formulario y tablas', menu: 'Formulario y tablas · fórmulas y cifras' },
  { route: 'glosario', file: '00_Indice/Glosario.md', label: 'Glosario', menu: 'Glosario · términos y siglas' },
  { route: 'vigencia', file: '00_Indice/Vigencia_normativa.md', label: 'Vigencia normativa', menu: 'Vigencia normativa · qué norma usar hoy' },
];

export const empleabilidad = [
  { route: 'empleabilidad', file: '04_Empleabilidad/README.md', label: 'Competencias y empleabilidad', menu: 'Qué es y cómo usarlo' },
  { route: 'empleabilidad/cuaderno', file: '04_Empleabilidad/Cuaderno_Practicas.md', label: 'Cuaderno de prácticas', menu: 'Cuaderno · diario e informe' },
  { route: 'empleabilidad/plantillas', file: '04_Empleabilidad/Plantillas_Trabajo.md', label: 'Plantillas de trabajo', menu: 'Plantillas · documentos listos' },
  { route: 'empleabilidad/preparacion', file: '04_Empleabilidad/Preparacion_Empleabilidad.md', label: 'Preparación y empleabilidad', menu: 'Preparación · normas y entrevistas' },
];

const pad = (n) => String(n).padStart(2, '0');

// Lista plana de documentos: fuente (relativa a la raíz del repo), ruta en la web y etiqueta de menú.
// `landing: true` marca el README, que en la web se sustituye por la portada diseñada (site/src/landing).
export function allPages() {
  const pages = [{ file: 'README.md', route: '', label: 'Inicio', landing: true }];
  pages.push(...guide.map((g) => ({ ...g, label: g.menu })));
  for (const s of sections) {
    pages.push({ file: `${s.dir}/README.md`, route: s.id, label: 'Qué cubre el bloque', title: s.title, description: `${s.title}: ${s.question.replace(/^¿|\?$/g, '').toLowerCase()}. ${s.units.map((u) => u.title).join(', ')}.` });
    for (const u of s.units) {
      pages.push({ file: `${s.dir}/${u.dir}/README.md`, route: `${s.id}/${u.id}`, label: 'Presentación · qué trae', title: u.title, description: `${u.title}. ${u.blurb} Seis piezas: concepto, técnica, casos, autoevaluación, tarjetas y laboratorio.` });
      for (const k of kinds) {
        pages.push({ file: `${s.dir}/${u.dir}/${u.slug}_${k.file}.md`, route: `${s.id}/${u.id}/${k.id}`, label: k.menu, title: `${u.title}: ${k.label}`, description: `${u.title}: ${k.label.toLowerCase()}. ${k.why}` });
      }
    }
  }
  pages.push(...empleabilidad.map((e) => ({ ...e, label: e.menu })));
  pages.push({ file: '05_Audioapuntes/README.md', route: 'audio', label: 'Audioapuntes', title: 'Audioapuntes' });
  for (const s of sections) {
    for (const u of s.units) {
      pages.push({ file: `05_Audioapuntes/${pad(u.n)}_${u.slug}_Audioapuntes.md`, route: `audio/${u.id}`, label: `${u.title} · parte uno`, title: `${u.title}: audio, parte uno`, description: `Guion de audio de la unidad ${u.title} (parte uno), para escuchar con un lector de voz.` });
      pages.push({ file: `05_Audioapuntes/${pad(u.n)}_${u.slug}_Audioapuntes_Parte2.md`, route: `audio/${u.id}-parte-2`, label: `${u.title} · parte dos`, title: `${u.title}: audio, parte dos`, description: `Guion de audio de la unidad ${u.title} (parte dos), para repasar escuchando la segunda mitad.` });
    }
  }
  return pages;
}

// Menú lateral de Starlight: explica para qué sirve cada entrada.
export function sidebar() {
  const unitGroup = (s, u) => ({
    label: u.title,
    collapsed: true,
    items: [{ slug: `${s.id}/${u.id}`, label: 'Presentación · qué trae' }, ...kinds.map((k) => ({ slug: `${s.id}/${u.id}/${k.id}`, label: k.menu }))],
  });
  return [
    { slug: 'index', label: 'Inicio' },
    { label: 'Guía · para orientarse', items: guide.map((g) => ({ slug: g.route, label: g.menu })) },
    ...sections.map((s) => ({
      label: s.menu,
      collapsed: true,
      items: [{ slug: s.id, label: 'Qué cubre el bloque' }, ...s.units.map((u) => unitGroup(s, u))],
    })),
    { label: 'Empleabilidad · llevarlo al trabajo', collapsed: true, items: empleabilidad.map((e) => ({ slug: e.route, label: e.menu })) },
    {
      label: 'Audioapuntes · repasar escuchando',
      collapsed: true,
      items: [
        { slug: 'audio', label: 'Cómo usarlos' },
        ...sections.flatMap((s) => s.units.flatMap((u) => [
          { slug: `audio/${u.id}`, label: `${u.title} · parte uno` },
          { slug: `audio/${u.id}-parte-2`, label: `${u.title} · parte dos` },
        ])),
      ],
    },
  ];
}
