/** Quebec French copy. Written, not machine-dumped: tu/vous choices, local
 *  vocabulary (cégep, centre de services scolaire, courriel, rendez-vous),
 *  and Quebec time format (15 h 30). Same shapes as ../site.ts. */
import type { UseCase, QA } from './site';
import { USE_CASES_FR_A } from './fr-usecases-a';
import { USE_CASES_FR_B } from './fr-usecases-b';

export const SITE_FR = {
  name: 'Hello Dulce',
  tagline: 'Votre voix, dans toutes les langues',
  blurb:
    'Hello Dulce fait l’appel à votre place. Vous écrivez ce que vous voulez dire dans votre langue — Dulce compose le numéro, le dit naturellement dans la leur, et vous renvoie chaque phrase par écrit pendant que l’appel se déroule.',
};

export const UI_FR = {
  nav: {
    howItWorks: 'Comment ça marche',
    useCases: 'Cas d’utilisation',
    meetDulce: 'Rencontrer Dulce',
    guides: 'Guides',
    faq: 'FAQ',
    start: 'Faire un appel',
    openApp: 'Ouvrir l’application',
    allUseCases: 'Tous les cas d’utilisation',
    home: 'Accueil',
  },
  cta: {
    start: 'Faire un appel',
    startArrow: 'Faire un appel →',
    watch: 'Voir ça se passer',
    hearVoice: 'Écouter sa voix',
    seeCall: 'Voir l’appel →',
    readGuide: 'Lire le guide →',
    replay: 'Rejouer',
    seeSteps: 'Voir l’appel au complet, étape par étape →',
    whoIsDulce: 'C’est qui, Dulce? →',
    watchSim: 'Voir la simulation →',
    read: 'Lire →',
  },
  labels: {
    shortAnswer: 'La réponse courte',
    inOneParagraph: 'En un paragraphe',
    onThisPage: 'Dans cette page',
    sources: 'Sources',
    keepReading: 'À lire ensuite',
    seeTheCall: 'Voir comment l’appel se passe',
    questionsAsked: 'Questions fréquentes',
    published: 'Publié le',
    updated: 'Mis à jour le',
    readTime: 'min de lecture',
    guides: 'Guides',
    langSwitch: 'English',
    langSwitchLabel: 'Read this page in English',
  },
  footer: {
    tagline: 'Fait pour tout le monde qui a déjà remis un appel à plus tard.',
  },
};

export const STEPS_FR = [
  {
    n: '01',
    title: 'Écrivez ce que vous voulez dire',
    body: 'Dans votre langue, comme vous le diriez vraiment. Pas besoin d’une grammaire parfaite, d’un script, ni d’une appli de traduction dans l’autre main.',
  },
  {
    n: '02',
    title: 'Dulce appelle et parle',
    body: 'Une voix naturelle dans leur langue — pas un robot qui lit une traduction. Dulce se présente comme interprète virtuelle qui appelle en votre nom.',
  },
  {
    n: '03',
    title: 'Vous suivez l’appel en direct',
    body: 'Chaque phrase vous revient par écrit dans votre langue, environ une seconde après avoir été dite. Envoyez une nouvelle ligne quand vous voulez et Dulce la dit.',
  },
  {
    n: '04',
    title: 'Vous gardez le résultat',
    body: 'Dates, noms, numéros de dossier et prochaines étapes, écrits dans votre langue, avec la transcription bilingue complète.',
  },
];

export const CORE_QA_FR: QA[] = [
  {
    slug: 'cest-quoi-hello-dulce',
    q: 'C’est quoi, Hello Dulce?',
    a: 'Hello Dulce est une interprète téléphonique propulsée par l’IA. Vous écrivez ce que vous voulez dire dans votre langue, Hello Dulce fait l’appel et le dit à voix haute dans la langue de l’autre personne avec une voix naturelle, puis vous renvoie chaque phrase de sa réponse traduite, pendant que l’appel est encore en cours. Ça fonctionne avec n’importe quel numéro de téléphone, et l’autre personne n’a besoin d’aucune application, d’aucun compte et d’aucune installation.',
  },
  {
    slug: 'comment-ca-marche',
    q: 'Comment ça marche, étape par étape?',
    a: 'Quatre étapes. 1) Vous ouvrez l’application et vous écrivez votre message dans votre langue. 2) Vous entrez le numéro et Hello Dulce le compose. 3) Quand quelqu’un répond, Dulce se présente comme interprète virtuelle qui appelle en votre nom et dit votre message dans leur langue; chaque phrase qu’on lui répond vous revient par écrit dans votre langue environ une seconde plus tard. 4) À la fin de l’appel, vous gardez un résumé écrit et la transcription bilingue complète.',
  },
  {
    slug: 'dois-je-parler',
    q: 'Est-ce que je dois parler pendant l’appel?',
    a: 'Non. Vous écrivez, Dulce parle. Vous pouvez écouter l’appel en direct si vous le voulez, mais vous n’avez jamais à dire un mot dans une langue où vous n’êtes pas à l’aise. C’est aussi ce qui garde l’appel précis : ce que vous avez écrit est exactement ce qui est dit.',
  },
  {
    slug: 'est-ce-une-voix-robotique',
    q: 'Est-ce que ça sonne robotique?',
    a: 'Non. Dulce utilise une voix naturelle avec l’accent d’ici — du français québécois à Montréal, pas du français de manuel — et elle commence à parler environ une seconde après l’envoi de votre ligne, donc la conversation garde son rythme au lieu de s’étirer. La plupart des gens répondent comme à n’importe quel autre appel.',
  },
  {
    slug: 'quelle-est-la-vitesse',
    q: 'La traduction est rapide à quel point?',
    a: 'Environ une seconde. Lors de tests internes sur le pont vocal de Hello Dulce, un message écrit devenait de la parole dans l’autre langue en 0,9 à 1,3 seconde du début à la fin. C’est assez rapide pour que la personne au téléphone ne sente pas de pause digne d’un commentaire.',
  },
  {
    slug: 'quelles-langues',
    q: 'Quelles langues sont prises en charge?',
    a: 'Hello Dulce est conçue pour les paires de langues très répandues, dans les deux sens — espagnol, français, anglais, arabe, mandarin, portugais, créole haïtien, vietnamien, russe, hindi, tagalog et plus. Le premier marché : les personnes hispanophones et arabophones qui appellent des institutions francophones au Québec.',
  },
  {
    slug: 'est-ce-un-service-dinterpretation',
    q: 'Est-ce la même chose qu’un service d’interprétation téléphonique?',
    a: 'Le travail est le même, la forme est différente. Un service d’interprétation téléphonique traditionnel est un appel à trois avec un interprète humain, facturé à la minute — le tarif public à la carte de LanguageLine est de 3,95 $ US la minute en audio. Avec Hello Dulce, il n’y a pas de troisième personne sur la ligne ni de rendez-vous à prendre : vous écrivez, elle parle, et vous repartez avec un compte rendu écrit. Les interprètes humains restent le bon choix pour les procédures judiciaires, le consentement médical complexe et tout contexte où un interprète agréé est exigé.',
  },
  {
    slug: 'lautre-personne-doit-elle-installer-quelque-chose',
    q: 'Est-ce que l’autre personne doit installer quelque chose?',
    a: 'Non. Elle reçoit un appel téléphonique normal sur une ligne normale. Il n’y a rien à télécharger, à cliquer ou à accepter de son côté.',
  },
  {
    slug: 'dit-elle-quelle-est-une-ia',
    q: 'Est-ce que Dulce dit qu’elle est une IA?',
    a: 'Oui. Dès le début de l’appel, Dulce annonce qu’elle est une interprète virtuelle qui appelle au nom d’une personne nommée. Elle ne se fait jamais passer pour vous, et elle n’invente jamais de réponse : si on lui demande quelque chose que vous ne lui avez pas dit, elle garde la ligne et vous pose la question.',
  },
  {
    slug: 'combien-ca-coute',
    q: 'Combien ça coûte?',
    a: 'Les prix ne sont pas encore publiés — Hello Dulce est en accès anticipé sur bonjour.hellodulce.com. L’objectif de conception est un coût par appel bien inférieur à l’interprétation humaine à la minute, puisque personne n’a à se joindre à la ligne.',
  },
];

export const FACTS_FR = [
  { label: 'Délai entre votre message écrit et la parole', value: '~1 seconde', note: 'mesuré entre 0,9 et 1,3 s en tests internes' },
  { label: 'Ce que l’autre personne doit avoir', value: 'Rien', note: 'un appel normal sur une ligne normale' },
  { label: 'Ce que vous devez dire à voix haute', value: 'Rien', note: 'vous écrivez, Dulce parle' },
  { label: 'Ce qu’il vous reste après', value: 'Un compte rendu écrit', note: 'un résumé et la transcription bilingue complète' },
];

/** Use cases, French. `slug` stays the English key; the URL slug comes from
 *  USE_CASE_SLUGS in i18n.ts. Scenario turns keep the real spoken French and
 *  the Spanish the caller reads — only labels and outcomes are localized. */
const schoolsFr: UseCase = {
    slug: 'schools',
    nav: 'École et enseignants',
    title: 'École et enseignants',
    h1: 'Parlez à l’école de votre enfant, même sans parler la langue',
    kicker: 'Éducation',
    emoji: '🎒',
    accent: '#ff6a2b',
    intro:
      'Rencontres de parents, absences, changement d’autobus, aide en lecture — les appels qui décident comment se passe l’année de votre enfant. Écrivez à Dulce dans votre langue; le secrétariat entend un français clair et poli, ou la langue qu’on parle au bureau.',
    metaTitle: 'Appeler l’école de votre enfant dans votre langue | Hello Dulce',
    metaDescription:
      'Écrivez à Hello Dulce en espagnol, en arabe ou dans votre langue : elle appelle l’école de votre enfant, parle un français fluide pour vous, et vous traduit chaque phrase en direct.',
    jobs: [
      {
        title: 'Rencontres de parents',
        body: 'Prendre le rendez-vous, demander comment ça va vraiment, faire le suivi de ce que l’enseignante a dit la dernière fois — sans avoir besoin de quelqu’un pour traduire.',
        quote: '¿Cómo va mi hija en matemáticas?',
      },
      {
        title: 'Le secrétariat',
        body: 'Signaler une absence, changer une heure de sortie, corriger un trajet d’autobus, remettre un formulaire manquant. Des appels de deux minutes qui cessent d’être un problème de deux jours.',
        quote: 'Il faut changer l’heure de sortie de mon fils',
      },
      {
        title: 'Services particuliers et aide additionnelle',
        body: 'Demander une évaluation en lecture, du tutorat ou une mesure d’adaptation — et obtenir la réponse par écrit, dans votre langue, pour que rien ne se perde.',
        quote: 'Mon enfant a besoin d’aide en lecture',
      },
    ],
    scenario: {
      label: 'École primaire Saint-Laurent, Montréal',
      yourLang: 'espagnol',
      theirLang: 'français',
      turns: [
        { kind: 'type', text: 'Necesito una cita con la maestra de mi hija Sofía.', lang: 'Vous · espagnol' },
        { kind: 'dial', number: '+1 (514) 555-0142', label: 'École Saint-Laurent' },
        {
          kind: 'hear',
          text: 'École Saint-Laurent, bonjour!',
          lang: 'Secrétariat · français',
          translation: 'Escuela Saint-Laurent, ¡buenos días!',
          transLang: 'espagnol',
        },
        {
          kind: 'speak',
          text: 'Bonjour! Je m’appelle Dulce, je suis une interprète virtuelle et j’appelle au nom de la mère de Sofía Ramírez.',
          lang: 'Dulce · français',
        },
        {
          kind: 'hear',
          text: 'Mme Tremblay est libre jeudi à 15 h 30. Ça irait?',
          lang: 'Secrétariat · français',
          translation: 'La Sra. Tremblay está libre el jueves a las 15:30. ¿Le va bien?',
          transLang: 'espagnol',
        },
        { kind: 'type', text: 'Sí, el jueves está perfecto. Gracias.', lang: 'Vous · espagnol' },
        { kind: 'speak', text: 'Parfait, jeudi 15 h 30 lui convient. Merci beaucoup!', lang: 'Dulce · français' },
        {
          kind: 'done',
          title: 'Rendez-vous confirmé',
          lines: ['Jeudi, 15 h 30 · Mme Tremblay', 'École Saint-Laurent, local 12', 'À apporter : le bulletin de Sofía'],
        },
      ],
    },
    faqs: [
      {
        q: 'Est-ce que l’école sait qu’elle parle à une IA?',
        a: 'Oui. Dulce se présente comme interprète virtuelle qui appelle en votre nom. Elle ne se fait jamais passer pour vous et elle n’invente rien : si le secrétariat demande quelque chose que vous ne lui avez pas dit, elle garde la ligne et vous pose la question.',
      },
      {
        q: 'Est-ce que je peux rester en ligne et écouter?',
        a: 'Oui. Vous entendez l’appel en direct tout en lisant la traduction de chaque phrase, et vous pouvez envoyer une nouvelle consigne à tout moment.',
      },
    ],
};

export const USE_CASES_FR: UseCase[] = [schoolsFr, ...USE_CASES_FR_A, ...USE_CASES_FR_B];
