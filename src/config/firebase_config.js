import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoLYM1lvsfVmfIK_BqiKocPrDRR14a7tk",
    authDomain: "e-commer-863b4.firebaseapp.com",
    projectId: "e-commer-863b4",
    storageBucket: "e-commer-863b4.appspot.com",
    messagingSenderId: "40413257423",
    appId: "1:40413257423:web:f0f34dab9337362e7561ba",
    measurementId: "G-9H0VM5QRLS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
