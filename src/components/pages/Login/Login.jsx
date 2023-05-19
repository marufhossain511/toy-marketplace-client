import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    useTitle('| Login')
    const {logIn}=useContext(AuthContext)
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    console.log();
    const navigate=useNavigate()
    const [err,setErr]=useState('')

    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email= form.email.value
        const password=form.password.value
        console.log(email,password);
        setErr('')
        logIn(email,password)
        .then((result)=>{
             const loggedUser =result.user;
             if(loggedUser){
                                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            navigate(from,{replace:true})
        })
        .catch((err)=>{
            console.log(err.message);
            setErr(err.message)
        })
    }
    return (
        <div className='md:flex w-full'>
            <div className='md:w-2/4'>
              <img className='h-[400px] sm:h-full' src="https://i.ibb.co/S5m7fDv/Tablet-login-amico.png" alt="" />
            </div>
            <div className='md:mt-24  md:w-2/4'>
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
                        <label className="label text-red-500">
                            {err}
                        </label>
                        </div>
                        <div className="form-control mt-2">
                        <input className='btn btn-block btn-primary' type="submit" value="Login" />
                        </div>
                        <p className='mt-2'>Do not have an account? <Link to="/register" className='text-red-500'>Sign Up</Link></p>
                 </form>
                 <div className="divider w-3/4">OR</div>
                 <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;