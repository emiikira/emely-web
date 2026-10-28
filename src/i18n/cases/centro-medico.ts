import type { Localized } from '..';

// Content of the Centro Médico case study. `en` must have exactly the shape of `es` (checked by the type).
// Strings may contain <strong> only; they are rendered with set:html.
// Everything comes from Emely's Figma file "Centro Médico" (research slides, personas, user flow and screens).

const es = {
  tagline: 'Una app de citas médicas y control sanitario para dejar atrás las esperas al teléfono.',
  description:
    'Lidiar con largas listas de espera para conseguir una cita médica es desesperante cuando queremos cuidar nuestra salud. En este proyecto diseñé una aplicación para un centro médico con sedes en toda España: no solo para pedir citas, sino para que cada paciente lleve el control de su salud desde su móvil.',
  brief: 'Investigar el problema y presentar al centro una propuesta de app que sustituya las citas por teléfono.',
  details: [
    { label: 'Cliente', value: 'Centro médico privado' },
    { label: 'Rol', value: 'Diseñadora UX/UI' },
    { label: 'Ubicación', value: 'Madrid, España' },
    { label: 'Tipo', value: 'App de salud' },
  ],
  note: 'Las pantallas y los entregables del proyecto se muestran en español, el idioma en el que se diseñaron.',
  sections: {
    challenge: 'El reto',
    research: 'Investigación',
    insight: 'Insight',
    personas: 'User personas',
    flow: 'User flow',
    design: 'Wireframes y diseño',
    next: 'La propuesta',
  },
  challenge: {
    callout:
      'Conseguir una cita médica provoca estrés, ansiedad y pérdida de tiempo, sobre todo cuando te dejan esperando en una llamada. El centro solo ofrecía citas por teléfono.',
    text: 'Durante la investigación me centré en mejorar la experiencia de los pacientes al pedir una cita en las sedes del centro. Mi objetivo era encontrar una solución para <strong>mejorar el sistema de citas médicas</strong> y crear una sincronización real entre paciente y especialista.',
    goalsTitle: 'Objetivos',
    goals: [
      'Mejorar el sistema de citas del centro médico, que hoy solo funciona por llamada telefónica.',
      'Conocer las necesidades reales de los pacientes antes de proponer una solución.',
      'Ir más allá de la cita: dar a cada paciente un lugar donde controlar su salud.',
    ],
  },
  research: {
    text: 'Preparé un guion de entrevistas a partir de un <strong>paraguas de ideas</strong> con tres ejes: el comportamiento de los pacientes, sus necesidades y sus actitudes hacia la atención médica online.',
    groups: [
      {
        title: 'Comportamiento',
        questions: [
          '¿Con qué frecuencia agendas una cita médica?',
          '¿Llamas para agendar tus citas médicas?',
          '¿Cuánto tiempo has esperado en esas llamadas?',
          '¿Utilizas alguna aplicación para tu consulta médica?',
        ],
      },
      {
        title: 'Necesidades',
        questions: [
          '¿Necesitas tener control de tus citas en tu dispositivo?',
          '¿Tienes registro de tus citas médicas anteriores?',
          '¿Cómo llevas hoy el control de tus citas?',
          '¿Cómo es tu relación médico/paciente?',
        ],
      },
      {
        title: 'Actitudes',
        questions: [
          '¿Qué opinas de la atención médica online?',
          '¿Agendarías tu próxima cita médica online?',
          '¿Llevarías un control médico en una aplicación?',
          '¿Tuviste una mala experiencia reservando citas online?',
        ],
      },
    ],
    observationsTitle: 'Primeras observaciones',
    observations: [
      '“No llevo un control de salud, pero me gustaría ponerme con ello y tener mi historia médica disponible.”',
      '“El sistema público no tiene muchas opciones para llevar un control de salud: no tengo idea de cuándo es mi control ginecológico.”',
      '“Algunas aplicaciones online de salud son muy básicas.”',
      '“Siempre reservo en restaurantes por internet.”',
    ],
    benchmarkTitle: 'Benchmark',
    benchmarkText:
      'Analicé apps de citas sanitarias públicas y privadas, como la de cita sanitaria de la Comunidad de Madrid y la de HM Hospitales, para entender qué esperan los pacientes de una app de salud.',
  },
  insight: {
    callout:
      'Insight: los pacientes necesitan llevar el control de sus citas médicas según la especialidad, de forma práctica y disponible en todo momento. Un diario médico.',
    text: 'Para que fuera accionable, lo validé con cuatro preguntas: ¿inspira?, ¿es algo nuevo?, ¿aprendimos algo?, ¿impacta en el problema del negocio?',
    solutionTitle: 'La propuesta',
    solution:
      'Un sistema de citas médicas online fácil de entender, organizado por especialidad, con acceso a la historia médica desde el dispositivo que el paciente usa a diario.',
  },
  personas: {
    text: 'Con lo aprendido en las entrevistas definí dos user personas que representan a pacientes que necesitan un seguimiento médico constante.',
    labels: { goals: 'Objetivos', frustrations: 'Frustraciones' },
    people: [
      {
        name: 'Lydia Marín',
        facts: [
          { label: 'Edad', value: '40 años' },
          { label: 'Ocupación', value: 'Educadora de primaria' },
          { label: 'Familia', value: 'Esposo y dos hijas' },
          { label: 'Ciudad', value: 'Madrid' },
        ],
        context:
          'Equilibra su salud, su trabajo y su familia mientras gestiona su diabetes, con la presión de los gastos médicos y el cansancio del día a día.',
        goals: 'Gestionar su diabetes de forma efectiva sin descuidar a su familia ni su trabajo.',
        frustrations: 'El tiempo y el esfuerzo que exige su tratamiento, y la carga económica de los gastos médicos.',
      },
      {
        name: 'Gema Piceli',
        facts: [
          { label: 'Edad', value: '29 años' },
          { label: 'Ocupación', value: 'Recursos humanos' },
          { label: 'Familia', value: 'Vive con su hermana; sus padres, fuera' },
          { label: 'Ciudad', value: 'Madrid (natal de Burgos)' },
        ],
        context:
          'Convive con un desequilibrio tiroideo que afecta a su energía. Se esfuerza por cuidarse sin perder el ritmo en su trabajo.',
        goals: 'Seguir su plan de tratamiento tiroideo y mantener el contacto con su familia a pesar de la distancia.',
        frustrations: 'La fatiga que le provoca su condición y no poder estar cerca de sus padres en los momentos importantes.',
      },
    ],
  },
  flow: {
    text: 'El flujo principal es la solicitud de una cita médica: el paciente inicia sesión o se registra, llega a un inicio con buscador y accesos directos, elige especialidad, centro, especialista y fecha, y recibe un resumen de su cita.',
    alt: 'User flow de la solicitud de cita médica: inicio de sesión o registro, inicio, selección de cita, confirmación y pantalla resumen',
    steps: [
      { title: 'Acceso', items: ['Inicio de sesión', 'Registro con validación de datos'] },
      { title: 'Inicio', items: ['Buscador', 'Agendar cita y consulta de síntomas'] },
      { title: 'Cita médica', items: ['Centro más cercano', 'Especialidad, especialista y fecha'] },
      { title: 'Confirmación', items: ['Resumen de la cita', 'Agregar al calendario'] },
    ],
  },
  design: {
    text: 'Para presentar la propuesta pasé el flujo a wireframes de baja fidelidad, que muestran la estructura de la app antes de entrar en lo visual. El formulario de cita se despliega por pasos y sugiere el centro más cercano a la ubicación del paciente.',
    wireframesTitle: 'Wireframes',
    wireframes: [
      { file: 'wf-login', label: 'Inicio de sesión' },
      { file: 'wf-inicio', label: 'Inicio' },
      { file: 'wf-cita-opciones', label: 'Centro y especialidad' },
      { file: 'wf-confirmacion', label: 'Cita confirmada' },
    ],
    visualTitle: 'Identidad visual',
    visualText:
      'La interfaz parte de la identidad del centro: un turquesa sanitario, tranquilo y luminoso, y un logotipo que une una corona con la cruz médica. Diseñé el inicio de sesión en alta fidelidad para que el centro viera cómo se sentiría su app.',
    loginAlt: 'Pantalla de inicio de sesión en alta fidelidad, con el logotipo del centro sobre fondo turquesa',
  },
  next: {
    text: 'Este trabajo de discovery fue la base para presentar el proyecto al centro médico: la investigación, el insight, las personas y el flujo demostraban el problema y daban forma a la solución. La propuesta incluía una hoja de ruta para la siguiente fase:',
    cards: [
      {
        title: 'Validar con pacientes',
        text: 'Probar el flujo de cita con pacientes como Lydia y Gema antes de invertir en el diseño visual.',
      },
      {
        title: 'Alta fidelidad',
        text: 'Llevar el flujo completo a alta fidelidad con la identidad del centro.',
      },
      {
        title: 'Diario médico',
        text: 'Diseñar la historia médica y el control por especialidad: el corazón del insight.',
      },
    ],
  },
};

const en: typeof es = {
  tagline: 'A medical appointments and health tracking app to leave phone queues behind.',
  description:
    'Dealing with long waiting lists to get a medical appointment is frustrating when we want to look after our health. In this project I designed an app for a medical centre with branches across Spain: not just to book appointments, but so every patient can keep track of their health from their phone.',
  brief: 'Research the problem and pitch the centre an app that replaces phone bookings.',
  details: [
    { label: 'Client', value: 'Private medical centre' },
    { label: 'Role', value: 'UX/UI Designer' },
    { label: 'Location', value: 'Madrid, Spain' },
    { label: 'Type', value: 'Health app' },
  ],
  note: 'Screens and project deliverables are shown in Spanish, the language they were designed in.',
  sections: {
    challenge: 'The challenge',
    research: 'Research',
    insight: 'Insight',
    personas: 'User personas',
    flow: 'User flow',
    design: 'Wireframes and design',
    next: 'The pitch',
  },
  challenge: {
    callout:
      'Getting a medical appointment causes stress, anxiety and lost time, especially when you’re left waiting on a call. The centre only offered phone bookings.',
    text: 'During research I focused on improving patients’ experience when booking an appointment at the centre’s branches. My goal was to find a way to <strong>improve the appointment system</strong> and create real synchronisation between patient and specialist.',
    goalsTitle: 'Goals',
    goals: [
      'Improve the centre’s appointment system, which today only works over the phone.',
      'Understand patients’ real needs before proposing a solution.',
      'Go beyond the appointment: give each patient a place to keep track of their health.',
    ],
  },
  research: {
    text: 'I wrote an interview guide from an <strong>umbrella of ideas</strong> with three axes: patients’ behaviour, their needs and their attitudes towards online healthcare.',
    groups: [
      {
        title: 'Behaviour',
        questions: [
          'How often do you book a medical appointment?',
          'Do you call to book your appointments?',
          'How long have you waited on those calls?',
          'Do you use an app for your medical visits?',
        ],
      },
      {
        title: 'Needs',
        questions: [
          'Do you need to track your appointments on your device?',
          'Do you keep a record of past appointments?',
          'How do you keep track of your appointments today?',
          'How is your doctor–patient relationship?',
        ],
      },
      {
        title: 'Attitudes',
        questions: [
          'What do you think about online healthcare?',
          'Would you book your next appointment online?',
          'Would you keep track of your health in an app?',
          'Have you had a bad experience booking online?',
        ],
      },
    ],
    observationsTitle: 'First observations',
    observations: [
      '“I don’t track my health, but I’d like to start and have my medical history available.”',
      '“The public system doesn’t offer many ways to track your health: I have no idea when my gynaecology check-up is.”',
      '“Some online health apps are very basic.”',
      '“I always book restaurants online.”',
    ],
    benchmarkTitle: 'Benchmark',
    benchmarkText:
      'I analysed public and private appointment apps, such as the Community of Madrid’s health appointment app and HM Hospitales’, to understand what patients expect from a health app.',
  },
  insight: {
    callout:
      'Insight: patients need to keep track of their medical appointments by specialty, in a practical way that is always at hand. A medical diary.',
    text: 'To make it actionable, I tested it against four questions: does it inspire? Is it new? Did we learn something? Does it address the business problem?',
    solutionTitle: 'The proposal',
    solution:
      'An easy-to-understand online appointment system, organised by specialty, with access to the medical history from the device the patient uses every day.',
  },
  personas: {
    text: 'With what I learned in the interviews, I defined two user personas who represent patients needing ongoing medical follow-up.',
    labels: { goals: 'Goals', frustrations: 'Frustrations' },
    people: [
      {
        name: 'Lydia Marín',
        facts: [
          { label: 'Age', value: '40' },
          { label: 'Occupation', value: 'Primary school teacher' },
          { label: 'Family', value: 'Husband and two daughters' },
          { label: 'City', value: 'Madrid' },
        ],
        context:
          'She balances her health, work and family while managing her diabetes, under the pressure of medical costs and day-to-day fatigue.',
        goals: 'Manage her diabetes effectively without neglecting her family or her job.',
        frustrations: 'The time and effort her treatment demands, and the financial burden of medical costs.',
      },
      {
        name: 'Gema Piceli',
        facts: [
          { label: 'Age', value: '29' },
          { label: 'Occupation', value: 'Human resources' },
          { label: 'Family', value: 'Lives with her sister; parents live away' },
          { label: 'City', value: 'Madrid (born in Burgos)' },
        ],
        context:
          'She lives with a thyroid imbalance that affects her energy. She works hard to look after herself without falling behind at work.',
        goals: 'Follow her thyroid treatment plan and stay close to her family despite the distance.',
        frustrations: 'The fatigue caused by her condition and not being near her parents at important moments.',
      },
    ],
  },
  flow: {
    text: 'The main flow is booking an appointment: the patient signs in or registers, lands on a home screen with search and shortcuts, chooses specialty, centre, specialist and date, and gets a summary of the appointment.',
    alt: 'User flow for booking an appointment: sign in or register, home, appointment selection, confirmation and summary screen',
    steps: [
      { title: 'Access', items: ['Sign in', 'Registration with data validation'] },
      { title: 'Home', items: ['Search', 'Book an appointment and symptom check'] },
      { title: 'Appointment', items: ['Nearest centre', 'Specialty, specialist and date'] },
      { title: 'Confirmation', items: ['Appointment summary', 'Add to calendar'] },
    ],
  },
  design: {
    text: 'To present the proposal I turned the flow into low-fidelity wireframes, showing the app’s structure before the visual design. The booking form unfolds step by step and suggests the centre closest to the patient’s location.',
    wireframesTitle: 'Wireframes',
    wireframes: [
      { file: 'wf-login', label: 'Sign in' },
      { file: 'wf-inicio', label: 'Home' },
      { file: 'wf-cita-opciones', label: 'Centre and specialty' },
      { file: 'wf-confirmacion', label: 'Appointment booked' },
    ],
    visualTitle: 'Visual identity',
    visualText:
      'The interface builds on the centre’s identity: a calm, bright healthcare turquoise and a logo that joins a crown with the medical cross. I designed the sign-in screen in high fidelity so the centre could see how its app would feel.',
    loginAlt: 'High-fidelity sign-in screen, with the centre’s logo on a turquoise background',
  },
  next: {
    text: 'This discovery work was the basis for pitching the project to the medical centre: the research, insight, personas and flow proved the problem and shaped the solution. The proposal included a roadmap for the next phase:',
    cards: [
      {
        title: 'Validate with patients',
        text: 'Test the booking flow with patients like Lydia and Gema before investing in visual design.',
      },
      {
        title: 'High fidelity',
        text: 'Take the full flow to high fidelity with the centre’s identity.',
      },
      {
        title: 'Medical diary',
        text: 'Design the medical history and tracking by specialty: the heart of the insight.',
      },
    ],
  },
};

export default { es, en } satisfies Localized<typeof es>;
