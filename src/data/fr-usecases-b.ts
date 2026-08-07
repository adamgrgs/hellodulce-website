/** Cas d’utilisation, français québécois (lot B). Mêmes formes que ./site.ts.
 *  Le `slug` reste la clé anglaise; l’URL vient de USE_CASE_SLUGS dans i18n.ts.
 *  Dans les scénarios, seules les étiquettes et les résultats sont localisés :
 *  la langue réellement parlée au téléphone et la langue de la personne qui
 *  appelle restent intactes. */
import type { UseCase } from './site';

export const USE_CASES_FR_B: UseCase[] = [
  {
    slug: 'customer-service',
    nav: 'Service à la clientèle',
    title: 'Service à la clientèle',
    h1: 'Gagnez la discussion sur votre facture dans une langue que vous n’avez jamais apprise',
    kicker: 'Lignes de soutien',
    emoji: '💳',
    accent: '#ffb020',
    intro:
      'Menus téléphoniques, musique d’attente, un agent qui parle vite. Dulce navigue dans le menu, patiente en attente et défend votre dossier avec politesse et précision — vous n’avez qu’à lire et à donner la suite.',
    metaTitle: 'Appeler le service à la clientèle dans votre langue | Hello Dulce',
    metaDescription:
      'Hello Dulce appelle les lignes de soutien pour vous : facturation, soutien technique, retours, garanties — dans leur langue, traduit dans la vôtre en direct.',
    jobs: [
      {
        title: 'Facturation et comptes',
        body: 'Contester un montant, annuler un abonnement, changer le mode de paiement, réclamer le crédit qu’on vous avait promis.',
        quote: 'This charge is wrong',
      },
      {
        title: 'Soutien technique',
        body: 'Décrire la panne, suivre les étapes que l’agent vous dicte, puis fixer la visite du technicien.',
        quote: 'Mi internet está muy lento',
      },
      {
        title: 'Retours et garanties',
        body: 'Ouvrir un retour, obtenir l’étiquette d’expédition, faire jouer la garantie avant qu’elle expire.',
        quote: 'This item is defective',
      },
    ],
    scenario: {
      label: 'Ligne de soutien télécom',
      yourLang: 'espagnol',
      theirLang: 'anglais',
      turns: [
        { kind: 'type', text: 'Me cobraron $89 dos veces en agosto. Quiero un reembolso.', lang: 'Vous · espagnol' },
        { kind: 'dial', number: '+1 (800) 555-0110', label: 'Soutien télécom' },
        {
          kind: 'hear',
          text: 'Thanks for holding — how can I help today?',
          lang: 'Agent · anglais',
          translation: 'Gracias por esperar, ¿cómo puedo ayudarle hoy?',
          transLang: 'espagnol',
        },
        {
          kind: 'speak',
          text: "Hello, my name is Dulce. I'm a virtual interpreter calling on behalf of the account holder. She was billed $89 twice in August and is requesting a refund of the duplicate charge.",
          lang: 'Dulce · anglais',
        },
        {
          kind: 'hear',
          text: 'I see the duplicate. I can refund it — 3 to 5 business days.',
          lang: 'Agent · anglais',
          translation: 'Veo el cargo duplicado. Puedo reembolsarlo: de 3 a 5 días hábiles.',
          transLang: 'espagnol',
        },
        { kind: 'type', text: 'Acepto. Pide el número de confirmación.', lang: 'Vous · espagnol' },
        { kind: 'speak', text: 'She accepts. Could you give us a confirmation number, please?', lang: 'Dulce · anglais' },
        {
          kind: 'done',
          title: 'Remboursement accepté',
          lines: ['89,00 $ · 3 à 5 jours ouvrables', 'Confirmation nº A7-22841', 'Agent : Marcus'],
        },
      ],
    },
    faqs: [
      {
        q: 'Est-ce que Dulce va passer à travers le menu et la file d’attente?',
        a: 'Oui — elle appuie sur les bonnes options et elle attend. Vous recevez une alerte dès qu’une personne prend l’appel.',
      },
    ],
  },
  {
    slug: 'government',
    nav: 'Services gouvernementaux',
    title: 'Services gouvernementaux',
    h1: 'Immigration, prestations, permis — la bonne question, du premier coup',
    kicker: 'Services publics',
    emoji: '🏛️',
    accent: '#d97706',
    intro:
      'Les lignes gouvernementales n’aiment pas les questions floues. Dulce pose la vôtre dans une langue claire et formelle, note le numéro de dossier, la date limite et le document exact qu’on vous demande, puis vous remet le tout traduit.',
    metaTitle: 'Appeler un bureau du gouvernement dans votre langue | Hello Dulce',
    metaDescription:
      'Hello Dulce appelle l’immigration, les services sociaux et les bureaux de permis pour vous, et vous rend dossier, délais et documents dans votre langue.',
    jobs: [
      {
        title: 'Dossiers d’immigration',
        body: 'État d’avancement, documents manquants, rendez-vous de biométrie, la prochaine étape et le moment où elle arrive.',
        quote: 'When will my case be processed?',
      },
      {
        title: 'Services sociaux',
        body: 'Demander des prestations, signaler un changement d’adresse ou de revenu, comprendre pourquoi un versement a cessé.',
        quote: 'Necesito ayuda alimentaria',
      },
      {
        title: 'Permis et immatriculation',
        body: 'Renouvellement du permis de conduire, immatriculation d’un véhicule, prise d’examen, questions d’équivalence.',
        quote: 'I need to renew my licence',
      },
    ],
    scenario: {
      label: 'Service des permis · Québec',
      yourLang: 'arabe',
      theirLang: 'français',
      turns: [
        { kind: 'type', text: 'أريد معرفة الوثائق المطلوبة لتجديد رخصة السياقة.', lang: 'Vous · arabe' },
        { kind: 'dial', number: '+1 (514) 555-0163', label: 'Service des permis' },
        {
          kind: 'hear',
          text: 'Service des permis, bonjour.',
          lang: 'Agent · français',
          translation: 'خدمة الرخص، صباح الخير.',
          transLang: 'arabe',
        },
        {
          kind: 'speak',
          text: 'Bonjour! Je m’appelle Dulce, je suis une interprète virtuelle et j’appelle au nom d’un titulaire de permis qui souhaite connaître les documents requis pour un renouvellement.',
          lang: 'Dulce · français',
        },
        {
          kind: 'hear',
          text: 'Une pièce d’identité avec photo, l’avis de renouvellement et 92 $.',
          lang: 'Agent · français',
          translation: 'بطاقة هوية بصورة، وإشعار التجديد، و92 دولاراً.',
          transLang: 'arabe',
        },
        { kind: 'type', text: 'هل يمكن الدفع ببطاقة الخصم؟', lang: 'Vous · arabe' },
        { kind: 'speak', text: 'Est-ce que le paiement par carte de débit est accepté?', lang: 'Dulce · français' },
        {
          kind: 'done',
          title: 'Liste de documents enregistrée',
          lines: [
            'Pièce d’identité avec photo + avis de renouvellement',
            '92 $ · débit accepté',
            'Aucun rendez-vous requis avant le 30 octobre',
          ],
        },
      ],
    },
    faqs: [
      {
        q: 'Est-ce que Dulce peut donner mes renseignements personnels à l’agent?',
        a: 'Seulement ceux que vous lui avez confiés pour cet appel. Pour tout le reste, elle garde la ligne et vous pose la question avant.',
      },
    ],
  },
  {
    slug: 'elderly-care',
    nav: 'Prendre soin de ses parents',
    title: 'Prendre soin de ses parents',
    h1: 'Redonnez le téléphone à vos parents',
    kicker: 'Proches aidants',
    emoji: '💛',
    accent: '#ff7a45',
    intro:
      'Ces appels que les enfants adultes finissent par faire à la place de leurs parents — la pharmacie, l’assurance, le soutien à domicile, le bureau du spécialiste. Avec Dulce, votre mère les fait elle-même, dans sa langue, et vous pouvez lire la transcription après.',
    metaTitle: 'Aider vos parents âgés à téléphoner dans leur langue | Hello Dulce',
    metaDescription:
      'Avec Hello Dulce, vos parents âgés font leurs appels eux-mêmes — médecin, pharmacie, assureur, soutien à domicile — dans leur langue, transcription incluse.',
    jobs: [
      {
        title: 'Coordination médicale',
        body: 'Spécialistes, suivis, renouvellement d’ordonnances, transport jusqu’aux rendez-vous.',
        quote: 'Necesita una rampa para la silla de ruedas',
      },
      {
        title: 'Assurances et rentes',
        body: 'Questions de couverture, formulaires de réclamation, dates de versement des rentes.',
        quote: 'When does the payment arrive?',
      },
      {
        title: 'Services de soutien à domicile',
        body: 'Organiser de l’aide à la maison, la livraison de repas, l’équipement et les demandes d’accessibilité.',
        quote: 'She needs help twice a week',
      },
    ],
    scenario: {
      label: 'CLSC · soutien à domicile',
      yourLang: 'espagnol',
      theirLang: 'français',
      turns: [
        {
          kind: 'type',
          text: 'Mi madre necesita una rampa para la silla de ruedas en la entrada.',
          lang: 'Vous · espagnol',
        },
        { kind: 'dial', number: '+1 (514) 555-0121', label: 'CLSC Rosemont' },
        {
          kind: 'hear',
          text: 'CLSC Rosemont, soutien à domicile.',
          lang: 'Coordonnatrice · français',
          translation: 'CLSC Rosemont, apoyo a domicilio.',
          transLang: 'espagnol',
        },
        {
          kind: 'speak',
          text: 'Bonjour! Je m’appelle Dulce, je suis une interprète virtuelle et j’appelle au nom d’une dame de 78 ans qui aurait besoin d’une rampe d’accès pour fauteuil roulant à son entrée.',
          lang: 'Dulce · français',
        },
        {
          kind: 'hear',
          text: 'Une ergothérapeute doit évaluer le domicile. Mardi prochain, 10 h?',
          lang: 'Coordonnatrice · français',
          translation: 'Una terapeuta ocupacional debe evaluar la vivienda. ¿El próximo martes a las 10?',
          transLang: 'espagnol',
        },
        { kind: 'type', text: 'Sí, el martes a las 10 está bien.', lang: 'Vous · espagnol' },
        { kind: 'speak', text: 'Oui, mardi 10 h convient parfaitement. Merci!', lang: 'Dulce · français' },
        {
          kind: 'done',
          title: 'Visite à domicile fixée',
          lines: ['Mardi, 10 h', 'Ergothérapeute · CLSC Rosemont', 'Dossier nº HC-2098'],
        },
      ],
    },
    faqs: [
      {
        q: 'Est-ce que je peux configurer ça pour un parent qui n’est pas à l’aise avec les applications?',
        a: 'Oui. Dulce fonctionne avec de simples messages écrits, et un membre de la famille peut aider à rédiger la première demande ou relire la transcription ensuite.',
      },
    ],
  },
];
