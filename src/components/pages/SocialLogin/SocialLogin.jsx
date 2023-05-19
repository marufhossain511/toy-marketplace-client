import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    const navigate=useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from,{replace:true})
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
             <div className="text-center w-3/4">
                <button onClick={handleGoogleSignIn} className="btn btn-primary">
                 <FaGoogle className='mr-4'></FaGoogle>Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;