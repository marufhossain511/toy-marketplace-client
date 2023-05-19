import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [toys,setToys]=useState([])
    const url =`https://toys-marketplace-server-pi.vercel.app/getToysByEmail/${user?.email}`
    useEffect(()=>{
         fetch(url)
         .then(res=>res.json())
         .then(data=>{
            setToys(data);
         })
    },[user?.email])

    const handleDelete=(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://toys-marketplace-server-pi.vercel.app/allToys/${_id}`,{
            method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining=toys.filter(toy=>toy._id !== _id)
                setToys(remaining)
                  Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
            })
            }
          })
        // console.log(_id);
        
    }

    return (
        <div>
            <div className="overflow-x-auto w-full my-10 md:px-14">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Seller email</th>
        <th>sub category</th>
        <th>price</th>
        <th>Available Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        toys.map(toy=><MyToysRow
        key={toy._id}
        toy={toy}
        handleDelete={handleDelete}
        ></MyToysRow>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;