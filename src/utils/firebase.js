// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqcnu5JnvSAijDzHrdamYeLpVe5_OR658",
  authDomain: "ottgpt-620ed.firebaseapp.com",
  projectId: "ottgpt-620ed",
  storageBucket: "ottgpt-620ed.appspot.com",
  messagingSenderId: "160634391745",
  appId: "1:160634391745:web:1e54e329bbb6f4f5935840",
  measurementId: "G-N4CGQB2RWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();