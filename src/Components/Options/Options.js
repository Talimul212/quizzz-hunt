import React from 'react';
import './Options.css'
const Options = ({ options, handlerUserAns }) => {
    return (
        <div className='options-container'>
            <div className='options-item'>
                <input onClick={() => handlerUserAns()} type="radio" id="blue"></input>
                <p>{options[0]}</p>
            </div>
            <div className='options-item'>
                <input onClick={() => handlerUserAns()} type="radio" id="blue"></input>
                <p>{options[1]}</p>
            </div>
            <div className='options-item'>
                <input onClick={() => handlerUserAns()} type="radio" id="blue"></input>
                <p>{options[2]}</p>
            </div>
            <div className='options-item'>
                <input onClick={() => handlerUserAns()} type="radio" id="blue"></input>
                <p>{options[3]}</p>
            </div>
        </div>
    );
};

export default Options; 