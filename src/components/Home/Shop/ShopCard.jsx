import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ShopCard = ({data}) => {
    const {user}=useContext(AuthContext)
    const {_id,imageUrl,name,price,rating}=data
    useEffect(() => {
        AOS.init({
            duration: 650,
            // once: true
          });
      }, [])
    const handleModal=()=>{
        if(!user){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                timer: 1500
            })  
        }
    }
    return (
        <div>
        <div  data-aos="fade-up"  className="card w-full card-side bg-base-100 shadow-2xl mx-4">
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
            <Link to={`/details/${_id}`}><button onClick={handleModal} className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ShopCard;