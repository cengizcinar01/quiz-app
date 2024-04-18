import { useState, useEffect } from "react";
import "./css/quiz.css";

export default function Quiz({
  quizData,
  currentQuestionIndex,
  onOptionChange,
  onNextQuestion,
  onResetQuiz,
}) {
  const [countdown, setCountdown] = useState(20);
  const [enableTransition, setEnableTransition] = useState(true);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const question = quizData[currentQuestionIndex];

  const isAnswerSelected =
    quizData[currentQuestionIndex].myAnswerIndex !== null;

  const buttonStyle = isAnswerSelected
    ? {}
    : { background: "gray", color: "white", cursor: "not-allowed" };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeoutReached(true);
    }
  }, [countdown]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setEnableTransition(false);
      setCountdown(20);
      setTimeoutReached(false);

      setTimeout(() => {
        setEnableTransition(true);
      }, 50);
    }
    onNextQuestion();
  };

  const handleRestart = () => {
    setCountdown(20);
    setTimeoutReached(false);
    onResetQuiz();
  };

  const loaderStyle = {
    width: `${(1 - countdown / 20) * 100}%`,
    background: "rgb(255, 255, 255)",
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    transition: enableTransition ? "width 1s linear" : "none",
  };

  if (timeoutReached) {
    return (
      <div className="quiz-main">
        <div className="quiz-container">
          <div className="quiz-info-page">
            <h2 className="quiz-info-title">😭</h2>
            <h2 className="quiz-info-title">Zeit abgelaufen!</h2>
            <p className="quiz-info-text">
              Schade, die Zeit ist um. Möchtest du es noch einmal versuchen?
            </p>
            <div className="button-container">
              <button onClick={handleRestart}>Neustart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="quiz-main">
        <div className="quiz-container">
          <div className="quiz-action-container">
            <div className="count-loader-container">
              <span className="loader">
                <span style={loaderStyle}></span>
              </span>
              <span className="countdown">{countdown}</span>
            </div>
            <h2 className="quiz-current-question">
              Frage {currentQuestionIndex + 1} / {quizData.length}
            </h2>
            <p className="quiz-question">{question.question}</p>

            {question.options.map((option, index) => (
              <div className="answer-container" key={index}>
                <input
                  type="radio"
                  id={`value-${index}`}
                  name="value-radio"
                  value={index}
                  checked={
                    quizData[currentQuestionIndex].myAnswerIndex === index
                  }
                  onChange={() => onOptionChange(index)}
                />
                <label htmlFor={`value-${index}`}>{option}</label>
              </div>
            ))}

            <div className="button-container">
              <button
                onClick={handleNextQuestion}
                disabled={!isAnswerSelected}
                style={buttonStyle}
              >
                {currentQuestionIndex < quizData.length - 1
                  ? "Weiter"
                  : "Fertig"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
