// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7a7FqF8MWvMLnDBtD768sYWS9uuz0fPU",
  authDomain: "netflixgpt-4537c.firebaseapp.com",
  projectId: "netflixgpt-4537c",
  storageBucket: "netflixgpt-4537c.firebasestorage.app",
  messagingSenderId: "292451534711",
  appId: "1:292451534711:web:a5bd284dff819394b58372",
  measurementId: "G-NHEM29P0RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);