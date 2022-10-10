import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className='blog-container'>
                <h2>What is purpose of react router?</h2>
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='blog-container'>
                <h2>How does context API work?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog-container'>
                <h2>What is the useRef hook?</h2>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
            </div>
        </div>
    );
};

export default Blog;