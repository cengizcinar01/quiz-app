import "./css/Header.css";
import logo from "../assets/devquiz-logo.png";
import arrowIcon from "../assets/arrow-right.svg";

export default function Header({ currentPage, changePage, resetQuiz }) {
  const handleQuizRestart = () => {
    resetQuiz();
    changePage("quiz");
  };

  const scrollToInfoSection = () => {
    const section = document.getElementById("info-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="DevQuiz Logo" />
        <ul className="main-nav">
          {currentPage === "quiz" || currentPage === "quizInfo" ? (
            <li>
              <a
                className="nav-link hover-text"
                onClick={() => changePage("home")}
              >
                Zurück zur Startseite
              </a>
            </li>
          ) : currentPage === "advertising" || currentPage === "result" ? (
            <>
              <li>
                <a
                  className="nav-link hover-text"
                  onClick={() => changePage("home")}
                >
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
                <a
                  className="nav-link hover-text"
                  onClick={scrollToInfoSection}
                >
                  Was ist DevQuiz?
                </a>
              </li>
              <li>
                <a
                  className="nav-link quiz-nav-btn hover-text"
                  onClick={() => changePage("quizInfo")}
                >
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
