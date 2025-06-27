import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
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

// Get Users
export const db = getFirestore();
export const colRef = collection(db, 'users');
getDocs(colRef).then((snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
        users.push({...doc.data(), id: doc.id})
    })
    console.log(users) // delete later
}).catch((err) => {
    console.log(err.message)
})
