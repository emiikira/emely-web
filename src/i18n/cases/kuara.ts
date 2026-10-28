import type { Localized } from '..';

// Content of the Kuara case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.
// Product and business facts come from Emely's brief; tokens, components and web screens from the KUARA Figma file.

const es = {
  tagline: 'Pagos P2P interbancarios en tiempo real con solo el número de celular, integrados en los principales bancos de Panamá.',
  description:
    'Kuara es el ecosistema de pagos P2P de Innovación y Pagos: permite enviar y recibir dinero al instante, sin comisiones y entre bancos distintos, usando únicamente el número de celular. Como Senior Product Designer fui responsable end-to-end de los flujos de usuario, de la arquitectura del sistema de diseño en Figma y de su documentación técnica en Storybook.',
  brief:
    'Convertir la transferencia interbancaria tradicional en un pago P2P instantáneo, y diseñar un sistema capaz de vivir dentro de las apps de varios bancos sin perder coherencia ni seguridad.',
  details: [
    { label: 'Cliente', value: 'Kuara · Innovación y Pagos' },
    { label: 'Rol', value: 'Senior Product Designer' },
    { label: 'Ubicación', value: 'Panamá' },
    { label: 'Tipo', value: 'Fintech · Pagos P2P' },
  ],
  note: 'Las pantallas del producto se muestran en español, el idioma en el que se diseñaron.',
  sections: {
    challenge: 'El reto',
    flows: 'Flujos de usuario',
    system: 'Sistema de diseño',
    storybook: 'Storybook y handoff',
    impact: 'Resultados e impacto',
  },
  challenge: {
    callout:
      'Simplificar las transferencias interbancarias, que exigían números de cuenta complejos y tiempos de espera, en un pago P2P instantáneo basado en el número de celular.',
    text: 'Kuara permite mover de <strong>$0.01 a $5,000</strong> al instante y sin comisiones, y no tiene una app propia: vive dentro de las aplicaciones de <strong>Global Bank, Banesco, Banistmo, Caja de Ahorros y MMG Bank</strong>. Cada banco tiene su propia interfaz, así que la experiencia debía adaptarse a todos sin dejar de ser Kuara.',
    problemTitle: 'La complejidad',
    problems: [
      {
        title: 'Entorno multibanco',
        text: 'Una solución white-label que se integra en cinco apps bancarias distintas, con sus propias marcas y patrones, y que se reconoce igual en todas.',
      },
      {
        title: 'Seguridad sin fricción',
        text: 'Validación con Token y altos estándares de seguridad en cada transacción, sin añadir pasos que frenen un pago que debe durar segundos.',
      },
      {
        title: 'Escala y velocidad',
        text: 'Cada banco implementa Kuara con su propio equipo: sin componentes y reglas comunes, cada integración partía de cero.',
      },
    ],
    goalsTitle: 'Objetivos',
    goals: [
      'Que enviar dinero a otro banco fuera tan simple como escribir un número de celular.',
      'Una experiencia consistente en todas las entidades, con seguridad integrada en el propio flujo.',
      'Un sistema de diseño y una documentación que aceleraran la implementación en cada banco.',
    ],
  },
  flows: {
    text: 'Diseñé tres flujos principales, pensados para completarse en pocos pasos y dentro del contexto de la app bancaria del usuario.',
    steps: [
      {
        title: 'Afiliación',
        items: ['Activar Kuara desde la app del banco', 'Vincular el número celular a una cuenta activa', 'Listo en 2 o 3 pasos'],
      },
      {
        title: 'Envío P2P',
        items: [
          'Elegir un contacto de la libreta o escribir el celular',
          'Definir el monto, de $0.01 a $5,000',
          'Validación de datos en tiempo real',
        ],
      },
      {
        title: 'Seguridad y confirmación',
        items: ['Autorización con Token de seguridad', 'Comprobante inmediato', 'Compartir por WhatsApp o correo'],
      },
    ],
    cards: [
      {
        title: 'Afiliación en 2 o 3 pasos',
        text: 'La activación ocurre dentro de la app que el usuario ya conoce: solo vincula su número celular a una cuenta activa, sin formularios largos ni registros externos.',
      },
      {
        title: 'Enviar es elegir un contacto',
        text: 'Destinatarios desde la libreta del dispositivo o escribiendo el número, y validación en tiempo real para confirmar a quién se envía antes de autorizar.',
      },
      {
        title: 'La confianza al final del flujo',
        text: 'Autorización integrada con Token y un comprobante inmediato, listo para compartir, que cierra el pago con certeza.',
      },
    ],
    ecosystemTitle: 'El ecosistema: Kuara para comercios',
    ecosystemText:
      'Además de la experiencia P2P, diseñé la plataforma web con la que los comercios cobran con Kuara. El comercio se afilia y completa un onboarding guiado en siete pasos, crea sucursales y puntos de cobro, y solicita pagos con el número del cliente o con un QR dinámico, siguiendo sus ingresos desde un dashboard.',
    alts: {
      onboarding: 'Paso de verificación del onboarding de comercios, con el indicador de siete pasos',
      request: 'Formulario para solicitar un pago vía QR dinámico',
      sent: 'Solicitud de pago enviada con su código QR y el monto',
      dashboard: 'Dashboard del comercio con ingresos, actividad por sucursal y notificaciones',
    },
  },
  system: {
    text: 'Creé desde cero un sistema de diseño escalable pensado para productos financieros multientidad: fundaciones, variables primitivas y semánticas, estados interactivos, componentes reutilizables y reglas de Auto Layout preparadas para la personalización y la implementación técnica.',
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
        title: 'Tokens primitivos y semánticos',
        text: 'Una capa de valores base y otra de intención (fondos, textos, bordes, estados) que permite ajustar el sistema a cada entidad sin tocar los componentes.',
      },
      {
        title: 'Estados interactivos',
        text: 'Cada componente define sus estados (reposo, hover, foco, deshabilitado, error, carga) para que el comportamiento sea idéntico en todas las apps.',
      },
      {
        title: 'Componentes con Auto Layout',
        text: 'Botones, campos, selectores, menús, avatares y tarjetas construidos con Auto Layout y propiedades, listos para adaptarse a cualquier contenido.',
      },
    ],
  },
  storybook: {
    text: 'Traduje y documenté el sistema de Figma en Storybook para crear una <strong>única fuente de verdad</strong> entre diseño y desarrollo, y acelerar la integración en los entornos bancarios sin deuda visual ni técnica.',
    steps: [
      { title: 'Figma', items: ['Variables primitivas y semánticas', 'Componentes y variantes'] },
      { title: 'Storybook', items: ['Variantes y estados', 'Propiedades (props)'] },
      { title: 'Guías de uso', items: ['Cuándo y cómo usar cada componente', 'Buenas prácticas y accesibilidad'] },
      { title: 'Apps bancarias', items: ['Integración en cada entidad', 'Sin deuda visual ni técnica'] },
    ],
    cards: [
      {
        title: 'Una sola fuente de verdad',
        text: 'Diseño e ingeniería consultan la misma documentación: lo que existe en Figma existe, con el mismo nombre, en código.',
      },
      {
        title: 'Variantes, estados y props',
        text: 'Cada componente documenta sus variantes, estados y propiedades, con ejemplos interactivos que el equipo puede probar.',
      },
      {
        title: 'Handoff sin fricción',
        text: 'Las guías de uso responden las dudas antes de que aparezcan y reducen las idas y vueltas entre diseño y desarrollo.',
      },
    ],
  },
  impact: {
    stats: [
      { label: 'Bancos', value: '5', text: 'de los principales de Panamá adoptaron la experiencia' },
      { label: 'Por pago', value: '$5,000', text: 'de límite, desde $0.01, al instante' },
      { label: 'Comisiones', value: '$0', text: 'para enviar y recibir dinero' },
    ],
    cards: [
      {
        title: 'Experiencia estandarizada',
        text: 'Una experiencia de pagos P2P común adoptada por cinco de los principales bancos de Panamá.',
      },
      {
        title: 'Handoff e implementación más rápidos',
        text: 'La sincronización entre Figma y Storybook redujo de forma drástica los tiempos de handoff y de implementación frontend.',
      },
      {
        title: 'Rápido, gratuito y seguro',
        text: 'Una experiencia transaccional instantánea y sin comisiones para miles de usuarios bancarios.',
      },
    ],
    takeawaysTitle: 'Aprendizajes',
    takeaways: [
      'En productos financieros, la confianza se diseña: validación en tiempo real, confirmaciones claras y comprobantes pesan tanto como lo visual.',
      'Diseñar para varias entidades obliga a separar lo que es marca de lo que es comportamiento: los tokens semánticos son esa frontera.',
      'Un sistema de diseño solo escala cuando ingeniería lo usa: documentarlo en Storybook fue tan importante como diseñarlo.',
    ],
  },
};

const en: typeof es = {
  tagline: 'Real-time interbank P2P payments with just a mobile number, built into Panama’s leading banks.',
  description:
    'Kuara is Innovación y Pagos’ P2P payments ecosystem: it lets people send and receive money instantly, free of charge and across different banks, using only their mobile number. As Senior Product Designer I owned, end to end, the user flows, the design system architecture in Figma and its technical documentation in Storybook.',
  brief:
    'Turn the traditional interbank transfer into an instant P2P payment, and design a system able to live inside several banks’ apps without losing consistency or security.',
  details: [
    { label: 'Client', value: 'Kuara · Innovación y Pagos' },
    { label: 'Role', value: 'Senior Product Designer' },
    { label: 'Location', value: 'Panama' },
    { label: 'Type', value: 'Fintech · P2P payments' },
  ],
  note: 'Product screens are shown in Spanish, the language they were designed in.',
  sections: {
    challenge: 'The challenge',
    flows: 'User flows',
    system: 'Design system',
    storybook: 'Storybook and handoff',
    impact: 'Results and impact',
  },
  challenge: {
    callout:
      'Simplify interbank transfers, which required complex account numbers and waiting times, into an instant P2P payment based on a mobile number.',
    text: 'Kuara moves from <strong>$0.01 to $5,000</strong> instantly and free of charge, and it has no app of its own: it lives inside the apps of <strong>Global Bank, Banesco, Banistmo, Caja de Ahorros and MMG Bank</strong>. Each bank has its own interface, so the experience had to fit all of them while still being Kuara.',
    problemTitle: 'The complexity',
    problems: [
      {
        title: 'Multi-bank environment',
        text: 'A white-label solution that plugs into five different banking apps, each with its own brand and patterns, and feels the same in all of them.',
      },
      {
        title: 'Security without friction',
        text: 'Token validation and high security standards on every transaction, without adding steps that slow down a payment meant to take seconds.',
      },
      {
        title: 'Scale and speed',
        text: 'Each bank implements Kuara with its own team: without shared components and rules, every integration started from scratch.',
      },
    ],
    goalsTitle: 'Goals',
    goals: [
      'Make sending money to another bank as simple as typing a mobile number.',
      'A consistent experience across every bank, with security built into the flow itself.',
      'A design system and documentation that would speed up implementation at each bank.',
    ],
  },
  flows: {
    text: 'I designed three main flows, built to be completed in a few steps and within the context of the user’s banking app.',
    steps: [
      {
        title: 'Enrolment',
        items: ['Activate Kuara from the bank’s app', 'Link the mobile number to an active account', 'Done in 2 or 3 steps'],
      },
      {
        title: 'P2P transfer',
        items: [
          'Pick a contact from the address book or type the number',
          'Set the amount, from $0.01 to $5,000',
          'Real-time data validation',
        ],
      },
      {
        title: 'Security and confirmation',
        items: ['Authorisation with a security Token', 'Instant receipt', 'Share via WhatsApp or email'],
      },
    ],
    cards: [
      {
        title: 'Enrolment in 2 or 3 steps',
        text: 'Activation happens inside the app the user already knows: they just link their mobile number to an active account, with no long forms or external sign-ups.',
      },
      {
        title: 'Sending is picking a contact',
        text: 'Recipients from the device’s address book or by typing the number, with real-time validation to confirm who receives the money before authorising.',
      },
      {
        title: 'Trust at the end of the flow',
        text: 'Built-in Token authorisation and an instant, ready-to-share receipt that closes the payment with certainty.',
      },
    ],
    ecosystemTitle: 'The ecosystem: Kuara for merchants',
    ecosystemText:
      'Beyond the P2P experience, I designed the web platform merchants use to get paid with Kuara. The merchant signs up and completes a guided seven-step onboarding, creates branches and payment points, and requests payments with the customer’s number or a dynamic QR, following revenue on a dashboard.',
    alts: {
      onboarding: 'Verification step of the merchant onboarding, with the seven-step indicator',
      request: 'Form to request a payment through a dynamic QR',
      sent: 'Payment request sent, with its QR code and amount',
      dashboard: 'Merchant dashboard with revenue, activity per branch and notifications',
    },
  },
  system: {
    text: 'I built a scalable design system from scratch for multi-entity financial products: foundations, primitive and semantic variables, interactive states, reusable components and Auto Layout rules ready for customisation and technical implementation.',
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
        title: 'Primitive and semantic tokens',
        text: 'A layer of base values and a layer of intent (backgrounds, text, borders, states) so the system can be tuned for each bank without touching the components.',
      },
      {
        title: 'Interactive states',
        text: 'Every component defines its states (rest, hover, focus, disabled, error, loading) so it behaves the same in every app.',
      },
      {
        title: 'Auto Layout components',
        text: 'Buttons, fields, selects, menus, avatars and cards built with Auto Layout and properties, ready to adapt to any content.',
      },
    ],
  },
  storybook: {
    text: 'I translated and documented the Figma system in Storybook to create a <strong>single source of truth</strong> between design and development, and to speed up integration in the banking environments with no visual or technical debt.',
    steps: [
      { title: 'Figma', items: ['Primitive and semantic variables', 'Components and variants'] },
      { title: 'Storybook', items: ['Variants and states', 'Properties (props)'] },
      { title: 'Usage guidelines', items: ['When and how to use each component', 'Best practices and accessibility'] },
      { title: 'Banking apps', items: ['Integration at each bank', 'No visual or technical debt'] },
    ],
    cards: [
      {
        title: 'One source of truth',
        text: 'Design and engineering read the same documentation: what exists in Figma exists, with the same name, in code.',
      },
      {
        title: 'Variants, states and props',
        text: 'Each component documents its variants, states and properties, with interactive examples the team can try.',
      },
      {
        title: 'Frictionless handoff',
        text: 'Usage guidelines answer questions before they come up and cut the back-and-forth between design and development.',
      },
    ],
  },
  impact: {
    stats: [
      { label: 'Banks', value: '5', text: 'of Panama’s leading banks adopted the experience' },
      { label: 'Per payment', value: '$5,000', text: 'limit, from $0.01, instantly' },
      { label: 'Fees', value: '$0', text: 'to send and receive money' },
    ],
    cards: [
      {
        title: 'A standard experience',
        text: 'One P2P payments experience adopted by five of Panama’s leading banks.',
      },
      {
        title: 'Faster handoff and implementation',
        text: 'Keeping Figma and Storybook in sync drastically cut handoff and frontend implementation times.',
      },
      {
        title: 'Fast, free and secure',
        text: 'An instant, fee-free transactional experience for thousands of banking users.',
      },
    ],
    takeawaysTitle: 'Takeaways',
    takeaways: [
      'In financial products, trust is designed: real-time validation, clear confirmations and receipts matter as much as visuals.',
      'Designing for several banks forces you to separate brand from behaviour: semantic tokens are that boundary.',
      'A design system only scales when engineering uses it: documenting it in Storybook mattered as much as designing it.',
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
