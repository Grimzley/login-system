import { db, colRef } from './index.js'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
} from 'firebase/firestore'

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");
const toggleThemeBtn = document.getElementById("toggle-theme");

showLoginBtn.onclick = () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};

showSignupBtn.onclick = () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// Login to Account


// Create Account
const addUserForm = document.querySelector('#signup-form')
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        username: addUserForm.username.value,
        email: addUserForm.email.value,
        password: addUserForm.password.value
    }).then(() => {
        addUserForm.reset()
    })
})
