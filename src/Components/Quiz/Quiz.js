import React from 'react';
import { useLoaderData } from 'react-router-dom'
const Quiz = () => {
    const quiz = useLoaderData();
    const questionList = quiz.data.questions;
    console.log(questionList);
    return (
        <div>
            {/* {
                quiz.data.questions.map(question => <Quiz question={question}></Quiz>)
            } */}
        </div>
    );
};

export default Quiz;