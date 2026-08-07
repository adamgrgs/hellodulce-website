/** The recorded sample call used on the home page and /meet-dulce.
 *  The transcript below must match the audio word for word — regenerate both
 *  together. `file` is a path under /public; if it is missing, the component
 *  renders the transcript only, so the page never ships a broken player. */
export const SAMPLE = {
  file: '/audio/school-call-quebec-french.mp3',
  title: 'Hear a real call',
  fallbackTitle: 'The call, word for word',
  audioLabel: 'Recording of a Hello Dulce call to a Montreal school office, spoken in Quebec French',
  noSupport: 'Your browser cannot play audio.',
  download: 'Download the recording',
  sub: 'Recorded from a Hello Dulce call to a Montreal school office. The mother typed in Spanish; this is the audio the school heard, in Quebec French. Dulce introduces herself as a virtual interpreter calling on the mother’s behalf — she never pretends to be her.',
  durationLabel: '49 seconds',
  transcriptLangs: 'French spoken · Spanish written',
  lines: [
    {
      who: 'School office · French',
      said: 'École Saint-Laurent, bonjour!',
      tr: 'Escuela Saint-Laurent, ¡buenos días!',
      dulce: false,
    },
    {
      who: 'Dulce · French',
      said: "Bonjour! Je m'appelle Dulce, je suis une interprète virtuelle et j'appelle au nom de madame Ramírez, la mère de Sofía Ramírez, en cinquième année. Elle est en ligne avec moi et elle m'écrit en espagnol. Elle aimerait rencontrer l'enseignante de Sofía cette semaine, si c'est possible.",
      tr: 'Hola, me llamo Dulce, soy una intérprete virtual y llamo de parte de la señora Ramírez, la madre de Sofía Ramírez, de quinto grado. Está en línea conmigo y me escribe en español. Le gustaría reunirse con la maestra de Sofía esta semana, si es posible.',
      dulce: true,
    },
    {
      who: 'School office · French',
      said: "Ah, d'accord. Oui, bien sûr. Madame Tremblay est libre jeudi à quinze heures trente. Est-ce que ça convient?",
      tr: 'Ah, de acuerdo. Sí, claro. La señora Tremblay está libre el jueves a las 15:30. ¿Le conviene?',
      dulce: false,
    },
    {
      who: 'Dulce · French',
      said: "Un instant, je transmets la question à madame Ramírez... Elle me répond que jeudi quinze heures trente, c'est parfait. Est-ce qu'elle doit apporter quelque chose?",
      tr: 'Un momento, le transmito la pregunta a la señora Ramírez... Me responde que el jueves a las 15:30 es perfecto. ¿Debe llevar algo?',
      dulce: true,
    },
    {
      who: 'School office · French',
      said: "Juste le carnet de lecture, s'il vous plaît. Je note le rendez-vous.",
      tr: 'Solo el cuaderno de lectura, por favor. Anoto la cita.',
      dulce: false,
    },
    {
      who: 'Dulce · French',
      said: "C'est noté, je le lui écris tout de suite. Merci beaucoup, bonne journée!",
      tr: 'Anotado, se lo escribo ahora mismo. Muchas gracias, ¡buen día!',
      dulce: true,
    },
  ],
};


/** Same recording, French-language framing. The spoken lines are identical —
 *  they are the actual audio — and the caller's Spanish stays Spanish. */
export const SAMPLE_FR = {
  title: 'Écoutez un vrai appel',
  fallbackTitle: 'L’appel, mot pour mot',
  audioLabel: 'Enregistrement d’un appel Hello Dulce au secrétariat d’une école montréalaise, en français québécois',
  noSupport: 'Votre navigateur ne peut pas lire l’audio.',
  download: 'Télécharger l’enregistrement',
  sub: 'Enregistré lors d’un appel Hello Dulce au secrétariat d’une école de Montréal. La mère écrivait en espagnol; voici ce que l’école a entendu, en français québécois. Dulce se présente comme interprète virtuelle qui appelle au nom de la mère — elle ne se fait jamais passer pour elle.',
  durationLabel: '49 secondes',
  transcriptLangs: 'Parlé en français · lu en espagnol',
  lines: SAMPLE.lines.map((l) => ({
    ...l,
    who: l.who.replace('School office · French', 'Secrétariat · français').replace('Dulce · French', 'Dulce · français'),
  })),
};
