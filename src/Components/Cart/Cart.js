import React from 'react';
import './Cart.css'
const Cart = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className='cart-container'>
            <div className='cart-item'>
                <img src={logo} alt=''></img>
                <p><b>Name:</b> {name}</p>
                <p><b>Total:</b> {total}</p>
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Cart;