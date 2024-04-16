import React from 'react';
import './css/home.css';

export default function Home({ changePage }) {
    return (
        <>
            <main>
                <div className="hero-section">
                    <div className="hero-text-section">
                        <h1 className="h1-text">
                            Wie gut bist Du <span className="h1-text-hero-span">wirklich?</span>
                        </h1>
                        <p className="p-text">Finde heraus, ob Du ein Coding-Profi bist.</p>

                        <div className="hero-btn-container">
                            <button className="btn-home-style" onClick={() => changePage('quiz')}>
                                Quiz Starten
                            </button>
                        </div>
                    </div>
                    <div className="hero-img"></div>
                </div>
            </main>
        </>
    );
}
