import React from 'react';
import './css/quiz.css';

export default function Quiz({ quizData, currentQuestionIndex, userSelection, handleOptionChange, handleNextQuestion }) {
    const question = quizData[currentQuestionIndex];

    return (
        <div className="quiz-main">
            <div className="quiz-container">
                <div className="quiz-action-container">
                    <div className="count-loader-container">
                        <span className="loader"></span>
                        <span className="countdown">20</span>
                    </div>
                    <h2 className="quiz-current-question">
                        Frage {currentQuestionIndex + 1} / {quizData.length}
                    </h2>
                    <p className="quiz-question">{question.question}</p>

                    {question.answer.map((answer, index) => (
                        <div className="answer-container" key={index}>
                            <input
                                type="radio"
                                id={`value-${index}`}
                                name="value-radio"
                                value={index}
                                checked={userSelection === index}
                                onChange={() => handleOptionChange(index)}
                            />
                            <label htmlFor={`value-${index}`}>{answer}</label>
                        </div>
                    ))}

                    <div className="button-container">
                        <button onClick={handleNextQuestion}>Weiter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
