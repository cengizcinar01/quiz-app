import { useEffect } from "react";
import "./css/Quiz.css";

export default function Result({ quizData, changePage, resetQuiz }) {
  const handleQuizRestart = () => {
    resetQuiz();
    changePage("quiz");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quiz-main">
      <div className="quiz-container">
        {quizData.map((item, index) => {
          const isCorrect = item.answerIndex === item.myAnswerIndex;
          return (
            <div className="result-container" key={index}>
              <h3 className="result-question-text">
                Frage {index + 1}:{" "}
                {isCorrect ? (
                  <span style={{ color: "green" }}>(richtig)</span>
                ) : (
                  <span style={{ color: "red" }}>(leider falsch)</span>
                )}
              </h3>
              <h3 className="result-question-text">{item.question}</h3>
              <ul>
                {item.options.map((option, answerIndex) => (
                  <li
                    className="result-answer-style"
                    key={answerIndex}
                    style={{
                      color:
                        answerIndex === item.answerIndex
                          ? "green"
                          : answerIndex === item.myAnswerIndex
                          ? "red"
                          : "black",
                      fontWeight:
                        answerIndex === item.answerIndex ? "bold" : "normal",
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="button-container ad-page">
          <button onClick={handleQuizRestart}>Neustarten</button>
        </div>
      </div>
    </div>
  );
}
