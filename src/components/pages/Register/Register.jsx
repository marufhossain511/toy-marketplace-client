import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const {signUp}=useContext(AuthContext)
    const [err,setErr]=useState('')
    const navigate=useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target
        const name =form.name.value
        const email=form.email.value
        const password=form.password.value
        const photo=form.photo.value
        console.log({name,email,password,photo});
        setErr('')
        signUp(email,password,name,photo)
        .then((result)=>{
            const createdUser=result.user
            console.log(createdUser);
            if(createdUser){
                                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'signUp successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            navigate('/')
        })
        .catch((err)=>{
            console.log(err.message);
            setErr(err.message)
        })
    }
    return (
        <div className='md:flex w-full'>
        <div className='md:w-2/4'>
          <img src="https://i.ibb.co/vZCncP7/Mobile-login-pana.png" alt="" />
        </div>
        <div className='md:mt-36 my-5 md:w-2/4'>
        <h1 className="text-5xl font-bold ml-8">Sign Up!</h1>
            <form onSubmit={handleRegister} className="card-body h-2/4 md:w-3/4 w-full ">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" required name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name='photo'  placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <label className="label mb-2 text-red-500">
                            {err}
                    </label> 
                    <input className='btn btn-block btn-primary' type="submit" value="Sign Up" />
                    </div>
                    <p className='my-2'>Already have an account? <Link to="/login" className='text-red-500'>Login</Link></p>
             </form>
        </div>
    </div>
    );
};

export default Register;