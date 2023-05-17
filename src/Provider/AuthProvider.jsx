import React, { createContext } from 'react';

export const AuthContext=createContext()
const authInfo={
    
}
const AuthProvider = () => {
    return (<AuthContext.Provider value={authInfo}>

            </AuthContext.Provider>
    );
};

export default AuthProvider;