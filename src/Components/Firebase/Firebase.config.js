// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm_C5jKCwt1jBXKTH9laxtpE5Ya1tX2ZQ",
  authDomain: "coffee-store-espresso-em-e4e17.firebaseapp.com",
  projectId: "coffee-store-espresso-em-e4e17",
  storageBucket: "coffee-store-espresso-em-e4e17.appspot.com",
  messagingSenderId: "631962253472",
  appId: "1:631962253472:web:a1e16880005e74b8fd31c5",
  measurementId: "G-7S1Z36EDKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;