// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBChEI2bR7vofgV4_fJHvxuahDBPSrr9ps",
  authDomain: "auth-mohamilon-a363d.firebaseapp.com",
  projectId: "auth-mohamilon-a363d",
  storageBucket: "auth-mohamilon-a363d.appspot.com",
  messagingSenderId: "807021027039",
  appId: "1:807021027039:web:f9a4b2565c1739a1dc936a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;