import "./css/Home.css";

export default function Home({ changePage }) {
  return (
    <>
      <main>
        <div className="hero-section">
          <div className="hero-text-section">
            <h1 className="h1-text">
              Wie gut bist Du{" "}
              <span className="h1-text-hero-span">wirklich?</span>
            </h1>
            <p className="p-text">Finde heraus, ob Du ein Coding-Profi bist.</p>
            <div className="hero-btn-container">
              <button
                className="btn-home-style"
                onClick={() => changePage("quizInfo")}
              >
                Quiz Starten
              </button>
            </div>
          </div>
          <div className="hero-img"></div>
        </div>
        <div className="info-section" id="info-section">
          <div className="question-img"></div>
          <div className="info-text-section">
            <h1 className="h1-text">
              Was ist <span className="h1-text-hero-span">DevQuiz?</span>
            </h1>
            <p className="p-text">
              Entdecke, teste und verbessere Deine Entwicklerfähigkeiten mit
              anspruchsvollen Fragen zu verschiedenen Programmiersprachen und
              Technologien.
            </p>
            <div className="hero-btn-container">
              <button
                className="btn-home-style"
                onClick={() => changePage("quizInfo")}
              >
                Starte Dein Quiz
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
