import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../../Hooks/useTitle';

const MyToys = () => {
  useTitle('| My Toys')
    const {user}=useContext(AuthContext)
    const [toys,setToys]=useState([])
    const [value,setValue]=useState('')
    console.log(value);
    
    const handleSort=(e)=>{
      e.preventDefault()
      setValue('')
      const form=e.target
      const selectValue=form.selectValue.value
      // console.log(selectValue);
      setValue(selectValue)
    }
    const url =`https://toys-marketplace-server-pi.vercel.app/getToysByEmail/${user?.email}`
    useEffect(()=>{
         fetch(url,{
          method:'GET',
          headers:{
            value:value
          }
         })
         .then(res=>res.json())
         .then(data=>{
            setToys(data);
         })
    },[user?.email,value])

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
          <h2 className='text-3xl font-bold text-center my-5'>My Toys</h2>
                  <div className="form-control w-full mx-auto max-w-xs">
                  <label className="label">
                    <span className="label-text pl-2 font-medium">Sort By Price</span>
                  </label>
                  <form onSubmit={handleSort}>
                  <select name='selectValue' className="w-48 select select-bordered">
                    <option>ascending</option>
                    <option>descending</option>
                  </select>
                   <input className='btn btn-square' type="submit" value="sort" />
                  </form>
                </div>
              
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