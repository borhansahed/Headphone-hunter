import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hook/useReview';
import './CustomerReview.css'
import ReviewItems from '../ReviewItems/ReviewItems';


const CustomerReview = () => {
    const [reviews , setReviews]  = useReviews();
    return (
        <div>
        <h1 className='font-black text-3xl text-center'>Customer Reviews (3)</h1>
        <div className='review-container mt-8'>
         {
             reviews.slice(0,3).map(review=> <ReviewItems 
                key={review._id}
                review={review}></ReviewItems>)
         }
        </div>
       <div className='text-center mb-20'>
       <button  className=' mt-8 p-3 bg-gray-300 font-normal rounded-md hover:shadow-lg hover:bg-gray-500 ' ><Link to="/review">See All Reviews</Link></button>
       </div>
    </div>
    );
};

export default CustomerReview;