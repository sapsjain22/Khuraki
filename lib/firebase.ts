import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5vnT8nFHb5GQoY659GxXcI0dokMIbKDw",
  authDomain: "fitness-app-46491.firebaseapp.com",
  projectId: "fitness-app-46491",
  storageBucket: "fitness-app-46491.firebasestorage.app",
  messagingSenderId: "1071165994099",
  appId: "1:1071165994099:web:khuraki-web"
};

export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
