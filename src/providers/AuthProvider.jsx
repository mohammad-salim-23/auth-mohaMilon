import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6

import auth from "../firebase/firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true);
     const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }
     const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }
     const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,GoogleProvider);
     }
     const logOut=()=>{
        setLoading(true);
        return signOut(auth);
     }
    //  observe the state change
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setLoading(false);
            setUser(currentUser);
           
        });
        return()=>{
            unSubscribe();
        }
    },[])
    const authInfo={user,
        createUser,
        signInUser,
        logOut,
        loading,
        signInWithGoogle
    };
    return (
        
            <AuthContext.Provider value={authInfo}>
           {children}
            </AuthContext.Provider>
      
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;


/**
 * 1.create context and expore it
 * 2.set provider with value
 * 3.use the Auth provider in the main.jsx file
 * 4.Access children in the AuthProvider component as children and use it in the middle of the provider
 */