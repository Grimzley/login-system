import { db, auth } from './index.js'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

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
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = loginForm.email.value
  let password = loginForm.password.value
  signInWithEmailAndPassword(auth, email, password).then(() => {
    window.location.replace("./dashboard.html")
  }).catch((err) => {
    console.log(err.message)
    loginForm.reset()
  })
})

// Create Account
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let username = signupForm.username.value
  let email = signupForm.email.value
  let password = signupForm.password.value
  createUserWithEmailAndPassword(auth, email, password).then(async (cred) => {
    let uid = cred.user.uid;
    let docData = {
      username: username,
      email: email
    }
    let docRef = doc(db, 'users', uid);
    await setDoc(docRef, docData);
    window.location.replace("./dashboard.html")
  }).catch((err) => {
    console.log(err.message)
    signupForm.reset()
  })
})
