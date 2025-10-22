import React, { useEffect, useState } from "react";

import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

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


  // update user
  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }


  // signOut/LogOut
  const logOut = () => {
    return signOut(auth);
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
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
