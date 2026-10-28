// UI strings shared by every page: navigation, buttons, labels and accessibility text.
// Spanish is the source; the `satisfies` check makes every other language define exactly the same keys.

const es = {
  'site.title': 'Emely Aponte | Senior Product & UX/UI Designer en Madrid',
  'site.description':
    'Portafolio de Emely Aponte, Senior Product & UX/UI Designer en Madrid. Casos de estudio de sistemas de diseño, banca móvil, fintech y e-commerce.',
  'site.location': 'Madrid, España',
  'site.ogLocale': 'es_ES',

  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'nav.main': 'Principal',
  'nav.footer': 'Pie de página',
  'nav.open': 'Abrir menú',
  'nav.close': 'Cerrar menú',
  'nav.skip': 'Saltar al contenido',
  'nav.logo': 'Emely Aponte, ir al inicio',

  'lang.label': 'Idioma',
  'lang.es': 'Español',
  'lang.en': 'English',
  'lang.unavailable': 'Esta página todavía no está traducida; te llevamos al inicio.',

  'common.newTab': '(se abre en una pestaña nueva)',
  'common.cv': 'Ver mi currículum',
  'common.seeProjects': 'Ver proyectos',
  'common.caseStudy': 'Caso de estudio',
  'common.seeCaseStudy': 'Ver caso de estudio',
  'common.social': 'Redes sociales',

  'cta.label': 'Siguientes pasos',
  'cta.talk': '¿Hablamos?',
  'cta.message': 'Envíame un mensaje',
  'cta.more': '¿Quieres ver más?',
  'cta.projects': 'Explora mis proyectos',

  'footer.role': 'Senior Product & UX/UI Designer',
  'footer.rights': 'Todos los derechos reservados.',

  'contactBlock.eyebrow': 'Contacto',
  'contactBlock.title': '¡Mándame un mensaje!',
  'contactBlock.text':
    '¿Tienes un proyecto en mente, una vacante o simplemente quieres conversar sobre diseño? Me encantará leerte.',
  'contactBlock.button': 'Escribirme',
  'contactBlock.followTitle': 'Sigue mi trayectoria.',
  'contactBlock.followText': 'En mis redes comparto novedades, proyectos y oportunidades.',

  'project.status.launched': 'Lanzado',
  'project.status.ongoing': 'En curso',
  'project.status.building': 'En construcción',
  'project.status.pitch': 'Propuesta',
  'project.open': 'Abrir el caso de estudio de',

  'case.eyebrow': 'Caso de estudio',
  'case.back': 'Todos los proyectos',
  'case.coverAlt': 'Pantallas del proyecto',
  'case.summary': 'Resumen',
  'case.description': 'Descripción',
  'case.brief': 'El encargo',
  'case.toc': 'En este caso',
  'case.tocLabel': 'Contenido del caso',
  'case.next': 'Siguiente caso de estudio',
  'case.nextLabel': 'Siguiente proyecto',
  'case.titleSuffix': 'caso de estudio',
  'case.phase.empathize': 'Empatizar',
  'case.phase.define': 'Definir',
  'case.phase.ideate': 'Idear',
  'case.phase.prototype': 'Prototipar',
  'case.phase.test': 'Probar',
  'case.processLabel': 'Fases del proceso de diseño',
} as const;

export type UiKey = keyof typeof es;

const en = {
  'site.title': 'Emely Aponte | Senior Product & UX/UI Designer in Madrid',
  'site.description':
    'Portfolio of Emely Aponte, Senior Product & UX/UI Designer based in Madrid. Case studies in design systems, mobile banking, fintech and e-commerce.',
  'site.location': 'Madrid, Spain',
  'site.ogLocale': 'en_GB',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.main': 'Main',
  'nav.footer': 'Footer',
  'nav.open': 'Open menu',
  'nav.close': 'Close menu',
  'nav.skip': 'Skip to content',
  'nav.logo': 'Emely Aponte, go to home page',

  'lang.label': 'Language',
  'lang.es': 'Español',
  'lang.en': 'English',
  'lang.unavailable': 'This page is not translated yet; you will land on the home page.',

  'common.newTab': '(opens in a new tab)',
  'common.cv': 'View my résumé',
  'common.seeProjects': 'See projects',
  'common.caseStudy': 'Case study',
  'common.seeCaseStudy': 'Read the case study',
  'common.social': 'Social media',

  'cta.label': 'Next steps',
  'cta.talk': 'Shall we talk?',
  'cta.message': 'Send me a message',
  'cta.more': 'Want to see more?',
  'cta.projects': 'Explore my projects',

  'footer.role': 'Senior Product & UX/UI Designer',
  'footer.rights': 'All rights reserved.',

  'contactBlock.eyebrow': 'Contact',
  'contactBlock.title': 'Send me a message!',
  'contactBlock.text':
    'Have a project in mind, a job opening, or simply want to talk about design? I would love to hear from you.',
  'contactBlock.button': 'Write to me',
  'contactBlock.followTitle': 'Follow my journey.',
  'contactBlock.followText': 'I share news, projects and opportunities on my social media.',

  'project.status.launched': 'Launched',
  'project.status.ongoing': 'In progress',
  'project.status.building': 'Under construction',
  'project.status.pitch': 'Pitch',
  'project.open': 'Open the case study for',

  'case.eyebrow': 'Case study',
  'case.back': 'All projects',
  'case.coverAlt': 'Screens from the project',
  'case.summary': 'Summary',
  'case.description': 'Overview',
  'case.brief': 'The brief',
  'case.toc': 'In this case study',
  'case.tocLabel': 'Case study contents',
  'case.next': 'Next case study',
  'case.nextLabel': 'Next project',
  'case.titleSuffix': 'case study',
  'case.phase.empathize': 'Empathize',
  'case.phase.define': 'Define',
  'case.phase.ideate': 'Ideate',
  'case.phase.prototype': 'Prototype',
  'case.phase.test': 'Test',
  'case.processLabel': 'Design process phases',
} satisfies Record<UiKey, string>;

export const ui = { es, en };
