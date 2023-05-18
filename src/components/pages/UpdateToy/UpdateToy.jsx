import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy=useLoaderData()
    const {_id,price,description,quantityAvailable}=toy || {}
    const navigate=useNavigate()
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target
        const price=form.price.value
        const quantity=form.quantity.value
        const description=form.description.value
        const updatedToy={price,quantity,description};
        fetch(`http://localhost:5000/allToys/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'update info successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate('/myToys')
            }
        })
    }
    return (
        <div className='bg-slate-100 md:mx-44 mx-5 p-8 rounded'>
            <h2 className=' text-3xl text-center my-5 font-bold'>Edit Toy Info</h2>
             <form onSubmit={handleUpdate}>
                <div className=''>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" defaultValue={quantityAvailable} name='quantity' placeholder="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea name='description' defaultValue={description} className="textarea textarea-bordered " placeholder="Details"></textarea>
                    </div>
                    <input className='btn btn-block my-5' type="submit" value="Update" />
                </div>
             </form>
        </div>
    );
};

export default UpdateToy;