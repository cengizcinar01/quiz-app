import React from 'react';

export default function Quiz({ changePage }) {
    return (
        <>
            <div>
                <h1>Quiz Page</h1>
                <button onClick={() => changePage('home')}>Go to Home</button>
            </div>
        </>
    );
}
