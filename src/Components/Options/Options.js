import React from 'react';
import './Options.css'
const Options = ({ id, option, handlerUserAns }) => {
    console.log(option);
    return (
        <div>
            <div className='options-container'>

                <label onClick={() => handlerUserAns(option)} htmlFor={option}>
                    <input type="radio" name={id} id={option} />
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Options; 