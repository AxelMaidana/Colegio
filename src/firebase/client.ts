import { initializeApp } from "firebase/app";


// Configuración de Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBMrPom6M9CbqwDEIVrgXo8rFUiykenFjc",
    authDomain: "colegio-enfermeria.firebaseapp.com",
    projectId: "colegio-enfermeria",
    storageBucket: "colegio-enfermeria.appspot.com",
    messagingSenderId: "611697437358",
    appId: "1:611697437358:web:8b6fabe08679c3453d5b3f",
};

export const app = initializeApp(firebaseConfig);

