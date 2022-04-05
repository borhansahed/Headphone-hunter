import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/headphone.png'
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css'

const Home = () => {
    return (
       <>
        <div className='home-container '>
          <div >
          <h1 className='text-6xl font-black '>A BREATH OF FRESH AIR</h1> 
          <h1 className='text-6xl font-black mt-2'>YOUR NEXT CHOICE</h1> 
          <p className='text-content text-2xl font-normal'>The best noise cancelling earbuds we've tested are the Βose QuietComfort Earbuds Truly Wireless. These earbuds have an ANC feature that blocks an impressive amount of noise, including the rumble of bus and plane engines. </p>
          <button className='mt-6 p-3 bg-gray-300 font-normal rounded-md hover:shadow-lg hover:bg-gray-500 button-content'>Live Demo</button>
          </div>
           <div className='logo-container'>
           <img src={logo} alt="" />
           </div>


        </div>
        <div>
            <CustomerReview />
        </div>
       
       </>
    );
};

export default Home;