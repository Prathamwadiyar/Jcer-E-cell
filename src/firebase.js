import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVhQksYUYLsRim0RYDRELW9m7VYYeHuF4",
  authDomain: "e-cell-df75d.firebaseapp.com",
  projectId: "e-cell-df75d",
  storageBucket: "e-cell-df75d.firebasestorage.app",
  messagingSenderId: "762560563136",
  appId: "1:762560563136:web:09f7ed30a4dd549a08aa25",
  measurementId: "G-P72MH4CKDW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
