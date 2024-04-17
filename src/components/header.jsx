import React from 'react';
import './css/header.css';
import logo from '../assets/devquiz-logo.png';
import arrowIcon from '../assets/arrow-right.svg';

export default function Header({ currentPage, changePage, resetQuiz }) {
    const handleQuizRestart = () => {
        resetQuiz();
        changePage('quiz');
    };
    return (
        <>
            <header>
                <img className="logo" src={logo} alt="DevQuiz Logo" />
                <ul className="main-nav">
                    {currentPage === 'quiz' || currentPage === 'quizInfo' ? (
                        <li>
                            <a className="nav-link hover-text" onClick={() => changePage('home')}>
                                Zurück zur Startseite
                            </a>
                        </li>
                    ) : currentPage === 'advertising' || currentPage === 'result' ? (
                        <>
                            <li>
                                <a className="nav-link hover-text" onClick={() => changePage('home')}>
                                    Zurück zur Startseite
                                </a>
                            </li>
                            <li>
                                <a className="nav-link hover-text" onClick={handleQuizRestart}>
                                    Quiz wiederholen
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <a className="nav-link" onClick={() => changePage('home')}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#info-section">
                                    Was ist DevQuiz?
                                </a>
                            </li>
                            <li>
                                <a className="nav-link quiz-nav-btn" onClick={() => changePage('quizInfo')}>
                                    Zum Quiz
                                    <div className="arrow-right-icon-container">
                                        <img src={arrowIcon} alt="" />
                                    </div>
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </header>
        </>
    );
}
