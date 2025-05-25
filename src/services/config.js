import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-final-react-1.firebaseapp.com",
  projectId: "proyecto-final-react-1",
  storageBucket: "proyecto-final-react-1.firebasestorage.app",
  messagingSenderId: "509589692199",
  appId: "1:509589692199:web:22d45dcdcaff92cf9d9302",
  measurementId: "G-K8H42BRS1G",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
