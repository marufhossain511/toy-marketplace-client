import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../../Hooks/useTitle';
const ToyDetails = () => {
    useTitle('| Toy Details')
    const toy=useLoaderData()
    const {_id,imageUrl,name,sellerName,sellerEmail,subcategory,price,rating,description,quantityAvailable}=toy || {}
    return (
        <div className="card m-8 mt-16 bg-base-100 shadow-xl">
        <figure><img className='h-64 pt-3 rounded' src={imageUrl} alt="Movie"/></figure>
        <div className="card-body px-10">
            <h2 className="card-title">Name: {name}</h2>
            <p className='text-lg font-semibold'>Seller Name: {sellerName}</p>
            <p className='text-lg font-semibold'>Seller Email: {sellerEmail}</p>
            <p className='text-lg font-semibold'>Price: ${price}</p>
                <div className='flex font-medium items-center'>Rating:<span className='px-2'>{rating}</span> <Rating 
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            ></Rating></div>
            <p className='text-lg font-semibold'>Available Quantity: {quantityAvailable}</p>
            <p className='text-lg font-semibold'>Detail: {description}</p>
        </div>
        </div>
    );
};

export default ToyDetails;