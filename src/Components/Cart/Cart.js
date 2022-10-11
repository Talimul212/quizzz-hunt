import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='cart-container'>
            <div className='cart-item'>
                <img src={logo} alt=''></img>
                <p><b>Name:</b> {name}</p>
                <p><b>Total:</b> {total}</p>
                <button><Link to={`/home/quiz/${id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default Cart;