import { sections, kinds, guide, empleabilidad } from './catalog.mjs';

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (route: string) => `${base}/${route ? route + '/' : ''}`;

/** Enlace a celerolab.com con UTM (convención de CeleroLab); `content` identifica el emplazamiento. */
export const celeroUrl = (content: string) =>
  `https://celerolab.com/?utm_source=networking&utm_medium=referral&utm_campaign=campana_general&utm_content=${content}`;

export type Crumb = { label: string; href?: string };

/** Migas de pan de una página a partir de su identificador (ruta). La página actual no se repite. */
export function crumbsFor(id: string): Crumb[] {
  const crumbs: Crumb[] = [{ label: 'Inicio', href: url('') }];
  const route = id === 'index' ? '' : id.replace(/\/index$/, '');
  const [first, second] = route.split('/');
  const section = sections.find((s) => s.id === first);
  if (section) {
    if (route !== section.id) crumbs.push({ label: section.title, href: url(section.id) });
    const unit = section.units.find((u) => u.id === second);
    if (unit && route.split('/').length > 2) crumbs.push({ label: unit.title, href: url(`${section.id}/${unit.id}`) });
  } else if (guide.some((g) => g.route === route)) {
    crumbs.push({ label: 'Guía' });
  } else if (first === 'audio' && route !== 'audio') {
    crumbs.push({ label: 'Audioapuntes', href: url('audio') });
  } else if (first === 'empleabilidad' && route !== 'empleabilidad') {
    crumbs.push({ label: 'Competencias y empleabilidad', href: url('empleabilidad') });
  }
  return crumbs;
}

/** Pestañas de la unidad a la que pertenece una página (vacío si no es de una unidad). */
export function unitTabs(id: string) {
  const route = id.replace(/\/index$/, '');
  const [sid, uid] = route.split('/');
  const section = sections.find((s) => s.id === sid);
  const unit = section?.units.find((u) => u.id === uid);
  if (!section || !unit) return null;
  const tabs = [
    { label: 'Presentación', route: `${section.id}/${unit.id}` },
    ...kinds.map((k) => ({ label: k.short, route: `${section.id}/${unit.id}/${k.id}` })),
    { label: 'Audio', route: `audio/${unit.id}` },
  ];
  return { unit, section, tabs: tabs.map((t) => ({ ...t, href: url(t.route), current: t.route === route })) };
}

export { sections, kinds, guide, empleabilidad };
