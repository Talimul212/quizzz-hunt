import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    let activeStyle = {
        color: "rgb(14, 239, 255)"
    };
    return (
        <nav className='header'>
            <div>
                <h1>Quizze!-Hunt</h1>
            </div>
            <div>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="/">Home</NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="/statistics">Statistics</NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to="/blog">Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;