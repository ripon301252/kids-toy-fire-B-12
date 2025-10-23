// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAVh13Cb2XDTO-dDYdIOZ4Flc7UVx06x5E",
  // authDomain: "kidstoy-2a4de.firebaseapp.com",
  // projectId: "kidstoy-2a4de",
  // storageBucket: "kidstoy-2a4de.firebasestorage.app",
  // messagingSenderId: "765354031701",
  // appId: "1:765354031701:web:962bb548dde04dd0ed72dc"

  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);