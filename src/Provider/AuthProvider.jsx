import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext=createContext()
const AuthProvider = ({children}) => {

        const authInfo={
        
        }
    return (<AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;