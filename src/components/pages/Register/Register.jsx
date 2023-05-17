import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='md:flex w-full'>
        <div className='md:w-2/4'>
          <img src="https://i.ibb.co/vZCncP7/Mobile-login-pana.png" alt="" />
        </div>
        <div className='md:mt-36 my-5 md:w-2/4'>
        <h1 className="text-5xl font-bold ml-8">Sign Up!</h1>
            <form  className="card-body h-2/4 md:w-3/4 w-full ">
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