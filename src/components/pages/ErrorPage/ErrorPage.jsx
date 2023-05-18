import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img  src='https://i.ibb.co/bvJmdLR/404-error-with-person-looking-for-bro.png' alt="Error" className="h-64 w-64 mb-8" />
            <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
            <Link to="/"><button className='btn btn-primary'>Back To Home Page</button></Link>

        </div>
    );
};

export default ErrorPage;