import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext=createContext()
const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const [photo,setPhoto]=useState()

    const signUp=(email,password,name,photo)=>{
      setLoading(true)
      setPhoto(photo)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
      setLoading(true)
      return signOut(auth)
    }

    useEffect(()=>{
      onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
      })
    },[])

        const authInfo={
          signUp,
          photo,
          user,
          logIn,
          logOut
        }
    return (<AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;