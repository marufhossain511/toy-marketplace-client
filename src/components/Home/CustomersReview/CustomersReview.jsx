import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const CustomersReview = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('customerReview.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data);
        })
    },[])
    return (
        <div className='mt-20 mb-10'>
            <h2 className='text-3xl text-center font-bold my-5'>What Customers Are Saying <br />About Us</h2>
           <div className='grid sm:grid-cols-3 gap-4'>
            {
                reviews.map(review=><ReviewCard
                key={review.id}
                review={review}
                ></ReviewCard>)
            }
           </div>
            
            
        </div>
    );
};

export default CustomersReview;