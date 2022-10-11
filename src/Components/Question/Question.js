import React from 'react';

const Question = ({ question }) => {
    console.log(question);
    return (
        <div>
            <h2>Length:{question.length}</h2>
        </div>
    );
};

export default Question;