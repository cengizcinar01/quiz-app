import React from 'react';
import './css/quiz.css';

const Result = ({ results }) => {
    return (
        <>
            <div className="quiz-main">
                <div className="quiz-container">
                    <h1>Ergebnisse</h1>
                    <p>
                        Du hast {results.correctAnswers} von {results.totalQuestions} Fragen richtig beantwortet.
                    </p>
                    <p>Das entspricht einer Genauigkeit von {results.percentageCorrect.toFixed(2)}%.</p>
                </div>
            </div>
        </>
    );
};

export default Result;
