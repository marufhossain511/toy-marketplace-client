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
              <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=740&t=st=1684354929~exp=1684355529~hmac=166769aaa88815eb5ddfbbe8512d2506bfc83bc20e12d26b4e3736a7f7497191" alt="" />
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
                            <p className='my-2'>Do not have an account? <Link className='text-red-500'>Sign Up</Link></p>
                 </form>
            </div>
        </div>
    );
};

export default Login;