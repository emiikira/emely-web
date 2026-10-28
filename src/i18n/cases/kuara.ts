import type { Localized } from '..';

// Content of the Kuara case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.
// Facts come from the KUARA Figma file (pages, flows, variables and component usage) and kuara.com.pa.

const es = {
  tagline: 'Flujos y sistema de diseño para la plataforma web de Kuara, la red de pagos interbancarios de Panamá.',
  description:
    'Kuara permite enviar y recibir dinero entre bancos en tiempo real usando el número de celular. Diseñé la plataforma web que conecta a todos sus actores (comercios, usuarios y bancos afiliados) y creé desde cero el sistema de diseño que la sostiene.',
  brief:
    'Diseñar flujos intuitivos para la plataforma y estructurar desde cero un sistema de diseño escalable y coherente.',
  details: [
    { label: 'Cliente', value: 'Kuara · Innovación y Pagos' },
    { label: 'Rol', value: 'Senior Product Designer' },
    { label: 'Ubicación', value: 'Ciudad de Panamá, Panamá' },
    { label: 'Tipo', value: 'Fintech · Sistema de diseño' },
  ],
  note: 'Las pantallas del producto se muestran en español, el idioma en el que se diseñaron.',
  sections: {
    challenge: 'El reto',
    system: 'Sistema de diseño',
    flows: 'Flujos de usuario',
    impact: 'Resultados e impacto',
  },
  challenge: {
    callout:
      'Una misma plataforma para tres actores con necesidades muy distintas: comercios que cobran, usuarios que pagan y bancos que supervisan. Todo con la claridad y la confianza que exige mover dinero.',
    text: 'Kuara funciona dentro de las apps de los bancos afiliados (Global Bank, Banesco, MMG Bank, Banistmo y Caja de Ahorros), pero necesitaba una <strong>plataforma web propia</strong> para afiliar comercios, gestionar sucursales y puntos de cobro, emitir códigos QR y dar seguimiento a cada pago.',
    problemTitle: 'La complejidad',
    problems: [
      {
        title: 'Tres portales, un producto',
        text: 'Comercio, Usuario Kuara y Banco tenían permisos, tareas y datos distintos, pero debían sentirse parte de la misma plataforma.',
      },
      {
        title: 'Flujos con dinero real',
        text: 'Afiliación, verificación por código, asignación de cuentas bancarias y solicitudes de pago: cada paso tenía que transmitir seguridad y no dejar dudas.',
      },
      {
        title: 'Sin base común',
        text: 'Sin componentes estandarizados, cada nueva pantalla se resolvía desde cero, con el riesgo de inconsistencias y de frenar al equipo de desarrollo.',
      },
    ],
    goalsTitle: 'Objetivos',
    goals: [
      'Estandarizar componentes y patrones para que toda la plataforma hable el mismo idioma visual.',
      'Diseñar flujos lineales y predecibles para tareas críticas como afiliar un comercio o cobrar un pago.',
      'Acelerar el desarrollo con una librería documentada que ingeniería pudiera reutilizar.',
    ],
  },
  system: {
    text: 'Construí el sistema de diseño de Kuara desde cero, partiendo de su identidad: el morado y el turquesa de la marca convertidos en variables, una escala de grises para la jerarquía y dos tipografías con roles claros.',
    panel: {
      title: ['Sistema de diseño ', 'Kuara', ''],
      colors: 'Color',
      type: 'Tipografía',
      typeRoles: { heading: 'Titulares', body: 'Texto e interfaz' },
      components: 'Componentes más usados',
      usage: 'instancias en las pantallas de alta fidelidad',
    },
    cards: [
      {
        title: 'Fundamentos',
        text: 'Variables de color (primarios y sus tonos suaves para fondos y estados), escala de espaciado de 4 en 4 y radios consistentes.',
      },
      {
        title: 'Librería de componentes',
        text: 'Botones, campos de formulario, selectores, menú lateral, avatares, tarjetas de métricas e iconografía Phosphor, con sus variantes y estados.',
      },
      {
        title: 'Patrones de interfaz',
        text: 'Una misma estructura para todos los portales: menú lateral, cabecera con perfil y un área de trabajo que guía cada tarea paso a paso.',
      },
    ],
  },
  flows: {
    text: 'Mapeé la plataforma completa en un user flow antes de pasar a alta fidelidad. Los flujos se organizan en cuatro etapas, del primer contacto del comercio al cobro diario.',
    steps: [
      { title: 'Afiliación', items: ['Canal web Kuara', 'Canal del banco afiliado', 'Registro del comercio'] },
      {
        title: 'Onboarding',
        items: ['Código de verificación', 'Contraseña', 'Sucursal y punto Kuara', 'Cuenta bancaria'],
      },
      {
        title: 'Gestión',
        items: ['Dashboard de ingresos', 'Sucursales y puntos Kuara', 'Usuarios y roles', 'QR estático'],
      },
      { title: 'Cobro', items: ['Solicitud por alias (teléfono)', 'QR dinámico', 'Confirmación y reportes'] },
    ],
    onboardingTitle: 'Un onboarding guiado en siete pasos',
    onboardingText:
      'El primer inicio de sesión lleva al comercio por una secuencia con indicador de progreso: verificación, contraseña, punto de cobro, sucursal, datos del comercio, cuenta bancaria y confirmación. Cada pantalla pide una sola cosa.',
    paymentsTitle: 'Cobrar en segundos desde el punto Kuara',
    paymentsText:
      'El perfil cajero solo ve lo que necesita: solicitar un pago con el número de teléfono del cliente o con un QR dinámico, y seguir su estado en tiempo real.',
    managementTitle: 'Gestión del negocio',
    managementText:
      'El administrador del comercio crea sucursales, les asigna una cuenta bancaria y un QR estático, y sigue ingresos y actividad por sucursal desde el dashboard.',
    alts: {
      onboarding: 'Paso de verificación del onboarding de Kuara, con el indicador de siete pasos',
      request: 'Formulario para solicitar un pago vía QR dinámico',
      sent: 'Solicitud de pago enviada con su código QR y el monto',
      branch: 'Confirmación de sucursal creada, con opción de generar un QR estático',
      dashboard: 'Dashboard del comercio con ingresos, actividad por sucursal y notificaciones',
    },
  },
  impact: {
    text: 'El sistema de diseño y la arquitectura de flujos dieron a Kuara una base sólida para crecer.',
    cards: [
      {
        title: 'Menos fricción operativa',
        text: 'Flujos lineales y una sola tarea por pantalla para afiliar comercios, crear sucursales y cobrar, sin pasos ambiguos.',
      },
      {
        title: 'Consistencia en toda la plataforma',
        text: 'Los portales de Comercio, Usuario Kuara y Banco comparten componentes, patrones y variables: el mismo producto, se entre por donde se entre.',
      },
      {
        title: 'Escalabilidad',
        text: 'Una librería reutilizable que permite sumar nuevas funcionalidades, roles o bancos sin rediseñar desde cero.',
      },
    ],
    takeawaysTitle: 'Aprendizajes',
    takeaways: [
      'En productos financieros, la confianza se diseña: estados claros, confirmaciones y lenguaje sencillo pesan tanto como lo visual.',
      'Mapear el ecosistema completo (todos los actores y sus permisos) antes de diseñar pantallas evita rehacer flujos más adelante.',
      'Un sistema de diseño temprano no frena la exploración: la acelera, porque libera tiempo para resolver los problemas de verdad.',
    ],
  },
};

const en: typeof es = {
  tagline: 'Flows and design system for the web platform of Kuara, Panama’s interbank payments network.',
  description:
    'Kuara lets people send and receive money between banks in real time using their mobile number. I designed the web platform that connects all its players (merchants, users and partner banks) and built the design system behind it from scratch.',
  brief: 'Design intuitive flows for the platform and build a scalable, consistent design system from scratch.',
  details: [
    { label: 'Client', value: 'Kuara · Innovación y Pagos' },
    { label: 'Role', value: 'Senior Product Designer' },
    { label: 'Location', value: 'Panama City, Panama' },
    { label: 'Type', value: 'Fintech · Design system' },
  ],
  note: 'Product screens are shown in Spanish, the language they were designed in.',
  sections: {
    challenge: 'The challenge',
    system: 'Design system',
    flows: 'User flows',
    impact: 'Results and impact',
  },
  challenge: {
    callout:
      'One platform for three players with very different needs: merchants who get paid, users who pay and banks who oversee it all. With the clarity and trust that moving money demands.',
    text: 'Kuara lives inside the apps of its partner banks (Global Bank, Banesco, MMG Bank, Banistmo and Caja de Ahorros), but it needed <strong>its own web platform</strong> to onboard merchants, manage branches and payment points, issue QR codes and track every payment.',
    problemTitle: 'The complexity',
    problems: [
      {
        title: 'Three portals, one product',
        text: 'Merchant, Kuara User and Bank had different permissions, tasks and data, yet they had to feel like one platform.',
      },
      {
        title: 'Flows with real money',
        text: 'Onboarding, code verification, linking bank accounts and payment requests: every step had to feel secure and leave no room for doubt.',
      },
      {
        title: 'No common foundation',
        text: 'Without standard components, every new screen started from scratch, risking inconsistencies and slowing the engineering team down.',
      },
    ],
    goalsTitle: 'Goals',
    goals: [
      'Standardise components and patterns so the whole platform speaks the same visual language.',
      'Design linear, predictable flows for critical tasks such as onboarding a merchant or collecting a payment.',
      'Speed up development with a documented library that engineering could reuse.',
    ],
  },
  system: {
    text: 'I built Kuara’s design system from scratch, starting from its identity: the brand’s purple and turquoise turned into variables, a grey scale for hierarchy and two typefaces with clear roles.',
    panel: {
      title: ['', 'Kuara', ' design system'],
      colors: 'Colour',
      type: 'Typography',
      typeRoles: { heading: 'Headings', body: 'Body and UI' },
      components: 'Most used components',
      usage: 'instances across the high-fidelity screens',
    },
    cards: [
      {
        title: 'Foundations',
        text: 'Colour variables (primaries and their soft tints for backgrounds and states), a spacing scale in steps of 4 and consistent radii.',
      },
      {
        title: 'Component library',
        text: 'Buttons, form fields, selects, side menu, avatars, metric cards and Phosphor icons, with their variants and states.',
      },
      {
        title: 'Interface patterns',
        text: 'The same structure for every portal: side menu, header with profile and a work area that guides each task step by step.',
      },
    ],
  },
  flows: {
    text: 'I mapped the whole platform in a user flow before moving to high fidelity. The flows fall into four stages, from a merchant’s first contact to day-to-day payments.',
    steps: [
      { title: 'Onboarding channels', items: ['Kuara website', 'Partner bank channel', 'Merchant sign-up'] },
      { title: 'Setup', items: ['Verification code', 'Password', 'Branch and Kuara point', 'Bank account'] },
      { title: 'Management', items: ['Revenue dashboard', 'Branches and Kuara points', 'Users and roles', 'Static QR'] },
      { title: 'Payments', items: ['Request by alias (phone)', 'Dynamic QR', 'Confirmation and reports'] },
    ],
    onboardingTitle: 'Guided onboarding in seven steps',
    onboardingText:
      'The first sign-in takes the merchant through a sequence with a progress indicator: verification, password, payment point, branch, business details, bank account and confirmation. Each screen asks for one thing only.',
    paymentsTitle: 'Get paid in seconds from the Kuara point',
    paymentsText:
      'The cashier profile only sees what it needs: request a payment with the customer’s phone number or a dynamic QR, and follow its status in real time.',
    managementTitle: 'Running the business',
    managementText:
      'The merchant admin creates branches, links each one to a bank account and a static QR, and follows revenue and activity per branch on the dashboard.',
    alts: {
      onboarding: 'Verification step of the Kuara onboarding, with the seven-step indicator',
      request: 'Form to request a payment through a dynamic QR',
      sent: 'Payment request sent, with its QR code and amount',
      branch: 'Branch created confirmation, with the option to generate a static QR',
      dashboard: 'Merchant dashboard with revenue, activity per branch and notifications',
    },
  },
  impact: {
    text: 'The design system and the flow architecture gave Kuara a solid foundation to grow.',
    cards: [
      {
        title: 'Less operational friction',
        text: 'Linear flows and one task per screen to onboard merchants, create branches and collect payments, with no ambiguous steps.',
      },
      {
        title: 'Consistency across the platform',
        text: 'The Merchant, Kuara User and Bank portals share components, patterns and variables: the same product, whichever way you come in.',
      },
      {
        title: 'Scalability',
        text: 'A reusable library that lets the team add features, roles or banks without redesigning from scratch.',
      },
    ],
    takeawaysTitle: 'Takeaways',
    takeaways: [
      'In financial products, trust is designed: clear states, confirmations and plain language matter as much as visuals.',
      'Mapping the whole ecosystem (every player and their permissions) before designing screens avoids reworking flows later.',
      'An early design system doesn’t slow exploration down: it speeds it up, because it frees time for the real problems.',
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
