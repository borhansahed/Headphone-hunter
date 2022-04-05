import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container' >
            <h1 className='text-4xl font-black text-center mt-10'> ! WHAT IS CONTEXT API ?</h1>
            <p>Context Api is opposite of props drilling ! Context Api can pass any data from anywhere ! Context Api is very useful when we have many component but we need to give data in one spcific component !</p>
            <h1 className='text-4xl font-black text-center mt-10'> !! WHAT SEMANTIC TAG ?</h1>
            <p>Semantic tag is  Introduced in Html5 ! Semantic tag defined the content of website ! Ex: !header! anyone can will be understand this the website header! </p>
        </div>
    );
};

export default Blogs;