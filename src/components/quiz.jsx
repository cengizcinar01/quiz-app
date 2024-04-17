import React, { useState, useEffect } from 'react';
import './css/quiz.css';

export default function Quiz({ quizData, currentQuestionIndex, userSelection, handleOptionChange, handleNextQuestion }) {
    const [countdown, setCountdown] = useState(20);
    const [enableTransition, setEnableTransition] = useState(true);
    const question = quizData[currentQuestionIndex];
    const isAnswerSelected = userSelection !== null;

    const buttonStyle = isAnswerSelected ? {} : { background: 'gray', color: 'white', cursor: 'not-allowed' };

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleNextQuestionModified = () => {
        setEnableTransition(false);
        setCountdown(20);

        setTimeout(() => {
            setEnableTransition(true);
        }, 50);

        handleNextQuestion();
    };

    const loaderStyle = {
        width: `${(1 - countdown / 20) * 100}%`,
        background: 'rgb(255, 255, 255)',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        transition: enableTransition ? 'width 1s linear' : 'none',
    };

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
                            <button onClick={handleNextQuestionModified} disabled={!isAnswerSelected} style={buttonStyle}>
                                Weiter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
