import React from 'react';
import './Options.css'
const Options = ({ options, handlerUserAns }) => {
    return (
        <div>
            <div className='options-container'>
                <div className='options-item'>
                    <input onClick={() => handlerUserAns()} type="radio" id="blue" />
                    <p> {options[0]}</p>
                </div>
                <div className='options-item'>
                    <input onClick={() => handlerUserAns()} type="radio" id="blue" />
                    <p>{options[1]}</p>
                </div>
                <div className='options-item'>
                    <input onClick={() => handlerUserAns()} type="radio" id="blue" />
                    <p>{options[2]}</p>
                </div>
                <div className='options-item'>
                    <input onClick={() => handlerUserAns()} type="radio" id="blue" />
                    <p>{options[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default Options; 