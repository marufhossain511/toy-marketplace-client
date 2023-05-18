import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {

    const {user}=useContext(AuthContext)

    const handleAddToy=(e)=>{
        e.preventDefault()
        const form=e.target
        const imageUrl=form.photo.value
        const name=form.toyName.value
        const sellerName=form.sellerName.value
        const sellerEmail=form.sellerEmail.value
        const subcategory=form.subCategory.value
        const price=form.price.value
        const rating=form.rating.value
        const description=form.details.value
        const quantityAvailable=form.quantity.value
        const newToy={imageUrl,name,sellerName,sellerEmail,subcategory,price,rating,description,quantityAvailable}
        console.log(newToy); 
        fetch('http://localhost:5000/allToys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Toy Added successfully',
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
            form.reset()
        })
    }

    return (
        <div className='my-10 md:mx-32 bg-base-300 shadow-xl '>
            <h2 className='text-4xl py-4 text-center font-bold'>Add Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name='photo' placeholder="Picture URL of the toy" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller name </span>
                        </label>
                        <input type="text" name='sellerName' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">seller email</span>
                        </label>
                        <input type="text" name='sellerEmail' defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea name='details' className="textarea textarea-bordered" placeholder="Details"></textarea>
                    </div>
                    <div className="form-control mb-4">
                       <label className="label">
                            <span className="label-text">sub category</span>
                        </label>
                        <select name='subCategory' className="select select-bordered w-full max-w-xs">
                            <option>marvel</option>
                            <option>avengers</option>
                            <option>starwars</option>
                        </select>
                    </div>
                </div>
                <input className='btn btn-block mb-3' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddToy;