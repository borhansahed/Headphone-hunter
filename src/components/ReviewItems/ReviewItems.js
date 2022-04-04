import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const {name ,review , picture , ratings ,  }=props.review;
    return (
        <>
        
         <div >
           <div className='review-card hover:shadow-lg'>
           <img className='rounded-xl ' src={picture} alt="" />
            <h4 className='text-center'>{name}</h4>
             <blockquote className='font-medium'>{review.slice(0,200)}</blockquote>
            <h4>{ratings}</h4>
           </div>
         
        </div>
        
        </>
       
    );
};

export default ReviewItems;