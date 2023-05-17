import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email= form.email.value
        const password=form.password.value
        console.log(email,password);
    }
    return (
        <div className='md:flex w-full'>
            <div className='md:w-2/4'>
              <img className='' src="https://i.ibb.co/S5m7fDv/Tablet-login-amico.png" alt="" />
            </div>
            <div className='md:mt-40 my-5 md:w-2/4'>
            <h1 className="text-5xl font-bold ml-8">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 w-full ">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-block btn-primary' type="submit" value="Login" />
                        </div>
                            <p className='my-2'>Do not have an account? <Link to="/register" className='text-red-500'>Sign Up</Link></p>
                 </form>
            </div>
        </div>
    );
};

export default Login;