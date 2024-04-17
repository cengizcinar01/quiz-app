import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Quiz from './components/quiz';
import QuizInfo from './components/QuizInfo';
import quizData from './data/quizData';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quizState, setQuizState] = useState(quizData);
    const [userSelection, setUserSelection] = useState(null);

    const handleOptionChange = (index) => {
        setUserSelection(index);
        const updatedQuizData = [...quizState];
        updatedQuizData[currentQuestionIndex].userAnswer = index;
        setQuizState(updatedQuizData);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizState.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserSelection(null);
        } else {
            setCurrentPage('home');
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserSelection(null);
    };

    return (
        <>
            <Header />
            {currentPage === 'home' && <Home changePage={setCurrentPage} />}
            {currentPage === 'quizInfo' && <QuizInfo changePage={setCurrentPage} />}
            {currentPage === 'quiz' && (
                <Quiz
                    quizData={quizState}
                    currentQuestionIndex={currentQuestionIndex}
                    userSelection={userSelection}
                    handleOptionChange={handleOptionChange}
                    handleNextQuestion={handleNextQuestion}
                    resetQuiz={resetQuiz}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
