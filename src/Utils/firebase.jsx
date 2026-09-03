// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMEzHdRZxQ6CJJdDxxiiJEippAmr_nSaM",
  authDomain: "netflixgpt-2ae83.firebaseapp.com",
  projectId: "netflixgpt-2ae83",
  storageBucket: "netflixgpt-2ae83.firebasestorage.app",
  messagingSenderId: "817737704055",
  appId: "1:817737704055:web:cbf2784863b3b0ed739c72",
  measurementId: "G-ZVY6YTS897",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
