import type { Localized } from '..';

// Content of the Finaer & Fivy case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.
// The B2B backoffice (SAI / Fivy Pro) is confidential: it is shown through abstract recreations, never real screens.

const es = {
  title: 'Finaer & Fivy',
  tagline: 'Ecosistema PropTech de garantías de alquiler y gestión inmobiliaria: app, backoffice y web.',
  description:
    'Finaer ofrece garantías de alquiler en España para inquilinos, propietarios e inmobiliarias. Como Senior Product Designer diseñé su ecosistema de punta a punta: la app móvil para inquilinos (Fini, hoy Fivy), la plataforma web para inmobiliarias (SAI y Fivy Pro) y la web corporativa finaer.es, unidos por un mismo sistema de diseño.',
  brief:
    'Conectar en una experiencia fluida a inquilinos, co-inquilinos, avalistas e inmobiliarias, y traducir datos financieros complejos en decisiones claras.',
  details: [
    { label: 'Cliente', value: 'Finaer España' },
    { label: 'Rol', value: 'Senior Product Designer' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'PropTech · InsurTech (B2C + B2B)' },
  ],
  note: 'El backoffice es una herramienta interna confidencial: se muestra con recreaciones abstractas y datos ilustrativos.',
  sections: {
    overview: 'Resumen ejecutivo',
    challenge: 'El reto',
    ecosystem: 'Ecosistema conectado',
    app: 'App Fivy',
    b2b: 'SAI, Fivy Pro y finaer.es',
    system: 'Sistema de diseño',
    impact: 'Resultados e impacto',
  },
  overview: {
    text: 'Fui responsable de la investigación UX y de mercado, la arquitectura de información, los flujos de app y web, el diseño integral de finaer.es y la evolución del sistema de diseño. Tres productos conectados:',
    products: [
      {
        title: 'App móvil B2C · Fini → Fivy',
        text: 'Para inquilinos que buscan piso: consultan su capacidad de alquiler, suman participantes y completan su expediente desde el móvil.',
      },
      {
        title: 'Plataforma B2B · SAI y Fivy Pro',
        text: 'El backoffice de las inmobiliarias: propiedades, solicitudes, grupos de candidatos y evaluación del riesgo.',
      },
      {
        title: 'Web corporativa · finaer.es',
        text: 'Rediseño completo de las páginas públicas para captar y convertir agencias, propietarios e inquilinos.',
      },
    ],
    toolsTitle: 'Herramientas y stack',
    tools: ['Figma', 'Sistemas de diseño', 'UX Research', 'Integración UX con Equifax', 'Mixpanel', 'Firebase'],
  },
  challenge: {
    callout:
      'Alquilar en España es lento: análisis de solvencia manuales, candidatos que se pierden por el camino y solicitudes grupales (parejas, compañeros de piso, avalistas) difíciles de evaluar.',
    text: 'El reto de diseño era conectar a <strong>varios actores</strong> (inquilino principal, co-inquilinos, avalistas e inmobiliaria) en una sola experiencia, simplificar la recogida de documentos y convertir datos financieros complejos en decisiones claras para todos.',
    problemTitle: 'Las fricciones',
    problems: [
      {
        title: 'Procesos lentos',
        text: 'La solvencia se analizaba a mano y cada expediente acumulaba idas y vueltas de documentos entre inquilino e inmobiliaria.',
      },
      {
        title: 'Candidatos que se pierden',
        text: 'Mientras se evaluaba una solicitud, el inquilino seguía buscando y la inmobiliaria perdía al candidato.',
      },
      {
        title: 'Solicitudes grupales',
        text: 'Parejas, pisos compartidos y avalistas: varias personas, varios documentos y una única decisión que tomar.',
      },
    ],
  },
  ecosystem: {
    text: 'La app y el backoffice comparten un mismo expediente. Diseñé el recorrido completo para que cada actor vea su parte y ambos entornos reflejen el mismo resultado.',
    steps: [
      {
        title: 'La inmobiliaria crea la solicitud',
        items: ['Da de alta la propiedad en SAI', 'Abre una solicitud (puede guardarla como borrador)', 'Asocia candidatos o grupos'],
      },
      {
        title: 'Los participantes completan su parte',
        items: ['Solicitante, co-inquilinos y avalistas', 'Datos personales desde la app', 'Documentación guiada paso a paso'],
      },
      {
        title: 'Análisis de riesgo',
        items: ['Cruce de datos y documentos', 'Motor de riesgo de Equifax'],
      },
      {
        title: 'Resultado en ambos entornos',
        items: ['Semáforo de riesgo', 'Máximo Garantizado', 'Entrega Adicional, si aplica'],
      },
    ],
    diagram: {
      label: 'Flujo sincronizado entre la app de inquilinos y el backoffice de inmobiliarias',
      app: { title: 'App Fivy', subtitle: 'B2C · Inquilinos', actors: ['Solicitante', 'Co-inquilinos', 'Avalistas'] },
      engine: { title: 'Equifax', subtitle: 'Motor de riesgo', items: ['Solvencia', 'Documentación', 'Historial'] },
      b2b: { title: 'SAI · Fivy Pro', subtitle: 'B2B · Inmobiliarias', items: ['Propiedades', 'Solicitudes', 'Grupos'] },
      toEngine: 'Datos y documentos',
      toB2b: 'Evaluación',
      request: 'La inmobiliaria abre la solicitud e invita a los participantes a la app',
      result: 'Mismo resultado en los dos entornos',
      resultItems: ['Semáforo', 'Máximo Garantizado', 'Entrega Adicional'],
    },
  },
  app: {
    text: 'Fini nació como la app de Finaer para el inquilino y evolucionó, con un rebranding, a <strong>Fivy</strong>: una compañera para buscar piso en España que acompaña al usuario antes, durante y después de elegir vivienda.',
    flowsTitle: 'Flujos clave',
    flows: [
      {
        title: 'Onboarding que se bifurca',
        text: 'Una primera pregunta sobre la situación de vivienda adapta el recorrido: quien ya eligió piso va directo a su solicitud; quien está buscando puede conocer antes su capacidad de alquiler.',
      },
      {
        title: 'Varios participantes',
        text: 'Flujos colaborativos para invitar a co-inquilinos y avalistas al expediente y sumar su solvencia, sin salir del contexto de la solicitud.',
      },
      {
        title: 'Documentos y Máximo Garantizado',
        text: 'Carga documental paso a paso con barras de progreso claras para reducir el abandono, y una consulta del Máximo Garantizado fácil de entender.',
      },
    ],
    branch: {
      label: 'Bifurcación del onboarding según la situación de vivienda',
      question: '¿En qué momento estás?',
      paths: [
        {
          title: 'Ya tengo vivienda elegida',
          steps: ['Datos de la vivienda', 'Participantes', 'Documentación', 'Solicitud y Máximo Garantizado'],
        },
        {
          title: 'Estoy en búsqueda activa',
          steps: ['Datos personales', 'Documentación', 'Capacidad de alquiler', 'Buscar piso con un presupuesto claro'],
        },
      ],
    },
    screensTitle: 'Pantallas de la app',
  },
  b2b: {
    webTitle: 'Web corporativa finaer.es',
    webText:
      'Diseñé de forma integral las páginas públicas de finaer.es, orientadas a captar y convertir a cada público: agencias, propietarios e inquilinos, cada uno con su propio recorrido.',
    saiTitle: 'Backoffice inmobiliario (SAI)',
    saiText:
      'El Sistema de Autogestión Inteligente es donde la inmobiliaria trabaja cada expediente: gestiona propiedades, solicitudes en borrador y grupos de candidatos (unidades familiares o pisos compartidos).',
    saiPoints: [
      'Un <strong>semáforo de riesgo</strong> (bajo, medio y alto) basado en Equifax, para interpretar al instante la viabilidad del expediente.',
      'El <strong>Máximo Garantizado</strong> y la <strong>Entrega Adicional</strong> calculados junto al semáforo, para decidir sin hacer cuentas.',
    ],
    panel: {
      label: 'Recreación abstracta del panel de evaluación de un expediente',
      kicker: 'Expediente',
      property: 'Piso en Madrid · 3 habitaciones',
      status: 'Evaluado',
      applicantsTitle: 'Grupo solicitante',
      applicants: [
        { initials: 'LR', name: 'Laura R.', role: 'Solicitante', docs: 'Documentación completa' },
        { initials: 'DM', name: 'Diego M.', role: 'Co-inquilino', docs: 'Documentación completa' },
        { initials: 'CR', name: 'Carmen R.', role: 'Avalista', docs: 'Documentación completa' },
      ],
      riskTitle: 'Riesgo Equifax',
      risk: { low: 'Bajo', medium: 'Medio', high: 'Alto' },
      riskActive: 'Riesgo bajo',
      maxTitle: 'Máximo Garantizado',
      maxValue: '1.450 €',
      maxUnit: '/ mes',
      extraTitle: 'Entrega Adicional',
      extraValue: '0 €',
      extraHint: 'No requerida',
      illustrative: 'Datos ilustrativos',
    },
    proTitle: 'Evolución hacia Fivy Pro',
    proText: 'Fivy Pro amplía el backoffice con módulos pensados para el día a día de las agencias:',
    modules: ['Gestión de leads', 'Alta de propiedades', 'Funcionalidad de extensión', 'Chats integrados', 'Reservas'],
    analytics:
      'Instrumenté el producto con <strong>Mixpanel y Firebase</strong> para medir los embudos de conversión y activación y decidir con datos.',
  },
  system: {
    text: 'Unifiqué la app y la web en un mismo sistema de diseño, creando, refactorizando y sustituyendo en el archivo maestro los componentes que sostienen los flujos más largos.',
    label: 'Componentes clave del sistema de diseño',
    components: {
      progress: {
        title: 'Progress bar multietapa',
        text: 'Crítica en el onboarding documental: dice dónde estás y cuánto falta.',
        steps: ['Datos', 'Participantes', 'Documentos', 'Resultado'],
      },
      buttons: {
        title: 'Botones',
        text: 'Jerarquías, estados y variantes.',
        primary: 'Continuar',
        secondary: 'Guardar borrador',
        ghost: 'Ahora no',
        disabled: 'Enviar',
      },
      headers: {
        title: 'Headers adaptativos',
        text: 'La misma estructura en móvil y en web.',
        mobile: 'Mi solicitud',
        web: 'Solicitudes',
      },
      sheet: {
        title: 'Bottom sheets',
        text: 'Acciones en contexto: documentos y participantes sin perder la pantalla.',
        heading: 'Añadir participante',
        options: ['Co-inquilino', 'Avalista'],
      },
    },
  },
  impact: {
    cards: [
      {
        title: 'Expedientes más rápidos',
        text: 'Crear y evaluar un expediente de alquiler pasó a ser mucho más simple para agencias e inquilinos.',
      },
      {
        title: 'Un solo lenguaje',
        text: 'Coherencia total entre la app Fivy, el backoffice SAI / Fivy Pro y la web comercial finaer.es.',
      },
      {
        title: 'Lista para escalar',
        text: 'Una arquitectura preparada para crecer y medida con Mixpanel y Firebase.',
      },
    ],
    takeawaysTitle: 'Aprendizajes',
    takeaways: [
      'En un ecosistema, el diseño está en las costuras: lo que ve la inmobiliaria y lo que ve el inquilino tienen que contar la misma historia.',
      'Traducir riesgo financiero a un semáforo y una cifra hace que una decisión compleja se tome en segundos.',
      'Las barras de progreso y los bottom sheets no son detalles: son lo que evita que alguien abandone a mitad de la documentación.',
    ],
  },
};

const en: typeof es = {
  title: 'Finaer & Fivy',
  tagline: 'PropTech ecosystem for rental guarantees and real estate management: app, backoffice and website.',
  description:
    'Finaer provides rental guarantees in Spain for tenants, landlords and real estate agencies. As Senior Product Designer I designed its ecosystem end to end: the tenant mobile app (Fini, now Fivy), the agency web platform (SAI and Fivy Pro) and the corporate website finaer.es, held together by one design system.',
  brief:
    'Connect tenants, co-tenants, guarantors and agencies in one seamless experience, and turn complex financial data into clear decisions.',
  details: [
    { label: 'Client', value: 'Finaer Spain' },
    { label: 'Role', value: 'Senior Product Designer' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'PropTech · InsurTech (B2C + B2B)' },
  ],
  note: 'The backoffice is a confidential internal tool: it is shown through abstract recreations and illustrative data.',
  sections: {
    overview: 'Executive summary',
    challenge: 'The challenge',
    ecosystem: 'Connected ecosystem',
    app: 'Fivy app',
    b2b: 'SAI, Fivy Pro and finaer.es',
    system: 'Design system',
    impact: 'Results and impact',
  },
  overview: {
    text: 'I owned UX and market research, information architecture, app and web flows, the full design of finaer.es and the evolution of the design system. Three connected products:',
    products: [
      {
        title: 'B2C mobile app · Fini → Fivy',
        text: 'For tenants looking for a flat: they check their rental capacity, add participants and complete their file from their phone.',
      },
      {
        title: 'B2B platform · SAI and Fivy Pro',
        text: 'The agencies’ backoffice: properties, applications, applicant groups and risk assessment.',
      },
      {
        title: 'Corporate website · finaer.es',
        text: 'A complete redesign of the public pages to attract and convert agencies, landlords and tenants.',
      },
    ],
    toolsTitle: 'Tools and stack',
    tools: ['Figma', 'Design systems', 'UX Research', 'Equifax integration UX', 'Mixpanel', 'Firebase'],
  },
  challenge: {
    callout:
      'Renting in Spain is slow: manual solvency checks, candidates lost along the way and group applications (couples, flatmates, guarantors) that are hard to assess.',
    text: 'The design challenge was to connect <strong>several players</strong> (main tenant, co-tenants, guarantors and agency) in one experience, simplify document collection and turn complex financial data into clear decisions for everyone.',
    problemTitle: 'The friction',
    problems: [
      {
        title: 'Slow processes',
        text: 'Solvency was checked by hand and every file piled up back-and-forth documents between tenant and agency.',
      },
      {
        title: 'Lost candidates',
        text: 'While an application was being assessed, the tenant kept searching and the agency lost the candidate.',
      },
      {
        title: 'Group applications',
        text: 'Couples, shared flats and guarantors: several people, several documents and one single decision to make.',
      },
    ],
  },
  ecosystem: {
    text: 'The app and the backoffice share the same file. I designed the whole journey so each player sees their part and both environments show the same result.',
    steps: [
      {
        title: 'The agency creates the application',
        items: ['Adds the property in SAI', 'Opens an application (it can be saved as a draft)', 'Links candidates or groups'],
      },
      {
        title: 'Participants complete their part',
        items: ['Applicant, co-tenants and guarantors', 'Personal details from the app', 'Step-by-step document upload'],
      },
      {
        title: 'Risk assessment',
        items: ['Data and documents cross-checked', 'Equifax risk engine'],
      },
      {
        title: 'Result in both environments',
        items: ['Risk traffic light', 'Maximum Guaranteed', 'Additional Deposit, if needed'],
      },
    ],
    diagram: {
      label: 'Synchronised flow between the tenant app and the agency backoffice',
      app: { title: 'Fivy app', subtitle: 'B2C · Tenants', actors: ['Applicant', 'Co-tenants', 'Guarantors'] },
      engine: { title: 'Equifax', subtitle: 'Risk engine', items: ['Solvency', 'Documents', 'History'] },
      b2b: { title: 'SAI · Fivy Pro', subtitle: 'B2B · Agencies', items: ['Properties', 'Applications', 'Groups'] },
      toEngine: 'Data and documents',
      toB2b: 'Assessment',
      request: 'The agency opens the application and invites participants to the app',
      result: 'Same result in both environments',
      resultItems: ['Traffic light', 'Maximum Guaranteed', 'Additional Deposit'],
    },
  },
  app: {
    text: 'Fini started as Finaer’s tenant app and, after a rebrand, evolved into <strong>Fivy</strong>: a companion for finding a flat in Spain that supports the user before, during and after choosing a home.',
    flowsTitle: 'Key flows',
    flows: [
      {
        title: 'An onboarding that branches',
        text: 'A first question about the housing situation adapts the journey: those who already chose a flat go straight to their application; those still searching can learn their rental capacity first.',
      },
      {
        title: 'Several participants',
        text: 'Collaborative flows to invite co-tenants and guarantors to the file and combine their solvency, without leaving the application.',
      },
      {
        title: 'Documents and Maximum Guaranteed',
        text: 'Step-by-step document upload with clear progress bars to reduce drop-off, and an easy-to-read Maximum Guaranteed result.',
      },
    ],
    branch: {
      label: 'Onboarding branching by housing situation',
      question: 'Where are you at?',
      paths: [
        {
          title: 'I’ve already chosen a home',
          steps: ['Property details', 'Participants', 'Documents', 'Application and Maximum Guaranteed'],
        },
        {
          title: 'I’m actively searching',
          steps: ['Personal details', 'Documents', 'Rental capacity', 'Search with a clear budget'],
        },
      ],
    },
    screensTitle: 'App screens',
  },
  b2b: {
    webTitle: 'Corporate website finaer.es',
    webText:
      'I designed the public pages of finaer.es end to end, built to attract and convert each audience: agencies, landlords and tenants, each with its own journey.',
    saiTitle: 'Agency backoffice (SAI)',
    saiText:
      'The Smart Self-Management System is where the agency works on each file: it manages properties, draft applications and applicant groups (families or shared flats).',
    saiPoints: [
      'A <strong>risk traffic light</strong> (low, medium and high) based on Equifax, so the agent understands a file’s viability at a glance.',
      'The <strong>Maximum Guaranteed</strong> and <strong>Additional Deposit</strong> shown next to the traffic light, to decide without doing the maths.',
    ],
    panel: {
      label: 'Abstract recreation of the file assessment panel',
      kicker: 'File',
      property: 'Flat in Madrid · 3 bedrooms',
      status: 'Assessed',
      applicantsTitle: 'Applicant group',
      applicants: [
        { initials: 'LR', name: 'Laura R.', role: 'Applicant', docs: 'Documents complete' },
        { initials: 'DM', name: 'Diego M.', role: 'Co-tenant', docs: 'Documents complete' },
        { initials: 'CR', name: 'Carmen R.', role: 'Guarantor', docs: 'Documents complete' },
      ],
      riskTitle: 'Equifax risk',
      risk: { low: 'Low', medium: 'Medium', high: 'High' },
      riskActive: 'Low risk',
      maxTitle: 'Maximum Guaranteed',
      maxValue: '€1,450',
      maxUnit: '/ month',
      extraTitle: 'Additional Deposit',
      extraValue: '€0',
      extraHint: 'Not required',
      illustrative: 'Illustrative data',
    },
    proTitle: 'Evolving into Fivy Pro',
    proText: 'Fivy Pro extends the backoffice with modules built for agencies’ day-to-day work:',
    modules: ['Lead management', 'Property listings', 'Extension feature', 'Built-in chats', 'Bookings'],
    analytics:
      'I instrumented the product with <strong>Mixpanel and Firebase</strong> to measure conversion and activation funnels and make data-driven decisions.',
  },
  system: {
    text: 'I unified the app and the web in one design system, creating, refactoring and replacing in the master file the components that carry the longest flows.',
    label: 'Key design system components',
    components: {
      progress: {
        title: 'Multi-step progress bar',
        text: 'Critical in the document onboarding: it says where you are and what’s left.',
        steps: ['Details', 'Participants', 'Documents', 'Result'],
      },
      buttons: {
        title: 'Buttons',
        text: 'Hierarchies, states and variants.',
        primary: 'Continue',
        secondary: 'Save draft',
        ghost: 'Not now',
        disabled: 'Send',
      },
      headers: {
        title: 'Adaptive headers',
        text: 'The same structure on mobile and web.',
        mobile: 'My application',
        web: 'Applications',
      },
      sheet: {
        title: 'Bottom sheets',
        text: 'Actions in context: documents and participants without losing the screen.',
        heading: 'Add participant',
        options: ['Co-tenant', 'Guarantor'],
      },
    },
  },
  impact: {
    cards: [
      {
        title: 'Faster files',
        text: 'Creating and assessing a rental file became much simpler for agencies and tenants.',
      },
      {
        title: 'One language',
        text: 'Full consistency across the Fivy app, the SAI / Fivy Pro backoffice and the finaer.es website.',
      },
      {
        title: 'Ready to scale',
        text: 'An architecture built to grow and measured with Mixpanel and Firebase.',
      },
    ],
    takeawaysTitle: 'Takeaways',
    takeaways: [
      'In an ecosystem, design lives in the seams: what the agency sees and what the tenant sees must tell the same story.',
      'Translating financial risk into a traffic light and a number lets people make a complex decision in seconds.',
      'Progress bars and bottom sheets aren’t details: they are what keeps someone from quitting halfway through their documents.',
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
