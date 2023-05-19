import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ReviewCard = ({review}) => {
    useEffect(() => {
        AOS.init({
            duration: 650,
            // once: true
          });
      }, [])
    return (
        <div>
            <div data-aos="fade-up"
        data-aos-duration="1000" className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={review.image} alt="Shoes" className="rounded-xl object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.review}</p>
                    </div>
             </div>
        </div>
    );
};

export default ReviewCard;