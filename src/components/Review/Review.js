import React from 'react';
import useReviews from '../../Hook/useReview';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='all-reviews-container'>
            <div className='mt-10 text-center'>
                  <h1 className='text-4xl font-black'>All Customer Reviews</h1>
            </div>
          <div className='all-reviews'>
            {
                reviews.map(review =><ReviewItems key={review._id} review={review}> </ReviewItems> )
            }  
            
          </div>
        </div>
    );
};

export default Review;