import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection
} from 'firebase/firestore'

// Firestore Database Setup
const firebaseConfig = {
  apiKey: "AIzaSyCGs3JuGAHhn1Fpr8ZgHKpwlVCtNZe0YMQ",
  authDomain: "login-system-397b5.firebaseapp.com",
  projectId: "login-system-397b5",
  storageBucket: "login-system-397b5.firebasestorage.app",
  messagingSenderId: "509745472385",
  appId: "1:509745472385:web:3e5650fbb2f5c591ffbe80"
};
initializeApp(firebaseConfig);

export const db = getFirestore();
export const colRef = collection(db, 'users');
