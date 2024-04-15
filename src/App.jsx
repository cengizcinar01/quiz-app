import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Quiz from './components/quiz';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <>
            <Header />
            {currentPage === 'home' && <Home changePage={setCurrentPage} />}
            {currentPage === 'quiz' && <Quiz changePage={setCurrentPage} />}
            <Footer />
        </>
    );
}

export default App;
