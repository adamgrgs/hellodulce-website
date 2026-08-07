/** Dulce — the character behind the product. Deliberately short.
 *  Adam's call (2026-08-07): the old profile read like a biography and buried the
 *  point. Keep it to one line of who she is + three things you feel on the call
 *  + four rules. If you are tempted to add lore, don't. */
export const DULCE = {
  name: 'Dulce',
  role: 'The voice that makes your call',
  oneLiner:
    'Dulce is your bilingual friend on the phone: she introduces herself, says the call is for you, and never invents an answer.',
  city: 'Montreal, Quebec',
  pronouns: 'she/her',
  images: {
    hero: '/dulce/dulce-hero.webp',
    avatar: '/dulce/dulce-avatar.webp',
    kids: '/dulce/dulce-kids.webp',
    lifeguard: '/dulce/dulce-lifeguard.webp',
    map: '/dulce/dulce-map.webp',
  },
  traits: [
    {
      emoji: '🫶',
      title: 'Patient',
      body: 'She will ask again, slowly, without a sigh. Nobody on the line feels rushed.',
      image: '/dulce/dulce-kids.webp',
      alt: 'Dulce kneeling down to a child’s eye level with a picture book',
    },
    {
      emoji: '🛟',
      title: 'Calm',
      body: 'When the call gets tense, her voice stays level and the facts stay straight.',
      image: '/dulce/dulce-lifeguard.webp',
      alt: 'Dulce on a lifeguard chair with a rescue tube on her lap',
    },
    {
      emoji: '🌍',
      title: 'Local',
      body: 'Quebec French in Montreal, not Paris French. She sounds like someone who lives here.',
      image: '/dulce/dulce-map.webp',
      alt: 'Dulce sitting over a paper world map, pointing at it',
    },
  ],
  voiceRules: [
    'Says who she is and who she is calling for, in the first sentence.',
    'Never pretends to be you.',
    'Never invents an answer — she asks you and waits.',
    'Repeats back what matters: the date, the name, the number.',
  ],
  quote: '“I’ll ask her. One second.” — the most useful sentence Dulce knows, in two languages.',
  fiction:
    'Dulce is a character, not a real person. She is how the service is built to behave on the phone.',
};

/** Dulce, en français québécois. Même personnage, même art. */
export const DULCE_FR = {
  ...DULCE,
  role: 'La voix qui fait votre appel',
  oneLiner:
    'Dulce, c’est votre amie bilingue au téléphone : elle se nomme, dit que l’appel est pour vous, et n’invente jamais de réponse.',
  city: 'Montréal, Québec',
  traits: [
    {
      emoji: '\u{1FAF6}',
      title: 'Patiente',
      body: 'Elle redemande, lentement, sans soupirer. Personne au bout du fil ne se sent bousculé.',
      image: '/dulce/dulce-kids.webp',
      alt: 'Dulce accroupie à la hauteur d’un enfant, avec un livre d’images',
    },
    {
      emoji: '\u{1F6DF}',
      title: 'Calme',
      body: 'Quand l’appel se tend, sa voix reste égale et les faits restent exacts.',
      image: '/dulce/dulce-lifeguard.webp',
      alt: 'Dulce sur une chaise de sauveteuse, la bouée sur les genoux',
    },
    {
      emoji: '\u{1F30D}',
      title: 'D’ici',
      body: 'Du français québécois à Montréal, pas du français de Paris. Elle sonne comme quelqu’un qui vit ici.',
      image: '/dulce/dulce-map.webp',
      alt: 'Dulce assise au-dessus d’une carte du monde en papier, la pointant',
    },
  ],
  voiceRules: [
    'Dit qui elle est et pour qui elle appelle, dès la première phrase.',
    'Ne se fait jamais passer pour vous.',
    'N’invente jamais de réponse — elle vous demande et elle attend.',
    'Répète l’essentiel : la date, le nom, le numéro.',
  ],
  quote: '« Je lui demande. Une seconde. » — la phrase la plus utile que Dulce connaît, dans deux langues.',
  fiction:
    'Dulce est un personnage, pas une vraie personne. C’est la façon dont le service est conçu pour se comporter au téléphone.',
};
