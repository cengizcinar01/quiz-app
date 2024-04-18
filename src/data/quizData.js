const quizData = [
  {
    id: 1,
    question: "Wie selektiert man ein Element mit id=demo? ",
    options: ["#demo", ".demo", "Demo", "*demo"],
    answerIndex: 0,
  },
  {
    id: 2,
    question: "Wofür steht CSS? ",
    options: [
      "Computer Style Sheets ",
      "Cascading Style Sheets",
      "Colored Style Sheets ",
      "Creative Style Sheets ",
    ],
    answerIndex: 1,
  },
  {
    id: 3,
    question: "Welche CSS Syntax ist korrekt? ",
    options: [
      "{body: color=black;} ",
      "tes{body; color: black;} ",
      "body {color: black;} ",
      "body: color=black; ",
    ],
    answerIndex: 2,
  },
  {
    id: 4,
    question: "Was ist der Defaultwert für position? ",
    options: ["relative ", "fixed ", "absolute ", "Static"],
    answerIndex: 3,
  },
  {
    id: 5,
    question: "Wie definiert man die Hintergrundfarbe eines Elements in CSS? ",
    options: [
      "background-color: red;",
      "color: red;",
      "text-color: red;",
      "bgcolor: red;  ",
    ],
    answerIndex: 0,
  },
  {
    id: 6,
    question:
      "Was ist die korrekte Syntax für das Einbetten eines Bildes in HTML? ",
    options: [
      '<img src="bild.png" alt="Bild">',
      '<image href="bild.png" alt="Bild">',
      '<img alt="Bild">bild.png</img>',
      '<img link="bild.png" alt="Bild"> ',
    ],
    answerIndex: 0,
  },
  {
    id: 7,
    question:
      "HTML Welches Element wird verwendet, um einen Absatz zu erstellen? ",
    options: ["<p>", "<div>", "<span>", "<h1>"],
    answerIndex: 0,
  },
  {
    id: 8,
    question: "Wie definiert man die Schriftgröße eines Elements in CSS? ",
    options: ["font-weight", "font-style", "font-size", "font-family "],
    answerIndex: 2,
  },
];

export default quizData;
