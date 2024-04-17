import React from "react";

export default function Result({ quizData, myAnswers }) {
  const correctAnswers = quizData.filter((question, index) => {
    return question.correctAnswer === myAnswers[index];
  }).length;

  const totalQuestions = quizData.length;
  const performance = (correctAnswers / totalQuestions) * 100;

  let performanceCategory = "";
  let performanceMessage = "";

  if (performance >= 80) {
    performanceCategory = "Sehr gut";
    performanceMessage =
      "Herzlichen Glückwunsch! Du hast die maximale Punktzahl erreicht und das Quiz mit Bravour gemeistert. Dein Wissen und deine Fähigkeiten haben sich ausgezahlt. Weiter so!";
  } else if (performance >= 50) {
    performanceCategory = "Gut";
    performanceMessage =
      "Großartige Leistung! Mit " +
      correctAnswers +
      " von " +
      totalQuestions +
      " richtigen Antworten hast du ein solides Ergebnis erzielt. Du bist auf dem richtigen Weg und zeigst ein gutes Verständnis für die gestellten Fragen. Mach weiter so und bleib dran!";
  } else {
    performanceCategory = "Verbesserungswürdig";
    performanceMessage =
      "Danke, dass du am Quiz teilgenommen hast! Es ist ganz natürlich, nicht alle Fragen richtig zu beantworten. Dies ist eine Gelegenheit, um zu lernen und zu verbessern.";
  }

  const questionList = quizData.map((question, index) => {
    const isCorrect = myAnswers[index] === question.correctAnswer;
    return (
      <div key={index}>
        <p>{question.question}</p>
        <ul>
          {question.answers.map((answer, answerIndex) => (
            <li
              key={answerIndex}
              style={{ color: isCorrect ? "green" : "red" }}
            >
              {answer}
              {isCorrect && <span> - Richtige Antwort</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Ergebnis</h2>
      <p className="result-text">
        Du hast {correctAnswers} von {totalQuestions} Fragen richtig
        beantwortet.
      </p>
      <p className="result-text">
        Deine Leistung beträgt {performance.toFixed(2)}%.
      </p>
      <p className="result-text">
        Deine Leistungskategorie: {performanceCategory}
      </p>
      <p className="result-text">{performanceMessage}</p>
      <div className="question-list">{questionList}</div>
    </div>
  );
}
