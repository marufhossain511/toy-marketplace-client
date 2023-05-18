import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-900"></div>
          <span className="ml-2 text-gray-900 text-lg font-semibold">Loading...</span>
        </div>
        <div className="w-32 h-2 bg-gray-300 rounded-full">
          <div className="w-1/3 h-full bg-gray-900 rounded-full animate-loader"></div>
        </div>
      </div>
  
    }

    if(user){
        return children
    }
    return (
      <Navigate to="/login" state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;