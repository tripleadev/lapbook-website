import shuffle from 'lodash.shuffle';

export const questions = shuffle([
  {
    question: 'Jak nazywał się pierwszy przekład Biblii na język Grecki?',
    type: 'text',
    answer: 'septuaginta',
  },
  {
    question: 'W którym roku wydano Biblię Tysiąclecia?',
    type: 'radio',
    answers: ['1695 rok', '1971 rok', '1965 rok'],
    answer: '1965 rok',
  },
  {
    question: 'Czego symbolem jest liczba 6?',
    type: 'radio',
    answers: [
      'Doskonałość Boga, pełnia, całość, niebo i ziemia',
      'Niedoskonałość, poniżej świętej Bożej liczby',
      'Reprezentuje plemiona Izraela',
      'Reprezentuje świat, strony świata, kierunki wiatru, pory roku itp.',
    ],
    answer: 'Niedoskonałość, poniżej świętej Bożej liczby',
  },
  {
    question:
      'Dziedzina teologii zajmująca się konfliktem między ideą miłosiernego Boga a istnieniem zła. Jest to:',
    type: 'text',
    answer: 'teodycea',
  },
  {
    question: 'Tora to inna nazwa na:',
    type: 'radio',
    answers: ['Pięcioksiąg Mojżeszowy', 'Księgę Rodzaju', 'Biblię'],
    answer: 'Pięcioksiąg Mojżeszowy',
  },
  {
    question: 'Od czego pochodzi nazwa Apokalipsa?',
    type: 'radio',
    answers: [
      'Od hebrajskiego słowa אפוקליפסה i oznacza "koniec"',
      'Od greckiego słowa αποκάλυψη i oznacza "objawienie"',
    ],
    answer: 'Od greckiego słowa αποκάλυψη i oznacza "objawienie"',
  },
  {
    question: 'Z ilu psalmów składa się Księga Psalmów?',
    type: 'text',
    answer: '150',
  },
  {
    question: 'Motyw w sztuce i religii, pełen symboliki, skupiający się na przemijaniu to...',
    type: 'radio',
    answers: ['Memento mori', 'Carpe diem', 'Vanitas'],
    answer: 'Vanitas',
  },
  {
    question: 'Księga Koheleta jest uznawana za księgę...',
    type: 'radio',
    answers: ['proroczą', 'mądrościową', 'historyczną'],
    answer: 'mądrościową',
  },
  {
    question: 'Zbiór psalmów znajdujący się w Starym Testamencie to...',
    type: 'text',
    answer: 'psałterz',
  },
  {
    question: 'Znaczeniem liczby 666 NIE jest:',
    type: 'radio',
    answers: [
      'Imię rzymskiego cesarza Nerona',
      'Odniesienie do sześciuset lat, przez które żył Noe',
      'Ilość kilometrów dzielących Nazaret z Betlejem',
    ],
    answer: 'Ilość kilometrów dzielących Nazaret z Betlejem',
  },
  {
    question: 'Komu przypisuje się autorstwo Księgi Psalmów?',
    type: 'radio',
    answers: ['Jessemu', 'Dawidowi', 'Mojżeszowi'],
    answer: 'Dawidowi',
  },
  {
    question: 'Która księga została przyjęta do kanonu Biblii jako ostatnia?',
    type: 'radio',
    answers: ['Apokalipsa Świętego Jana', 'Księga Koheleta', 'Księga Psalmów'],
    answer: 'Apokalipsa Świętego Jana',
  },
  {
    question: 'Grecka nazwa Księgi Rodzaju to...',
    type: 'text',
    answer: 'genesis',
  },
  {
    question: 'Symbol Jezusa Chrystusa to...',
    type: 'text',
    answer: 'baranek',
  },
]);
