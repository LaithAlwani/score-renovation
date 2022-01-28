// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCr1jdNFJ63G8w65G2aGKwTRuvGKNxA-0",
  authDomain: "freelance-50be3.firebaseapp.com",
  projectId: "freelance-50be3",
  storageBucket: "freelance-50be3.appspot.com",
  messagingSenderId: "256732075018",
  appId: "1:256732075018:web:d71e76c2ef15ccf3417bf3",
  measurementId: "G-BY5CZ307JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);