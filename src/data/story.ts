/** The founder story. Adam's brief (2026-08-10, verbatim): he came to Montreal as an
 *  immigrant in 2012 and struggled to contact the government and other places in Quebec
 *  because his French was not good; he always needed someone to sit with him and
 *  interpret over the phone.
 *
 *  RULE: everything here must trace back to that brief. Do not add invented biography
 *  (no employer names, no specific offices, no dialogue that did not happen). Where a
 *  detail is illustrative rather than reported, keep it universal to newcomers rather
 *  than specific to Adam. If Adam supplies more detail, add it here — not inline in the
 *  page. Same rule as MELANIE: if you are tempted to add lore, don't. */

export const STORY = {
  year: 2012,
  founderFirstName: 'Adam',
  kicker: 'Our story',
  h1Lead: 'I moved to Montreal in 2012.',
  h1Accent: 'The phone was the hardest part.',
  lede:
    'Montreal Reception exists because of a problem I could not solve for myself for years: I could live in French, slowly, in person — but I could not hold my own on the phone.',

  /** Body sections. Short paragraphs; this reads as a person talking, not a brand. */
  sections: [
    {
      h: 'In person you can point. On the phone you cannot.',
      p: [
        'When I arrived, I could get through a counter visit. You point, you show a document, you read the room, the other person slows down for you. Half of understanding is not language at all.',
        'The phone strips all of that away. No face, no paper to point at, no time. Someone answers quickly, says a sentence you half-catch, and waits. And the calls that matter most — government offices, schools, appointments, anything with a deadline — are the ones that happen by phone.',
      ],
    },
    {
      h: 'So I needed a person every time.',
      p: [
        'For years my answer was to ask someone. A friend, a colleague, whoever was nearby and spoke better French than I did. I would explain the situation, hand over my phone or sit next to them while they spoke for me, and then ask afterwards what had been agreed.',
        'It worked. It also meant every ordinary errand cost me a favour, and it meant waiting until that person was free. Some calls I put off for weeks because asking felt like too much. A few I never made at all.',
      ],
    },
    {
      h: 'The part nobody talks about.',
      p: [
        'Needing an interpreter for a five-minute phone call is not just inconvenient, it is diminishing. You are a capable adult — with a job, with a family, with opinions — reduced to sitting quietly while somebody else speaks in your name and then summarises it back to you.',
        'What I wanted was not a translation app. I had those. Typing into one while a real person waits on the line is worse than useless. I wanted what I actually had on the good days: someone fluent, on my side, who would make the call with me and keep me in it.',
      ],
    },
    {
      h: 'That is what we built.',
      p: [
        'Montreal Reception is the person I used to have to ask for. You write what you want to say in your language. Melanie dials, introduces herself as calling on your behalf, and speaks for you in theirs — a real voice, at a normal pace, that the other person does not have to be patient with.',
        'You stay on the call the whole time. Every sentence comes back to you as text in your language while it is still happening, so you can change your mind, add a detail, or push back — and Melanie says it. Nobody speaks in your name without you hearing it.',
        'You are not asking anyone for a favour. You do not wait until someone is free. And when the call ends you keep what was agreed in writing, in your language, which is the part I never had.',
      ],
    },
  ],

  /** Pulled out as a quote block. */
  pull:
    'I did not want to be translated. I wanted to be able to make the call.',

  closing: {
    h: 'If this is your situation right now',
    p: 'Then you already know the specific feeling of looking at a phone number you need to call and deciding to do it tomorrow. That is the thing we are trying to end.',
  },
} as const;

/** Quebec French. Written, not machine-translated: same voice, tu-free, québécois register. */
export const STORY_FR = {
  kicker: 'Notre histoire',
  h1Lead: 'Je suis arrivé à Montréal en 2012.',
  h1Accent: 'Le téléphone, c’était le plus dur.',
  lede:
    'Montreal Reception existe à cause d’un problème que je n’ai pas réussi à régler pendant des années : j’arrivais à vivre en français, lentement, en personne — mais au téléphone, je ne tenais pas le coup.',
  sections: [
    {
      h: 'En personne, on peut pointer. Au téléphone, non.',
      p: [
        'En arrivant, j’étais capable de passer au comptoir. On pointe, on montre un papier, on lit le visage de l’autre, la personne ralentit pour nous. La moitié de la compréhension n’a rien à voir avec la langue.',
        'Le téléphone enlève tout ça. Pas de visage, pas de document à montrer, pas de temps. Quelqu’un répond vite, dit une phrase qu’on saisit à moitié, et attend. Et les appels les plus importants — les services publics, l’école, les rendez-vous, tout ce qui a une date limite — se font justement par téléphone.',
      ],
    },
    {
      h: 'Alors il me fallait quelqu’un, chaque fois.',
      p: [
        'Pendant des années, ma solution a été de demander. Un ami, un collègue, la personne disponible qui parlait mieux français que moi. J’expliquais la situation, je passais mon téléphone ou je m’assoyais à côté pendant qu’on parlait pour moi, puis je demandais après coup ce qui avait été entendu.',
        'Ça fonctionnait. Ça voulait aussi dire que chaque démarche ordinaire me coûtait un service, et qu’il fallait attendre que la personne soit libre. Certains appels, je les ai remis pendant des semaines parce que demander était devenu trop lourd. Quelques-uns, je ne les ai jamais faits.',
      ],
    },
    {
      h: 'La partie dont on ne parle pas.',
      p: [
        'Avoir besoin d’un interprète pour un appel de cinq minutes, ce n’est pas juste embêtant, c’est diminuant. On est un adulte capable — avec un emploi, une famille, des opinions — et on se retrouve assis en silence pendant que quelqu’un d’autre parle en notre nom, puis nous résume le tout.',
        'Ce que je voulais, ce n’était pas une application de traduction. J’en avais. Taper dans une appli pendant qu’une vraie personne attend sur la ligne, c’est pire qu’inutile. Je voulais ce que j’avais les bons jours : quelqu’un qui parle bien, de mon bord, qui fait l’appel avec moi et qui me garde dedans.',
      ],
    },
    {
      h: 'C’est ça qu’on a bâti.',
      p: [
        'Montreal Reception, c’est la personne que je devais demander avant. Vous écrivez ce que vous voulez dire dans votre langue. Melanie compose, se présente comme appelant en votre nom, et parle pour vous dans la leur — une vraie voix, à un rythme normal, avec laquelle l’autre personne n’a pas besoin d’être patiente.',
        'Vous restez sur l’appel du début à la fin. Chaque phrase vous revient par écrit dans votre langue pendant que ça se passe, donc vous pouvez changer d’idée, ajouter un détail ou répliquer — et Melanie le dit. Personne ne parle en votre nom sans que vous l’entendiez.',
        'Vous ne demandez de service à personne. Vous n’attendez pas que quelqu’un soit libre. Et à la fin de l’appel, vous gardez par écrit ce qui a été convenu, dans votre langue — la partie que je n’ai jamais eue.',
      ],
    },
  ],
  pull: 'Je ne voulais pas être traduit. Je voulais être capable de faire l’appel.',
  closing: {
    h: 'Si c’est votre situation en ce moment',
    p: 'Alors vous connaissez déjà le sentiment précis : regarder un numéro qu’il faut appeler et décider que ce sera demain. C’est exactement ce qu’on veut faire disparaître.',
  },
} as const;
