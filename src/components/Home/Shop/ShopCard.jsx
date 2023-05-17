import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopCard = ({data}) => {
    const {_id,imageUrl,name,price,rating}=data
    return (
        <div>
    <div className=" card h-96 w-full bg-base-200 shadow-xl">
    <figure><img className='pt-10  object-cover h-[34vh]' src={imageUrl} alt="toys" /></figure>
    <div className="card-body pt-0">
        <h2 className="card-title">{name}</h2>
        <p className='font-medium'>Price: {price}</p>
       <p className='flex font-medium'>Rating:<span className='px-2'>{rating}</span> <Rating 
        style={{ maxWidth: 100 }}
        value={rating}
        readOnly
        ></Rating></p>
        <div className="card-actions justify-end">
        <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
    </div>
    </div>
        </div>
    );
};

export default ShopCard;