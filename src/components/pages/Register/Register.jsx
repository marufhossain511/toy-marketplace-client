import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const {signUp}=useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target
        const name =form.name.value
        const email=form.email.value
        const password=form.password.value
        const photo=form.photo.value
        console.log({name,email,password,photo});
        signUp(email,password,name,photo)
        .then((result)=>{
            const createdUser=result.user
            console.log(createdUser);
        })
        .catch((err)=>{
            console.log(err.message);
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
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name='photo' placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <input className='btn btn-block btn-primary' type="submit" value="Sign Up" />
                    </div>
                        <p className='my-2'>Already have an account? <Link to="/login" className='text-red-500'>Login</Link></p>
             </form>
        </div>
    </div>
    );
};

export default Register;