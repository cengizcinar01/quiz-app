import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import QuizInfo from "./components/QuizInfo";
import Quiz from "./components/quiz";
import Advertising from "./components/advertising";
import Result from "./components/result";
import quizData from "./data/quizData";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useState(quizData);

  const handleOptionChange = (index) => {
    const updatedQuizData = [...quizState];
    updatedQuizData[currentQuestionIndex].myAnswerIndex = index;
    setQuizState(updatedQuizData);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizState.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentPage("advertising");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizState(
      quizState.map((question) => {
        return {
          ...question,
          myAnswerIndex: null,
        };
      })
    );
  };

  const calculateResults = () => {
    const correctAnswers = quizState.filter(
      (q) => q.answerIndex === q.myAnswerIndex
    ).length;
    const totalQuestions = quizState.length;
    const percentageCorrect = (correctAnswers / totalQuestions) * 100;

    return {
      correctAnswers,
      totalQuestions,
      percentageCorrect,
    };
  };
  const results = calculateResults();

  return (
    <>
      <Header
        currentPage={currentPage}
        changePage={setCurrentPage}
        resetQuiz={resetQuiz}
      />
      {currentPage === "home" && <Home changePage={setCurrentPage} />}
      {currentPage === "quizInfo" && (
        <QuizInfo changePage={setCurrentPage} resetQuiz={resetQuiz} />
      )}
      {currentPage === "quiz" && (
        <Quiz
          quizData={quizState}
          currentQuestionIndex={currentQuestionIndex}
          onOptionChange={handleOptionChange}
          onNextQuestion={handleNextQuestion}
          onResetQuiz={resetQuiz}
        />
      )}
      {currentPage === "advertising" && (
        <Advertising
          results={results}
          changePage={setCurrentPage}
          resetQuiz={resetQuiz}
        />
      )}
      {currentPage === "result" && (
        <Result
          results={results}
          quizData={quizState}
          changePage={setCurrentPage}
          resetQuiz={resetQuiz}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
