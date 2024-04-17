const quizData = [
  {
    id: 1,
    question: "Wie selektiert man ein Element mit id=demo? ",
    answer: ["#demo", ".demo", "Demo", "*demo"],
    answerIndex: 0,
    myAnswer: null,
  },
  {
    id: 2,
    question: "Wofür steht CSS? ",
    answer: [
      "Computer Style Sheets ",
      "Cascading Style Sheets",
      "Colored Style Sheets ",
      "Creative Style Sheets ",
    ],
    answerIndex: 1,
    myAnswer: null,
  },
  {
    id: 3,
    question: "Welche CSS Syntax ist korrekt? ",
    answer: [
      "{body: color=black;} ",
      "tes{body; color: black;} ",
      "body {color: black;} ",
      "body: color=black; ",
    ],
    answerIndex: 2,
    myAnswer: null,
  },
  {
    id: 4,
    question: "Was ist der Defaultwert für position? ",
    answer: ["relative ", "fixed ", "absolute ", "Static"],
    answerIndex: 3,
    myAnswer: null,
  },
  {
    id: 5,
    question: "Wie definiert man die Hintergrundfarbe eines Elements in CSS? ",
    answer: [
      "background-color: red;",
      "color: red;",
      "text-color: red;",
      "bgcolor: red;  ",
    ],
    answerIndex: 0,
    myAnswer: null,
  },
  {
    id: 6,
    question:
      "Was ist die korrekte Syntax für das Einbetten eines Bildes in HTML? ",
    answer: [
      '<img src="bild.png" alt="Bild">',
      '<image href="bild.png" alt="Bild">',
      '<img alt="Bild">bild.png</img>',
      '<img link="bild.png" alt="Bild"> ',
    ],
    answerIndex: 0,
    myAnswer: null,
  },
  {
    id: 7,
    question:
      "HTML Welches Element wird verwendet, um einen Absatz zu erstellen? ",
    answer: ["<p>", "<div>", "<span>", "<h1>"],
    answerIndex: 0,
    myAnswer: null,
  },
  {
    id: 8,
    question: "Wie definiert man die Schriftgröße eines Elements in CSS? ",
    answer: ["font-weight", "font-style", "font-size", "font-family "],
    answerIndex: 2,
    myAnswer: null,
  },
];

export default quizData;
