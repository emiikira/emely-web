import type { Localized } from '..';

// Content of the PinsXP case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.

const es = {
  tagline: 'Escalado de un sistema de diseño (Compass) asistido por IA.',
  description:
    'Lideré la conceptualización, la arquitectura y el escalado de Compass, el sistema de diseño de PinsXP: una plataforma social para guardar, compartir y conectar momentos y lugares. Integré flujos de trabajo asistidos por IA para unificar y acelerar el diseño de nuevas experiencias.',
  brief:
    'Diseñar, estructurar y escalar desde cero Compass, un sistema de diseño robusto, accesible (WCAG) y altamente tokenizado, optimizando los flujos de trabajo con herramientas de inteligencia artificial y protocolos avanzados.',
  details: [
    { label: 'Cliente', value: 'PinsXP (startup estadounidense)' },
    { label: 'Rol', value: 'Lead Product Designer' },
    { label: 'Empresa', value: 'Darien Technology' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'Sistema de diseño' },
  ],
  sections: {
    challenge: 'El reto',
    method: 'Metodología end-to-end',
    solution: 'La solución: Compass',
    impact: 'Resultados e impacto',
    next: 'Próximos pasos',
  },
  challenge: {
    // Highlighted card that opens the section, as in the other case studies
    callout:
      'Cerrar la brecha entre el diseño en Figma y la ingeniería frontend de una startup en pleno crecimiento: un sistema único y coherente que acelerara el time-to-market sin frenar la evolución del producto.',
    text: 'En PinsXP, los usuarios guardan sus lugares favoritos, crean itinerarios de viaje o planes y comparten momentos en grupo con sus amigos. La startup crecía a gran velocidad y eso abría una <strong>brecha cada vez mayor entre el equipo de diseño en Figma y los ingenieros de frontend</strong>, que ralentizaba el time-to-market.',
    alts: [
      'Pantallas de PinsXP antes del sistema de diseño',
      'Detalle de componentes sin estandarizar',
      'Pantalla de la app con un estado complejo',
    ],
    problemTitle: 'El problema',
    problems: [
      {
        title: 'Inconsistencias visuales',
        text: 'Tarjetas de lugares guardados, creación de grupos o listados de planes se resolvían de formas distintas en cada pantalla.',
      },
      {
        title: 'Componentes duplicados',
        text: 'La falta de estandarización multiplicaba las variantes de un mismo componente y ralentizaba la creación de nuevos flujos.',
      },
      {
        title: 'Fricción en el handoff',
        text: 'La entrega de flujos complejos de interfaz, como los estados vacíos o el cambio entre modo claro y oscuro, consumía demasiado tiempo operativo.',
      },
    ],
  },
  method: {
    text: 'Abordé el proyecto con una metodología sistemática, dividida en tres fases clave.',
    steps: [
      {
        title: 'Auditoría y discovery',
        text: 'Mapeo exhaustivo de los componentes existentes y detección de las fricciones en el traspaso (handoff) entre diseño y desarrollo.',
      },
      {
        title: 'Arquitectura de tokens',
        text: 'Una jerarquía limpia de variables avanzadas en Figma, con <strong>tokens primitivos y semánticos</strong>, para soportar la escalabilidad multiplataforma.',
      },
      {
        title: 'IA y workflows avanzados',
        text: 'Incorporé <strong>Claude Code y el protocolo Figma MCP</strong> (Model Context Protocol) para automatizar la sincronización de especificaciones técnicas, validar tokens en tiempo real y acelerar la traducción de los elementos visuales a código limpio.',
      },
    ],
  },
  solution: {
    text: 'Diseñé la estrategia y la arquitectura de un sistema de diseño pensado para crecer con el producto.',
    alts: ['Arquitectura de componentes de Compass', 'Componentes de Compass en modo claro y oscuro'],
    callout:
      'Lo llamé <strong>Compass</strong> porque funciona como una brújula: guía a diseño e ingeniería en una misma dirección para que guardar, compartir y descubrir lugares mantenga siempre el mismo pulso visual y de usabilidad.',
    cards: [
      {
        title: 'Estructura en Figma',
        text: 'Componentes altamente modulares apalancados en Auto Layout, propiedades avanzadas de componentes y variables semánticas.',
      },
      {
        title: 'Accesibilidad y escalabilidad',
        text: 'Estándares de accesibilidad (WCAG) desde la raíz del sistema, con componentes inclusivos y listos para producción.',
      },
    ],
    code: {
      title: 'Conexión diseño-código con Figma MCP y Claude Code',
      items: [
        'Flujos asistidos por IA que automatizan la revisión de la consistencia de los tokens.',
        'Menos ambigüedad en la documentación técnica: ingeniería consume directrices y estructuras sincronizadas directamente desde el ecosistema de diseño.',
      ],
    },
  },
  impact: {
    panel: {
      // [before, highlighted, after]: the highlighted part is shown in bold
      title: ['Panel de propiedades ', 'en Figma', ''],
      primitives: {
        term: 'Primitivas',
        text: 'La paleta cruda de valores fijos (colores, escalas y medidas) que sirven como cimiento inalterable del sistema.',
      },
      semantics: {
        term: 'Semánticas',
        text: 'Capa lógica que asigna un propósito funcional a cada valor (ej. fondos, textos, bordes o estados), permitiendo una gestión limpia y automatizada entre el Light Mode y el Dark Mode sin romper la coherencia visual.',
      },
      // Table headers and small labels of the rebuilt Figma panel
      labels: {
        variables: 'variables',
        name: 'Nombre',
        value: 'Valor',
        light: 'Light mode',
        dark: 'Dark mode',
        scale: 'Escala de 50 a 950',
        groups: 'Más grupos',
        excerpt: 'Extracto de la colección',
        opacity: 'opacidad',
      },
    },
    alt: 'Variables de Compass en Figma: la colección de primitivas y la de semánticas con sus valores en modo claro y oscuro',
    cards: [
      {
        title: 'Velocidad de entrega',
        text: 'Los tiempos de implementación de nuevas vistas y componentes bajaron de forma notable gracias a la automatización del handoff con Claude Code y el MCP.',
      },
      {
        title: 'Coherencia visual',
        text: 'Se eliminó <strong>más del 80 % de la deuda técnica de diseño</strong> y la experiencia de usuario quedó unificada en toda la plataforma de PinsXP.',
      },
      {
        title: 'Escalabilidad sostenida',
        text: 'Un sistema listo para crecer con los futuros requerimientos de la startup sin comprometer la calidad de la interfaz.',
      },
    ],
  },
  next: {
    title: 'Llevar Compass a la web (desktop y responsive)',
    text: 'A medida que PinsXP crece, los usuarios necesitan gestionar sus itinerarios y colecciones compartidas con más comodidad desde pantallas grandes. El reto: trasladar el ecosistema móvil a una experiencia web robusta y responsive.',
    cards: [
      {
        title: 'Retícula y breakpoints',
        text: 'Una nueva capa de componentes web en Figma con retículas flexibles, breakpoints claros y densidades de información pensadas para escritorio, sin perder la paridad visual con la app.',
      },
      {
        title: 'Componentes web-ready',
        text: 'Inspirados en shadcn/ui: tablas de itinerarios, menús desplegables de grupos, modales anidados y navegación lateral que se sientan nativos en web y en móvil.',
      },
      {
        title: 'Coherencia de marca',
        text: 'La misma filosofía de brújula para que recordar y compartir momentos sea igual de fluido en el móvil y en el ordenador.',
      },
    ],
  },
};

const en: typeof es = {
  tagline: 'Scaling an AI-assisted design system (Compass).',
  description:
    'I led the concept, architecture and scaling of Compass, the design system of PinsXP: a social platform to save, share and connect moments and places. I brought AI-assisted workflows into the process to unify and speed up the design of new experiences.',
  brief:
    'Design, structure and scale Compass from scratch: a robust, accessible (WCAG) and highly tokenised design system, with workflows optimised through artificial intelligence tools and advanced protocols.',
  details: [
    { label: 'Client', value: 'PinsXP (US startup)' },
    { label: 'Role', value: 'Lead Product Designer' },
    { label: 'Company', value: 'Darien Technology' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'Design system' },
  ],
  sections: {
    challenge: 'The challenge',
    method: 'End-to-end methodology',
    solution: 'The solution: Compass',
    impact: 'Results and impact',
    next: 'Next steps',
  },
  challenge: {
    callout:
      'Closing the gap between design in Figma and frontend engineering at a fast-growing startup: one consistent system that would speed up time-to-market without holding the product back.',
    text: 'On PinsXP, people save their favourite places, build travel itineraries or plans, and share moments with groups of friends. The startup was growing fast, and that opened a <strong>widening gap between the design team in Figma and the frontend engineers</strong> that slowed down time-to-market.',
    alts: [
      'PinsXP screens before the design system',
      'Close-up of non-standardised components',
      'App screen with a complex state',
    ],
    problemTitle: 'The problem',
    problems: [
      {
        title: 'Visual inconsistencies',
        text: 'Saved-place cards, group creation and plan lists were solved in a different way on every screen.',
      },
      {
        title: 'Duplicated components',
        text: 'The lack of standards multiplied the variants of the same component and slowed down the creation of new flows.',
      },
      {
        title: 'Handoff friction',
        text: 'Delivering complex interface flows, such as empty states or switching between light and dark mode, took up too much operational time.',
      },
    ],
  },
  method: {
    text: 'I approached the project with a systematic methodology, split into three key phases.',
    steps: [
      {
        title: 'Audit and discovery',
        text: 'A thorough map of the existing components and of the friction points in the handoff between design and development.',
      },
      {
        title: 'Token architecture',
        text: 'A clean hierarchy of advanced variables in Figma, with <strong>primitive and semantic tokens</strong>, to support multi-platform scalability.',
      },
      {
        title: 'AI and advanced workflows',
        text: 'I brought in <strong>Claude Code and the Figma MCP protocol</strong> (Model Context Protocol) to automate the sync of technical specs, validate tokens in real time and speed up the translation of visual elements into clean code.',
      },
    ],
  },
  solution: {
    text: 'I designed the strategy and architecture of a design system built to grow with the product.',
    alts: ['Compass component architecture', 'Compass components in light and dark mode'],
    callout:
      'I named it <strong>Compass</strong> because it works like one: it points design and engineering in the same direction, so saving, sharing and discovering places always keeps the same visual and usability rhythm.',
    cards: [
      {
        title: 'Structure in Figma',
        text: 'Highly modular components built on Auto Layout, advanced component properties and semantic variables.',
      },
      {
        title: 'Accessibility and scalability',
        text: 'Accessibility standards (WCAG) from the root of the system, with inclusive, production-ready components.',
      },
    ],
    code: {
      title: 'Connecting design and code with Figma MCP and Claude Code',
      items: [
        'AI-assisted workflows that automate the token consistency review.',
        'Less ambiguity in the technical documentation: engineering consumes guidelines and structures synced straight from the design ecosystem.',
      ],
    },
  },
  impact: {
    panel: {
      title: ['', 'Figma', ' Properties Panel'],
      primitives: {
        term: 'Primitives',
        text: 'The raw palette of fixed values (colors, scales, and measurements) that serve as the unalterable foundation of the system.',
      },
      semantics: {
        term: 'Semantics',
        text: 'The logical layer assigning a functional purpose to each value (e.g., backgrounds, text, borders, or states), enabling clean, automated management between Light Mode and Dark Mode without breaking visual consistency.',
      },
      labels: {
        variables: 'variables',
        name: 'Name',
        value: 'Value',
        light: 'Light mode',
        dark: 'Dark mode',
        scale: 'Scale from 50 to 950',
        groups: 'More groups',
        excerpt: 'Excerpt from the collection',
        opacity: 'opacity',
      },
    },
    alt: 'Compass variables in Figma: the primitives collection and the semantics collection with their light and dark mode values',
    cards: [
      {
        title: 'Delivery speed',
        text: 'Implementation times for new views and components dropped noticeably thanks to the handoff automated with Claude Code and the MCP.',
      },
      {
        title: 'Visual consistency',
        text: '<strong>Over 80% of the design debt</strong> was eliminated, and the user experience is now unified across the whole PinsXP platform.',
      },
      {
        title: 'Sustained scalability',
        text: 'A system ready to grow with the startup’s future requirements without compromising the quality of the interface.',
      },
    ],
  },
  next: {
    title: 'Bringing Compass to the web (desktop and responsive)',
    text: 'As PinsXP grows, people need to manage their itineraries and shared collections more comfortably on large screens. The challenge: turning the mobile ecosystem into a robust, responsive web experience.',
    cards: [
      {
        title: 'Grid and breakpoints',
        text: 'A new layer of web components in Figma with flexible grids, clear breakpoints and information densities designed for desktop, while keeping visual parity with the app.',
      },
      {
        title: 'Web-ready components',
        text: 'Inspired by shadcn/ui: itinerary tables, group dropdowns, nested modals and side navigation that feel native on both web and mobile.',
      },
      {
        title: 'Brand consistency',
        text: 'The same compass philosophy, so remembering and sharing moments feels just as smooth on a phone as on a computer.',
      },
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
