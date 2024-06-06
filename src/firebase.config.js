import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvCY4-iZFyGUTbEgiYjeME2Xu_Icw4cY",
  authDomain: "house-marketplace-app-atmmdev.firebaseapp.com",
  projectId: "house-marketplace-app-atmmdev",
  storageBucket: "house-marketplace-app-atmmdev.appspot.com",
  messagingSenderId: "137393132485",
  appId: "1:137393132485:web:c09ba647be472886d731ac",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
