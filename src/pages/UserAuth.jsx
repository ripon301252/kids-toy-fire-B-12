import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase.init";
import {
  updateProfile,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const popupGoogleSignin = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);
  const updateUser = (updateData) => updateProfile(auth.currentUser, updateData);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, createUser, signIn, popupGoogleSignin, logOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
