import React from 'react';
import './css/quiz.css';

function QuizInfo({ changePage, resetQuiz }) {
    const handleQuizRestart = () => {
        resetQuiz();
        changePage('quiz');
    };

    return (
        <>
            <div className="quiz-main">
                <div className="quiz-container">
                    <div className="quiz-info-page">
                        <h2 className="quiz-info-title">Willkommen zum DevQuiz!</h2>
                        <p className="quiz-info-text">
                            Stell dich der Herausforderung mit 10 spannenden Fragen zu Programmierung und Technik. Du hast nur 20 Sekunden pro Frage – schnelles Denken ist gefragt!
                        </p>
                        <p className="quiz-info-text">Bereit, dein Wissen zu testen? Klick auf 'Quiz starten' und zeig, was du kannst!</p>
                    </div>
                    <div className="button-container">
                        <button onClick={handleQuizRestart}>Quiz starten</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuizInfo;
