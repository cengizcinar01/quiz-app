import React from 'react';
import './css/header.css';
import logo from '../assets/devquiz-logo.png';
import arrowIcon from '../assets/arrow-right.svg';

export default function Header() {
    return (
        <>
            <header>
                <img className="logo" src={logo} alt="" />
                <ul className="main-nav">
                    <li>
                        <a className="nav-link" href="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#info-section">
                            Was ist DevQuiz?
                        </a>
                    </li>
                    <li>
                        <a className="nav-link quiz-nav-btn" href="">
                            Zum Quiz
                            <div className="arrow-right-icon-container">
                                <img src={arrowIcon} alt="" />
                            </div>
                        </a>
                    </li>
                </ul>
            </header>
        </>
    );
}
