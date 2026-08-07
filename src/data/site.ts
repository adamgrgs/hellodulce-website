export const APP_URL = 'https://bonjour.hellodulce.com';
export const SITE = {
  name: 'Hello Dulce',
  domain: 'https://hellodulce.com',
  tagline: 'Your voice, in any language',
  blurb:
    'Hello Dulce makes the phone call for you. You text what you want to say in your language — Dulce dials, speaks it naturally in theirs, and texts you every word back as it happens.',
};

export type Turn =
  | { kind: 'type'; text: string; lang: string }
  | { kind: 'dial'; number: string; label: string }
  | { kind: 'speak'; text: string; lang: string }
  | { kind: 'hear'; text: string; lang: string; translation: string; transLang: string }
  | { kind: 'done'; title: string; lines: string[] };

export type UseCase = {
  slug: string;
  nav: string;
  title: string;
  h1: string;
  kicker: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  accent: string;
  emoji: string;
  jobs: { title: string; body: string; quote: string }[];
  scenario: { label: string; yourLang: string; theirLang: string; turns: Turn[] };
  faqs: { q: string; a: string }[];
};

const flagship: UseCase = {
  slug: 'schools',
  nav: 'Schools & teachers',
  title: 'Schools & teachers',
  h1: "Talk to your child's school, even if you don't speak the language",
  kicker: 'Education',
  emoji: '🎒',
  accent: '#7c3aed',
  intro:
    "Parent-teacher meetings, absences, bus changes, extra help in reading — the calls that decide how your child's year goes. Write to Dulce in your language; the school hears fluent, polite French, English or whatever the office speaks.",
  metaTitle: "Call your child's school in any language | Hello Dulce",
  metaDescription:
    "Text Hello Dulce in Spanish, Arabic or any language and it calls your child's school and speaks fluent French or English for you — with every word translated back live.",
  jobs: [
    {
      title: 'Parent-teacher conferences',
      body: "Book the meeting, ask how your child is really doing, and follow up on what the teacher said last term — without needing a relative to translate for you.",
      quote: '¿Cómo va mi hija en matemáticas?',
    },
    {
      title: 'The school office',
      body: 'Report an absence, change a pickup time, fix a bus route, hand in a missing form. Two-minute calls that stop being a two-day problem.',
      quote: "Il faut changer l'heure de sortie de mon fils",
    },
    {
      title: 'Special services & extra help',
      body: 'Ask for a reading assessment, tutoring, or an accommodation — and get the answer in writing, in your language, so nothing is lost.',
      quote: 'My child needs extra reading help',
    },
  ],
  scenario: {
    label: 'École primaire Saint-Laurent, Montréal',
    yourLang: 'Spanish',
    theirLang: 'French',
    turns: [
      { kind: 'type', text: 'Necesito una cita con la maestra de mi hija Sofía.', lang: 'You · Spanish' },
      { kind: 'dial', number: '+1 (514) 555-0142', label: 'École Saint-Laurent' },
      {
        kind: 'hear',
        text: 'École Saint-Laurent, bonjour!',
        lang: 'Secretary · French',
        translation: 'Escuela Saint-Laurent, ¡buenos días!',
        transLang: 'Spanish',
      },
      {
        kind: 'speak',
        text: "Bonjour, j'appelle au nom de la mère de Sofía Ramírez. Elle souhaite rencontrer l'enseignante de Sofía.",
        lang: 'Dulce · French',
      },
      {
        kind: 'hear',
        text: 'Mme Tremblay est libre jeudi à 15 h 30. Ça irait?',
        lang: 'Secretary · French',
        translation: 'La Sra. Tremblay está libre el jueves a las 15:30. ¿Le va bien?',
        transLang: 'Spanish',
      },
      { kind: 'type', text: 'Sí, el jueves está perfecto. Gracias.', lang: 'You · Spanish' },
      { kind: 'speak', text: 'Parfait, jeudi 15 h 30 lui convient. Merci beaucoup!', lang: 'Dulce · French' },
      {
        kind: 'done',
        title: 'Meeting booked',
        lines: ['Thursday, 3:30 PM · Mme Tremblay', 'École Saint-Laurent, room 12', 'Bring: Sofía’s report card'],
      },
    ],
  },
  faqs: [
    {
      q: 'Does the school know they are talking to an AI?',
      a: 'Dulce introduces itself as calling on your behalf. It never pretends to be you, and it never invents facts — if the office asks something you have not told Dulce, it politely holds the line and asks you.',
    },
    {
      q: 'Can I stay on the line and listen?',
      a: 'Yes. You hear the live call while reading the translation of every sentence, and you can send a new instruction at any moment.',
    },
  ],
};

export const USE_CASES: UseCase[] = [
  flagship,
  {
    slug: 'healthcare',
    nav: 'Doctors & clinics',
    title: 'Doctors & clinics',
    h1: 'Book the appointment. Describe the symptom. In your own words.',
    kicker: 'Healthcare',
    emoji: '🩺',
    accent: '#e11d48',
    intro:
      'Health calls are the ones you cannot postpone and cannot afford to get half-right. Type what hurts in the language you think in — Dulce says it precisely to the clinic and brings the answer back the same way.',
    metaTitle: 'Call a doctor or clinic in any language | Hello Dulce',
    metaDescription:
      'Hello Dulce calls clinics, pharmacies and insurers for you, speaks their language fluently, and texts the whole conversation back translated — appointments, symptoms, coverage.',
    jobs: [
      {
        title: 'Schedule and reschedule',
        body: 'Routine checkups, specialists, walk-in slots, lab results. Dulce waits on hold so you do not have to.',
        quote: 'Necesito ver a un cardiólogo la próxima semana',
      },
      {
        title: 'Describe symptoms accurately',
        body: 'Medical detail survives the translation: where it hurts, since when, which medication, what dose.',
        quote: 'Me duele el pecho cuando respiro',
      },
      {
        title: 'Insurance and billing',
        body: 'Contest a denied claim, verify coverage, understand a bill — and get the reference number written down.',
        quote: 'Why was my claim denied?',
      },
    ],
    scenario: {
      label: 'Clinique Médicale Centre-Ville',
      yourLang: 'Spanish',
      theirLang: 'French',
      turns: [
        { kind: 'type', text: 'Quiero una cita esta semana. Me duele el pecho cuando respiro.', lang: 'You · Spanish' },
        { kind: 'dial', number: '+1 (514) 555-0198', label: 'Clinique Centre-Ville' },
        {
          kind: 'hear',
          text: 'Clinique Centre-Ville, comment puis-je vous aider?',
          lang: 'Receptionist · French',
          translation: 'Clínica Centre-Ville, ¿cómo puedo ayudarle?',
          transLang: 'Spanish',
        },
        {
          kind: 'speak',
          text: "Bonjour, j'appelle pour Mme Ramírez. Elle a une douleur à la poitrine en respirant et voudrait un rendez-vous cette semaine.",
          lang: 'Dulce · French',
        },
        {
          kind: 'hear',
          text: 'On peut la voir demain à 14 h 15. Elle a sa carte d’assurance maladie?',
          lang: 'Receptionist · French',
          translation: 'Podemos verla mañana a las 14:15. ¿Tiene su tarjeta del seguro médico?',
          transLang: 'Spanish',
        },
        { kind: 'type', text: 'Sí, la tengo. Confirmo mañana a las 2:15.', lang: 'You · Spanish' },
        { kind: 'speak', text: 'Oui, elle l’a. On confirme demain 14 h 15. Merci!', lang: 'Dulce · French' },
        {
          kind: 'done',
          title: 'Appointment confirmed',
          lines: ['Tomorrow, 2:15 PM', 'Clinique Centre-Ville · Dr. Nadeau', 'Bring: health insurance card, ID'],
        },
      ],
    },
    faqs: [
      {
        q: 'Is my health information kept private?',
        a: 'Calls and transcripts belong to you. Dulce only says what you have written or approved, and you can delete a call and its transcript at any time.',
      },
      {
        q: 'What if the clinic puts the call on hold?',
        a: 'Dulce holds the line silently and pings you the moment a human comes back.',
      },
    ],
  },
  {
    slug: 'housing',
    nav: 'Landlords & utilities',
    title: 'Landlords & utilities',
    h1: 'Get the heat fixed without needing a translator',
    kicker: 'Housing',
    emoji: '🏠',
    accent: '#0d9488',
    intro:
      'Repairs, rent questions, a move-in date, a power outage. These calls reward whoever sounds confident and precise — so let Dulce be precise for you, and keep the written record it produces.',
    metaTitle: 'Call your landlord or utility company in any language | Hello Dulce',
    metaDescription:
      'Report repairs, ask about rent, set up utilities or a move — Hello Dulce speaks to landlords, property managers and utility lines in their language and keeps a written record.',
    jobs: [
      {
        title: 'Landlords and repairs',
        body: 'Report the problem, name the date, ask when a technician comes — with a transcript you can point to later.',
        quote: 'El calentador no funciona desde el lunes',
      },
      {
        title: 'Property management',
        body: 'Building rules, parking, noise complaints, lease renewal questions, deposit returns.',
        quote: 'When is rent due?',
      },
      {
        title: 'Utilities and moving',
        body: 'Open or transfer hydro, internet and gas, report an outage, schedule an installation window.',
        quote: 'Me mudo el próximo mes',
      },
    ],
    scenario: {
      label: 'Gestion Immobilière Rosemont',
      yourLang: 'Spanish',
      theirLang: 'French',
      turns: [
        { kind: 'type', text: 'El calentador de mi apartamento no funciona desde el lunes. Soy del 4B.', lang: 'You · Spanish' },
        { kind: 'dial', number: '+1 (514) 555-0177', label: 'Gestion Rosemont' },
        {
          kind: 'hear',
          text: 'Gestion Rosemont, j’écoute.',
          lang: 'Manager · French',
          translation: 'Gestión Rosemont, le escucho.',
          transLang: 'Spanish',
        },
        {
          kind: 'speak',
          text: "Bonjour, j'appelle pour la locataire du 4B. Son chauffage ne fonctionne plus depuis lundi.",
          lang: 'Dulce · French',
        },
        {
          kind: 'hear',
          text: 'Le technicien peut passer vendredi entre 9 h et midi.',
          lang: 'Manager · French',
          translation: 'El técnico puede pasar el viernes entre las 9 y el mediodía.',
          transLang: 'Spanish',
        },
        { kind: 'type', text: 'Perfecto. ¿Me puede dar un número de seguimiento?', lang: 'You · Spanish' },
        { kind: 'speak', text: 'Très bien. Pouvez-vous nous donner un numéro de suivi?', lang: 'Dulce · French' },
        {
          kind: 'done',
          title: 'Repair scheduled',
          lines: ['Friday, 9:00 AM – 12:00 PM', 'Ticket #RM-4412', 'Someone must be home to open'],
        },
      ],
    },
    faqs: [
      {
        q: 'Can I use the transcript as proof?',
        a: 'Every call is saved with its timestamp, the number dialled and the full bilingual transcript, which you can export.',
      },
    ],
  },
  {
    slug: 'customer-service',
    nav: 'Customer service',
    title: 'Customer service',
    h1: 'Win the billing argument in a language you never studied',
    kicker: 'Support lines',
    emoji: '💳',
    accent: '#2563eb',
    intro:
      'Phone menus, hold music, an agent who talks fast. Dulce navigates the menu, waits on hold, and argues your case politely and exactly — you just read along and steer.',
    metaTitle: 'Call customer service in any language | Hello Dulce',
    metaDescription:
      'Hello Dulce calls support lines for you: billing disputes, tech support, returns and warranties — spoken fluently in their language, translated back to yours in real time.',
    jobs: [
      {
        title: 'Billing and accounts',
        body: 'Dispute a charge, cancel a subscription, update payment details, ask for the credit you were promised.',
        quote: 'This charge is wrong',
      },
      {
        title: 'Technical support',
        body: 'Describe the fault, follow the agent’s steps, and book the repair visit.',
        quote: 'Mi internet está muy lento',
      },
      {
        title: 'Returns and warranties',
        body: 'Start a return, get the shipping label, claim the warranty before it expires.',
        quote: 'This item is defective',
      },
    ],
    scenario: {
      label: 'Telecom support line',
      yourLang: 'Spanish',
      theirLang: 'English',
      turns: [
        { kind: 'type', text: 'Me cobraron $89 dos veces en agosto. Quiero un reembolso.', lang: 'You · Spanish' },
        { kind: 'dial', number: '+1 (800) 555-0110', label: 'Telecom support' },
        {
          kind: 'hear',
          text: 'Thanks for holding — how can I help today?',
          lang: 'Agent · English',
          translation: 'Gracias por esperar, ¿cómo puedo ayudarle hoy?',
          transLang: 'Spanish',
        },
        {
          kind: 'speak',
          text: "I'm calling on behalf of the account holder. She was billed $89 twice in August and is requesting a refund of the duplicate charge.",
          lang: 'Dulce · English',
        },
        {
          kind: 'hear',
          text: 'I see the duplicate. I can refund it — 3 to 5 business days.',
          lang: 'Agent · English',
          translation: 'Veo el cargo duplicado. Puedo reembolsarlo: de 3 a 5 días hábiles.',
          transLang: 'Spanish',
        },
        { kind: 'type', text: 'Acepto. Pide el número de confirmación.', lang: 'You · Spanish' },
        { kind: 'speak', text: 'She accepts. Could you give us a confirmation number, please?', lang: 'Dulce · English' },
        {
          kind: 'done',
          title: 'Refund approved',
          lines: ['$89.00 · 3–5 business days', 'Confirmation #A7-22841', 'Agent: Marcus'],
        },
      ],
    },
    faqs: [
      {
        q: 'Will Dulce sit through the phone menu and the hold queue?',
        a: 'Yes — it presses the right options and waits. You get pinged when a person picks up.',
      },
    ],
  },
  {
    slug: 'government',
    nav: 'Government services',
    title: 'Government services',
    h1: 'Immigration, benefits, licences — asked correctly the first time',
    kicker: 'Public services',
    emoji: '🏛️',
    accent: '#b45309',
    intro:
      'Government lines punish vague questions. Dulce asks yours in clean, formal language, notes the file number, the deadline and the exact document they asked for, and gives it all back to you translated.',
    metaTitle: 'Call government offices in any language | Hello Dulce',
    metaDescription:
      'Hello Dulce calls immigration, social services and licensing offices on your behalf, speaks their official language, and returns file numbers, deadlines and documents in yours.',
    jobs: [
      {
        title: 'Immigration files',
        body: 'Status updates, missing documents, biometrics appointments, what happens next and when.',
        quote: 'When will my case be processed?',
      },
      {
        title: 'Social services',
        body: 'Apply for benefits, report a change of address or income, ask why a payment stopped.',
        quote: 'Necesito ayuda alimentaria',
      },
      {
        title: 'Licences and registration',
        body: 'Driving licence renewal, vehicle registration, exam booking, equivalence questions.',
        quote: 'I need to renew my licence',
      },
    ],
    scenario: {
      label: 'Service des permis · Québec',
      yourLang: 'Arabic',
      theirLang: 'French',
      turns: [
        { kind: 'type', text: 'أريد معرفة الوثائق المطلوبة لتجديد رخصة السياقة.', lang: 'You · Arabic' },
        { kind: 'dial', number: '+1 (514) 555-0163', label: 'Service des permis' },
        {
          kind: 'hear',
          text: 'Service des permis, bonjour.',
          lang: 'Agent · French',
          translation: 'خدمة الرخص، صباح الخير.',
          transLang: 'Arabic',
        },
        {
          kind: 'speak',
          text: "Bonjour, j'appelle pour un titulaire de permis qui souhaite connaître les documents requis pour un renouvellement.",
          lang: 'Dulce · French',
        },
        {
          kind: 'hear',
          text: 'Une pièce d’identité avec photo, l’avis de renouvellement et 92 $.',
          lang: 'Agent · French',
          translation: 'بطاقة هوية بصورة، وإشعار التجديد، و92 دولاراً.',
          transLang: 'Arabic',
        },
        { kind: 'type', text: 'هل يمكن الدفع ببطاقة الخصم؟', lang: 'You · Arabic' },
        { kind: 'speak', text: 'Est-ce que le paiement par carte de débit est accepté?', lang: 'Dulce · French' },
        {
          kind: 'done',
          title: 'Checklist saved',
          lines: ['Photo ID + renewal notice', '$92 · debit accepted', 'No appointment needed before Oct 30'],
        },
      ],
    },
    faqs: [
      {
        q: 'Can Dulce give my personal details to the agent?',
        a: 'Only the details you have given it for that call. Anything else, it holds the line and asks you first.',
      },
    ],
  },
  {
    slug: 'elderly-care',
    nav: 'Caring for parents',
    title: 'Caring for parents',
    h1: 'Give your parents back the phone',
    kicker: 'Family care',
    emoji: '💛',
    accent: '#db2777',
    intro:
      'The calls adult children end up making for their parents — pharmacy, insurance, home care, the specialist’s office. With Dulce, your mother makes them herself, in her own language, and you can see the transcript afterwards.',
    metaTitle: 'Help elderly parents make phone calls in any language | Hello Dulce',
    metaDescription:
      'Hello Dulce lets elderly family members handle their own calls — doctors, pharmacies, insurers, home care — in their own language, with a transcript the family can review.',
    jobs: [
      {
        title: 'Medical coordination',
        body: 'Specialists, follow-ups, prescription refills, transport to appointments.',
        quote: 'Necesita una rampa para la silla de ruedas',
      },
      {
        title: 'Insurance and pensions',
        body: 'Coverage questions, claim forms, pension payment dates.',
        quote: 'When does the payment arrive?',
      },
      {
        title: 'Home support services',
        body: 'Arrange help at home, meal delivery, equipment and accessibility requests.',
        quote: 'She needs help twice a week',
      },
    ],
    scenario: {
      label: 'CLSC · home care services',
      yourLang: 'Spanish',
      theirLang: 'French',
      turns: [
        { kind: 'type', text: 'Mi madre necesita una rampa para la silla de ruedas en la entrada.', lang: 'You · Spanish' },
        { kind: 'dial', number: '+1 (514) 555-0121', label: 'CLSC Rosemont' },
        {
          kind: 'hear',
          text: 'CLSC Rosemont, soutien à domicile.',
          lang: 'Coordinator · French',
          translation: 'CLSC Rosemont, apoyo a domicilio.',
          transLang: 'Spanish',
        },
        {
          kind: 'speak',
          text: "Bonjour, j'appelle pour une dame de 78 ans qui aurait besoin d'une rampe d'accès pour fauteuil roulant à son entrée.",
          lang: 'Dulce · French',
        },
        {
          kind: 'hear',
          text: 'Une ergothérapeute doit évaluer le domicile. Mardi prochain, 10 h?',
          lang: 'Coordinator · French',
          translation: 'Una terapeuta ocupacional debe evaluar la vivienda. ¿El próximo martes a las 10?',
          transLang: 'Spanish',
        },
        { kind: 'type', text: 'Sí, el martes a las 10 está bien.', lang: 'You · Spanish' },
        { kind: 'speak', text: 'Oui, mardi 10 h convient parfaitement. Merci!', lang: 'Dulce · French' },
        {
          kind: 'done',
          title: 'Home visit booked',
          lines: ['Tuesday, 10:00 AM', 'Occupational therapist · CLSC Rosemont', 'File #HC-2098'],
        },
      ],
    },
    faqs: [
      {
        q: 'Can I set this up for a parent who is not comfortable with apps?',
        a: 'Yes. Dulce works from plain text messages, and a family member can help write the first request or read the transcript afterwards.',
      },
    ],
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Write what you want to say',
    body: 'In your language, the way you would actually say it. No perfect grammar, no script, no translation app in the other hand.',
  },
  {
    n: '02',
    title: 'Dulce dials and speaks',
    body: 'A natural voice in their language — not a robot reading a translation. Dulce introduces itself as calling on your behalf.',
  },
  {
    n: '03',
    title: 'You follow the call live',
    body: 'Every sentence comes back to you as text in your language, roughly a second after it is spoken. Send a new line any time and Dulce says it.',
  },
  {
    n: '04',
    title: 'You keep the outcome',
    body: 'Dates, names, file numbers and next steps, written down in your language, with the full bilingual transcript attached.',
  },
];
