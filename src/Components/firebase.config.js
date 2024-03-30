// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPXVgCxDIuwm7PxgiSWFT5-g6M3vltRi0",
  authDomain: "email-password-auth-b0fae.firebaseapp.com",
  projectId: "email-password-auth-b0fae",
  storageBucket: "email-password-auth-b0fae.appspot.com",
  messagingSenderId: "249028824773",
  appId: "1:249028824773:web:d007e7986a5c74853c2aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;