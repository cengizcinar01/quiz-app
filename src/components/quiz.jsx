import React from 'react';
import './css/quiz.css';

export default function Quiz({ changePage }) {
    return (
        <>
            <div className="quiz-main">
                <div className="quiz-container">
                    <div className="quiz-action-container">
                        <div className="count-loader-container">
                            <span class="loader"></span>
                            <span className="countdown">20</span>
                        </div>
                        <h2 className="quiz-current-question">Frage 1 / 10</h2>
                        <p className="quiz-question">Wie selektiert man ein Element mit id=demo?</p>
                        <div class="answer-container">
                            <input type="radio" id="value-1" name="value-radio" value="value-1" />
                            <label for="value-1">#demo</label>
                            <input type="radio" id="value-2" name="value-radio" value="value-2" />
                            <label for="value-2">.demo</label>
                            <input type="radio" id="value-3" name="value-radio" value="value-3" />
                            <label for="value-3">Demo</label>
                            <input type="radio" id="value-4" name="value-radio" value="value-4" />
                            <label for="value-4">*demo</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
