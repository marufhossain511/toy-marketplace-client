import React, { useContext, useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AllToys = () => {

    const {user}=useContext(AuthContext)
    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch('https://toys-marketplace-server-pi.vercel.app/allToys')
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
        })
    },[])

    const handleSearch=(e)=>{
        e.preventDefault()
        const form=e.target
        const search=form.search.value
        fetch(`https://toys-marketplace-server-pi.vercel.app/getToysBySearch/${search}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
            form.reset()
        })
    }

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
            <h1 className='text-5xl font-bold text-center my-10'>All Toys</h1>
            <div>
            <div className="form-control  my-5">
                <form onSubmit={handleSearch} className="justify-center input-group">
                    <input name='search' type="text" placeholder="Search toys" className="input input-bordered" />
                    <input className='btn' type="submit" value="Search" />
                </form>
            </div>
            </div>

                <div className="overflow-x-auto my-10 md:px-14">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Seller
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Toy Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sub Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                    </th>
                    </tr>
                </thead>
                <tbody  className="bg-white divide-y divide-gray-200">
                    {
                        toys.map(toy=><AllToysRow
                        key={toy._id}
                        toy={toy}
                        handleModal={handleModal}
                        ></AllToysRow>)
                    }
                </tbody>
                </table>
            </div>
    </div>
    );
};

export default AllToys;