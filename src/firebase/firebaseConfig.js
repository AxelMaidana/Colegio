// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMrPom6M9CbqwDEIVrgXo8rFUiykenFjc",
  authDomain: "colegio-enfermeria.firebaseapp.com",
  projectId: "colegio-enfermeria",
  storageBucket: "colegio-enfermeria.appspot.com",
  messagingSenderId: "611697437358",
  appId: "1:611697437358:web:8b6fabe08679c3453d5b3f",
  measurementId: "G-QLHPTDGMMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
