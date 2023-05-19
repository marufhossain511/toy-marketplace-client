import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopCard = ({data}) => {
    const {_id,imageUrl,name,price,rating}=data
    return (
        <div>
        <div className="card w-full card-side bg-base-100 shadow-2xl mx-4">
        <figure><img className='pt-10  object-cover h-[30vh]' src={imageUrl} alt="Movie"/></figure>
        <div className="card-body mt-7 ">
            <h2 className="card-title">Name: {name}</h2>
            <p>Price: ${price}</p>
            <div className='flex font-medium  items-center'>Rating:<span className='px-2'>{rating}</span> <Rating 
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            ></Rating></div>
            <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShopCard;