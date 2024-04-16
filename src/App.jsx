import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Quiz from './components/quiz';
import quizData from './data/quizData';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userSelection, setUserSelection] = useState(null);

    const handleOptionChange = (index) => {
        setUserSelection(index);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserSelection(null);
        } else {
            setCurrentPage('home');
        }
    };

    return (
        <>
            <Header />
            {currentPage === 'home' && <Home changePage={setCurrentPage} />}
            {currentPage === 'quiz' && (
                <Quiz
                    quizData={quizData}
                    currentQuestionIndex={currentQuestionIndex}
                    userSelection={userSelection}
                    handleOptionChange={handleOptionChange}
                    handleNextQuestion={handleNextQuestion}
                />
            )}
            <Footer />
        </>
    );
}

export default App;
