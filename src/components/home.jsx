import React from 'react';

export default function Home({ changePage }) {
    return (
        <>
            <div>
                <h1>Home Page</h1>
                <button onClick={() => changePage('quiz')}>Go to Quiz</button>
            </div>
        </>
    );
}
