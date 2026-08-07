/** The recorded sample call used on the home page and /meet-dulce.
 *  The transcript below must match the audio word for word — regenerate both
 *  together. `file` is a path under /public; if it is missing, the component
 *  renders the transcript only, so the page never ships a broken player. */
export const SAMPLE = {
  file: '/audio/school-call-quebec-french.mp3',
  title: 'Hear a real call',
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
