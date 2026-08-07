/** The recorded sample call used on the home page and the schools use case.
 *  `file` is a path under /public. If the file is missing the component renders
 *  the transcript only, so the page never ships a broken player. */
export const SAMPLE = {
  file: '/audio/school-call-quebec-french.mp3',
  title: 'Hear a real call',
  sub: 'Recorded from a Hello Dulce call to a Montreal school office. The mother typed in Spanish; this is the audio the school heard, in Quebec French.',
  durationLabel: '35 seconds',
  transcriptLangs: 'French spoken · Spanish written',
  lines: [
    { who: 'School office · French', said: 'École Saint-Laurent, bonjour!', tr: 'Escuela Saint-Laurent, ¡buenos días!', dulce: false },
    {
      who: 'Dulce · French',
      said: "Bonjour! J'appelle de la part de madame Ramírez, la mère de Sofía Ramírez, en cinquième année. Elle aimerait rencontrer l'enseignante de Sofía cette semaine, si c'est possible.",
      tr: 'Hola, llamo de parte de la señora Ramírez, la madre de Sofía Ramírez, de quinto grado. Le gustaría reunirse con la maestra de Sofía esta semana, si es posible.',
      dulce: true,
    },
    {
      who: 'School office · French',
      said: 'Oui, bien sûr. Madame Tremblay est libre jeudi à quinze heures trente. Est-ce que ça convient?',
      tr: 'Sí, claro. La señora Tremblay está libre el jueves a las 15:30. ¿Le conviene?',
      dulce: false,
    },
    {
      who: 'Dulce · French',
      said: "Un instant, je vérifie avec elle... Oui, jeudi quinze heures trente, c'est parfait. Est-ce qu'elle doit apporter quelque chose?",
      tr: 'Un momento, lo confirmo con ella... Sí, el jueves a las 15:30 es perfecto. ¿Debe llevar algo?',
      dulce: true,
    },
    {
      who: 'School office · French',
      said: "Juste le carnet de lecture, s'il vous plaît. Je note le rendez-vous.",
      tr: 'Solo el cuaderno de lectura, por favor. Anoto la cita.',
      dulce: false,
    },
    { who: 'Dulce · French', said: 'Merci beaucoup. Bonne journée!', tr: 'Muchas gracias. ¡Buen día!', dulce: true },
  ],
};
