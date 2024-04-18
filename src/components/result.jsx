import { useEffect } from 'react';
import './css/quiz.css';

const Result = ({ quizData, changePage, resetQuiz }) => {
    const handleQuizRestart = () => {
        resetQuiz();
        changePage('quiz');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="quiz-main">
            <div className="quiz-container">
                {quizData.map((item, index) => (
                    <div className="result-container" key={index}>
                        <h3 className="result-question-text">Frage {index + 1}</h3>
                        <h3 className="result-question-text">{item.question}</h3>
                        <ul>
                            {item.answer.map((answer, answerIndex) => (
                                <li
                                    className="result-answer-style"
                                    key={answerIndex}
                                    style={{
                                        color: answerIndex === item.answerIndex ? 'green' : answerIndex === item.myAnswer ? 'red' : 'black',
                                        fontWeight: answerIndex === item.answerIndex ? 'bold' : 'normal',
                                    }}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="button-container ad-page">
                    <button onClick={handleQuizRestart}>Neustarten</button>
                </div>
            </div>
        </div>
    );
};

export default Result;
