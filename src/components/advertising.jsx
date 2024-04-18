import { useEffect, useState } from "react";
import "./css/Quiz.css";

export default function AdvertisingPage({ results, changePage, resetQuiz }) {
  const handleQuizRestart = () => {
    resetQuiz();
    changePage("quiz");
  };
  const handleShowResult = () => {
    changePage("result");
    window.scrollTo(0, 0);
  };
  const [message, setMessage] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (results.percentageCorrect >= 80) {
      setMessage("Herzlichen Glückwunsch! Du hast hervorragend abgeschnitten.");
      setImageSrc("https://i.giphy.com/xT8qBsOjMOcdeGJIU8.webp");
    } else if (results.percentageCorrect >= 50) {
      setMessage("Gut gemacht! Du bist auf dem richtigen Weg.");
      setImageSrc("https://i.giphy.com/tyxovVLbfZdok.webp");
    } else {
      setMessage("Mach dir keine Sorgen, Übung macht den Meister.");
      setImageSrc("https://i.giphy.com/d2lcHJTG5Tscg.webp");
    }
  }, [results]);

  return (
    <>
      <div className="quiz-main">
        <div className="quiz-container">
          <div className="quiz-ad-container">
            {imageSrc && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={imageSrc}
                  alt="Ergebnisbild"
                  style={{
                    width: "60%",
                    height: "auto",
                    maxWidth: "480px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
            <p className="quiz-ad-text-result">
              Du hast {results.correctAnswers} von {results.totalQuestions}{" "}
              Fragen richtig beantwortet.
            </p>
            <p className="quiz-ad-text">{message}</p>

            <p className="quiz-ad-promotion-text">
              Starte deine Karriere als Full Stack Developer mit dem{" "}
              <a
                className="ad-link-text"
                href="https://talents.taktsoft.com/"
                target="_blank"
              >
                Taktsoft Campus Talents Bootcamp!
              </a>{" "}
              Praxisnahe Kurse und erfahrene Dozenten bereiten dich auf die
              Tech-Welt vor.
            </p>
            <a
              href="https://talents.taktsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://talents.taktsoft.com/img/logo-campus-talents.png"
                alt="Taktsoft Campus Talents Logo"
                style={{ width: "auto", height: "auto", maxWidth: "35%" }}
              />
            </a>
          </div>
          <div className="button-container ad-page">
            <button onClick={handleQuizRestart}>Neustarten</button>
            <button onClick={handleShowResult}>Dein Ergebnis</button>
          </div>
        </div>
      </div>
    </>
  );
}
