// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdG3O8Lc8OPqPq5zFwYhDbOkjpUlsJq7k",
  authDomain: "ai-interview-prep-592cc.firebaseapp.com",
  projectId: "ai-interview-prep-592cc",
  storageBucket: "ai-interview-prep-592cc.firebasestorage.app",
  messagingSenderId: "854534857291",
  appId: "1:854534857291:web:3c3f2910bf4a22f69ee3ce",
  measurementId: "G-3WSMG718ND"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
