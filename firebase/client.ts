import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRXbC_qEVpfAQl5zHtVrHPw9DNrvPqgPk",
  authDomain: "interview-1ca1f.firebaseapp.com",
  projectId: "interview-1ca1f",
  storageBucket: "interview-1ca1f.firebasestorage.app",
  messagingSenderId: "679534900372",
  appId: "1:679534900372:web:abbd65ff5d7ce6b567f081",
  measurementId: "G-VP1Y5691FS"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
