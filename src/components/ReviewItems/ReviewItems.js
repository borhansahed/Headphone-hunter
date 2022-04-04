
import React from 'react';
import './ReviewItems.css';
import { FaStar } from 'react-icons/fa';



const ReviewItems = (props) => {
    const {name ,review , picture , ratings ,  }=props.review;
    return (
        <>
        
         <div >
           <div className='review-card hover:shadow-lg'>
           <img className='rounded-full ' src={picture} alt="" />
            <h4 className='text-center font-black text-xl'>{name}</h4>
             <p className='font-medium mx-auto'>"" {review.slice(0,178)}""</p>
            <h4 className='mt-2 mb-3 text-center'> {ratings} <FaStar className='text-yellow-400 mx-auto'/></h4>
           </div>
         
        </div>
        
        </>
       
    );
};

export default ReviewItems;