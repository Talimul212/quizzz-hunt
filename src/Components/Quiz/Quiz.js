import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Question from '../Question/Question';
import './Quiz.css'
const Quiz = () => {
    const quiz = useLoaderData();
    const quizName = quiz.data.name;
    const questionList = quiz.data.questions;
    return (
        <div>
            <h2 className='quiz-title'>Quiz Of {quizName}</h2>
            {
                questionList.map(questions => <Question key={questions.id} questions={questions}></Question>)
            }
        </div>
    );
};

export default Quiz;