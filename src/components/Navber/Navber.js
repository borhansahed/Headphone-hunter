import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'
const Navber = () => {
    return (
        <div className='nav-container'>
          <div className='nav-style'>
            <Link to="/home">HOME</Link>
            <Link to="/review">REVIEW</Link>
            <Link to="/dashboard">DASHBOARD</Link>
            <Link to="/blogs">BLOGS</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </div>
    );
};

export default Navber;