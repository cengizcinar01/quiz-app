import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import QuizInfo from "./components/QuizInfo";
import Quiz from "./components/Quiz";
import Advertising from "./components/Advertising";
import Result from "./components/Result";
import quizData from "./data/quizData";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizState, setQuizState] = useState(
    quizData.map((question) => {
      return {
        ...question,
        myAnswerIndex: null,
      };
    })
  );

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
