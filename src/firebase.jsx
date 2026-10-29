import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCntx5o6yR--Ng-9FmJsXjlejzGlAaDM2M",
  authDomain: "dukanolasko.firebaseapp.com",
  projectId: "dukanolasko",
  storageBucket: "dukanolasko.firebasestorage.app",
  messagingSenderId: "810792483908",
  appId: "1:810792483908:web:1f128a420d6477f995d011",
  measurementId: "G-8R2F41TS01"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

if (typeof window !== "undefined") {
  getAnalytics(app);
}
