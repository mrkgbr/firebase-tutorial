// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaL6ty1lAf82DhL8Sd2rsdd0ufu4WruRs",
  authDomain: "fir-course-f683b.firebaseapp.com",
  projectId: "fir-course-f683b",
  storageBucket: "fir-course-f683b.appspot.com",
  messagingSenderId: "587014346875",
  appId: "1:587014346875:web:55113fc5a3208e406a2ade",
  measurementId: "G-QSMR5CG6LR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
