/** Cas d’utilisation, français québécois (groupe A). Mêmes formes que ./site.ts.
 *  `slug` reste la clé anglaise; l’URL vient de USE_CASE_SLUGS dans i18n.ts.
 *  Les tours de scénario gardent l’espagnol lu par la personne et le français
 *  réellement parlé — seuls les libellés et les résultats sont localisés. */
import type { UseCase } from './site';

export const USE_CASES_FR_A: UseCase[] = [
  {
    slug: 'healthcare',
    nav: 'Médecins et cliniques',
    title: 'Médecins et cliniques',
    h1: 'Prenez le rendez-vous. Décrivez le symptôme. Dans vos mots.',
    kicker: 'Santé',
    emoji: '🩺',
    accent: '#ff4d3d',
    intro:
      'Les appels de santé, c’est ceux qu’on ne peut pas remettre à plus tard et qu’on ne peut pas se permettre de faire à moitié. Écrivez ce qui fait mal dans la langue où vous pensez — Dulce le dit avec précision à la clinique et vous rapporte la réponse de la même façon.',
    metaTitle: 'Appeler une clinique dans votre langue | Hello Dulce',
    metaDescription:
      'Hello Dulce appelle cliniques, pharmacies et assureurs pour vous, parle leur langue couramment et vous renvoie toute la conversation traduite par écrit.',
    jobs: [
      {
        title: 'Prendre et déplacer un rendez-vous',
        body: 'Examen de routine, spécialiste, sans rendez-vous, résultats de laboratoire. Dulce attend en ligne pour que vous n’ayez pas à le faire.',
        quote: 'Necesito ver a un cardiólogo la próxima semana',
      },
      {
        title: 'Décrire les symptômes comme il faut',
        body: 'Le détail médical survit à la traduction : où ça fait mal, depuis quand, quel médicament, quelle dose.',
        quote: 'Me duele el pecho cuando respiro',
      },
      {
        title: 'Assurances et facturation',
        body: 'Contester une réclamation refusée, vérifier la couverture, comprendre une facture — et repartir avec le numéro de dossier écrit noir sur blanc.',
        quote: 'Pourquoi ma réclamation a-t-elle été refusée?',
      },
    ],
    scenario: {
      label: 'Clinique Médicale Centre-Ville',
      yourLang: 'espagnol',
      theirLang: 'français',
      turns: [
        { kind: 'type', text: 'Quiero una cita esta semana. Me duele el pecho cuando respiro.', lang: 'Vous · espagnol' },
        { kind: 'dial', number: '+1 (514) 555-0198', label: 'Clinique Centre-Ville' },
        {
          kind: 'hear',
          text: 'Clinique Centre-Ville, comment puis-je vous aider?',
          lang: 'Réceptionniste · français',
          translation: 'Clínica Centre-Ville, ¿cómo puedo ayudarle?',
          transLang: 'espagnol',
        },
        {
          kind: 'speak',
          text: 'Bonjour! Je m’appelle Dulce, je suis une interprète virtuelle et j’appelle au nom de Mme Ramírez. Elle a une douleur à la poitrine en respirant et voudrait un rendez-vous cette semaine.',
          lang: 'Dulce · français',
        },
        {
          kind: 'hear',
          text: 'On peut la voir demain à 14 h 15. Elle a sa carte d’assurance maladie?',
          lang: 'Réceptionniste · français',
          translation: 'Podemos verla mañana a las 14:15. ¿Tiene su tarjeta del seguro médico?',
          transLang: 'espagnol',
        },
        { kind: 'type', text: 'Sí, la tengo. Confirmo mañana a las 2:15.', lang: 'Vous · espagnol' },
        { kind: 'speak', text: 'Oui, elle l’a. On confirme demain 14 h 15. Merci!', lang: 'Dulce · français' },
        {
          kind: 'done',
          title: 'Rendez-vous confirmé',
          lines: ['Demain, 14 h 15', 'Clinique Centre-Ville · Dre Nadeau', 'À apporter : carte d’assurance maladie, pièce d’identité'],
        },
      ],
    },
    faqs: [
      {
        q: 'Mes renseignements de santé restent-ils confidentiels?',
        a: 'Les appels et les transcriptions vous appartiennent. Dulce ne dit que ce que vous avez écrit ou approuvé, et vous pouvez supprimer un appel et sa transcription quand vous voulez.',
      },
      {
        q: 'Et si la clinique me met en attente?',
        a: 'Dulce garde la ligne en silence et vous avertit dès qu’une personne revient au bout du fil.',
      },
    ],
  },
  {
    slug: 'housing',
    nav: 'Propriétaires et services publics',
    title: 'Propriétaires et services publics',
    h1: 'Faites réparer le chauffage sans avoir besoin d’un interprète',
    kicker: 'Logement',
    emoji: '🏠',
    accent: '#e8952a',
    intro:
      'Réparations, questions de loyer, date d’emménagement, panne de courant. Ces appels récompensent celui qui a l’air sûr de lui et précis — laissez Dulce être précise pour vous, et gardez la trace écrite qu’elle produit.',
    metaTitle: 'Appeler votre propriétaire dans votre langue | Hello Dulce',
    metaDescription:
      'Réparations, loyer, services publics, déménagement : Dulce parle aux propriétaires et aux gestionnaires dans leur langue et garde tout par écrit pour vous.',
    jobs: [
      {
        title: 'Propriétaires et réparations',
        body: 'Signaler le problème, nommer la date, demander quand le technicien passe — avec une transcription que vous pourrez montrer plus tard.',
        quote: 'El calentador no funciona desde el lunes',
      },
      {
        title: 'Gestion d’immeuble',
        body: 'Règlements de l’immeuble, stationnement, plaintes de bruit, renouvellement de bail, remise du dépôt.',
        quote: 'Quand le loyer est-il dû?',
      },
      {
        title: 'Services publics et déménagement',
        body: 'Ouvrir ou transférer l’électricité, Internet et le gaz, signaler une panne, réserver une plage horaire d’installation.',
        quote: 'Me mudo el próximo mes',
      },
    ],
    scenario: {
      label: 'Gestion Immobilière Rosemont',
      yourLang: 'espagnol',
      theirLang: 'français',
      turns: [
        { kind: 'type', text: 'El calentador de mi apartamento no funciona desde el lunes. Soy del 4B.', lang: 'Vous · espagnol' },
        { kind: 'dial', number: '+1 (514) 555-0177', label: 'Gestion Rosemont' },
        {
          kind: 'hear',
          text: 'Gestion Rosemont, j’écoute.',
          lang: 'Gestionnaire · français',
          translation: 'Gestión Rosemont, le escucho.',
          transLang: 'espagnol',
        },
        {
          kind: 'speak',
          text: 'Bonjour! Je m’appelle Dulce, je suis une interprète virtuelle et j’appelle au nom de la locataire du 4B. Son chauffage ne fonctionne plus depuis lundi.',
          lang: 'Dulce · français',
        },
        {
          kind: 'hear',
          text: 'Le technicien peut passer vendredi entre 9 h et midi.',
          lang: 'Gestionnaire · français',
          translation: 'El técnico puede pasar el viernes entre las 9 y el mediodía.',
          transLang: 'espagnol',
        },
        { kind: 'type', text: 'Perfecto. ¿Me puede dar un número de seguimiento?', lang: 'Vous · espagnol' },
        { kind: 'speak', text: 'Très bien. Pouvez-vous nous donner un numéro de suivi?', lang: 'Dulce · français' },
        {
          kind: 'done',
          title: 'Réparation planifiée',
          lines: ['Vendredi, de 9 h à 12 h', 'Billet nº RM-4412', 'Quelqu’un doit être là pour ouvrir'],
        },
      ],
    },
    faqs: [
      {
        q: 'Est-ce que je peux me servir de la transcription comme preuve?',
        a: 'Chaque appel est conservé avec son horodatage, le numéro composé et la transcription bilingue complète, que vous pouvez exporter.',
      },
    ],
  },
];
