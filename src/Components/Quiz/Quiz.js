import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Question from '../Question/Question';
const Quiz = () => {
    const quiz = useLoaderData();
    const questionList = quiz.data.questions;
    return (
        <div>
            {
                questionList.map(questions => <Question key={questions.id} questions={questions}></Question>)
            }
        </div>
    );
};

export default Quiz;