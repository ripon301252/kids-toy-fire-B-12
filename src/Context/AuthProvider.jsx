import React, { useEffect, useState } from "react";

import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // console.log(user)

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn/Login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google signin
    const popupGoogleSignin = () => {
      return signInWithPopup(auth, googleProvider);
    };


  // update user
  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }


  // signOut/LogOut
  const logOut = () => {
    return signOut(auth);
  };


  // reset password
    const passwordReset = (email) => {
      return sendPasswordResetEmail(auth, email);
    };
  

  // observer
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubsCribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    updateUser,
    popupGoogleSignin,
    passwordReset,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
