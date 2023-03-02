// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4DMNKYxboSmH5tuZFjZG6lGFe-pnA23c",
  authDomain: "travel-guru-23.firebaseapp.com",
  projectId: "travel-guru-23",
  storageBucket: "travel-guru-23.appspot.com",
  messagingSenderId: "1038735303204",
  appId: "1:1038735303204:web:e852c0574f22a6e936aeb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
