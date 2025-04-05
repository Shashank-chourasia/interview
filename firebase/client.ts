import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRXbC_qEVpfAQl5zHtVrHPw9DNrvPqgPk",
  authDomain: "interview-1ca1f.firebaseapp.com",
  projectId: "interview-1ca1f",
  storageBucket: "interview-1ca1f.firebasestorage.app",
  messagingSenderId: "679534900372",
  appId: "1:679534900372:web:abbd65ff5d7ce6b567f081",
  measurementId: "G-VP1Y5691FS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = initializeApp(firebaseConfig);
export const db = getAnalytics(app);