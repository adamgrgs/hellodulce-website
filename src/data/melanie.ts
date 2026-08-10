/** Melanie — the character behind the product. Deliberately short.
 *  Adam's call (2026-08-07): the old profile read like a biography and buried the
 *  point. Keep it to one line of who she is + three things you feel on the call
 *  + four rules. If you are tempted to add lore, don't.
 *  Renamed from Dulce in the MontrealReception rebrand [adam, 2026-08-10]. */
export const MELANIE = {
  name: 'Melanie',
  age: 30,
  role: 'The voice that makes your call',
  oneLiner:
    'Melanie is 30, she works with newcomers to Quebec, and she is your bilingual voice on the phone: she introduces herself, says the call is for you, and never invents an answer.',
  city: 'Montreal, Quebec',
  pronouns: 'she/her',
  images: {
    hero: '/melanie/melanie-hero.webp',
    avatar: '/melanie/melanie-avatar.webp',
    welcome: '/melanie/melanie-welcome.webp',
    calm: '/melanie/melanie-calm.webp',
    montreal: '/melanie/melanie-montreal.webp',
  },
  traits: [
    {
      emoji: '🫶',
      title: 'Patient',
      body: 'She will ask again, slowly, without a sigh. Nobody on the line feels rushed.',
      image: '/melanie/melanie-welcome.webp',
      alt: 'Melanie at a community-centre table, sliding a form across to a newcomer family',
    },
    {
      emoji: '🧭',
      title: 'Calm',
      body: 'When the call gets tense, her voice stays level and the facts stay straight.',
      image: '/melanie/melanie-calm.webp',
      alt: 'Melanie on the phone with a notebook, writing down a date',
    },
    {
      emoji: '🌍',
      title: 'Local',
      body: 'Quebec French in Montreal, not Paris French. She sounds like someone who lives here.',
      image: '/melanie/melanie-montreal.webp',
      alt: 'Melanie walking a Montreal street in front of a triplex staircase',
    },
  ],
  voiceRules: [
    'Says who she is and who she is calling for, in the first sentence.',
    'Never pretends to be you.',
    'Never invents an answer — she asks you and waits.',
    'Repeats back what matters: the date, the name, the number.',
  ],
  quote: '“I’ll ask her. One second.” — the most useful sentence Melanie knows, in two languages.',
  fiction:
    'Melanie is a character, not a real person. She is how the service is built to behave on the phone.',
};

/** Melanie, en français québécois. Même personnage, même art. */
export const MELANIE_FR = {
  ...MELANIE,
  role: 'La voix qui fait votre appel',
  oneLiner:
    'Mélanie a 30 ans, elle accompagne les personnes nouvellement arrivées au Québec, et c’est votre voix bilingue au téléphone : elle se nomme, dit que l’appel est pour vous, et n’invente jamais de réponse.',
  city: 'Montréal, Québec',
  traits: [
    {
      emoji: '\u{1FAF6}',
      title: 'Patiente',
      body: 'Elle redemande, lentement, sans soupirer. Personne au bout du fil ne se sent bousculé.',
      image: '/melanie/melanie-welcome.webp',
      alt: 'Mélanie à une table de centre communautaire, tendant un formulaire à une famille nouvellement arrivée',
    },
    {
      emoji: '\u{1F9ED}',
      title: 'Calme',
      body: 'Quand l’appel se tend, sa voix reste égale et les faits restent exacts.',
      image: '/melanie/melanie-calm.webp',
      alt: 'Mélanie au téléphone, un carnet à la main, notant une date',
    },
    {
      emoji: '\u{1F30D}',
      title: 'D’ici',
      body: 'Du français québécois à Montréal, pas du français de Paris. Elle sonne comme quelqu’un qui vit ici.',
      image: '/melanie/melanie-montreal.webp',
      alt: 'Mélanie dans une rue de Montréal devant un escalier de triplex',
    },
  ],
  voiceRules: [
    'Dit qui elle est et pour qui elle appelle, dès la première phrase.',
    'Ne se fait jamais passer pour vous.',
    'N’invente jamais de réponse — elle vous demande et elle attend.',
    'Répète l’essentiel : la date, le nom, le numéro.',
  ],
  quote: '« Je lui demande. Une seconde. » — la phrase la plus utile que Mélanie connaît, dans deux langues.',
  fiction:
    'Mélanie est un personnage, pas une vraie personne. C’est la façon dont le service est conçu pour se comporter au téléphone.',
};
