import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const quizList = useLoaderData();
    
    return (
        <div>
            <div className='heading'>
                <h2>Get Started</h2>

                <p>
                    Learn to design and build professional website
                </p>
            </div>
            <div className='home-container'>
                <div className='cart-container'>
                    {
                        quizList.data.map(quiz => <Cart key={quiz.id} quiz={quiz}></Cart>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Home;