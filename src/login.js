import { db, auth } from './index.js'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const toggleThemeBtn = document.getElementById("toggle-theme");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");
const loginFeedback = document.getElementById("login-feedback");
const signupFeedback = document.getElementById("signup-feedback");
const loginSpinner = document.getElementById("login-spinner");
const signupSpinner = document.getElementById("signup-spinner");

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark": "light";
  localStorage.setItem("theme", theme);
};
showLoginBtn.onclick = () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
};
showSignupBtn.onclick = () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

function getAuthError(code) {
  switch (code) {
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/email-already-in-use":
      return "This email is already registered.";
    case "auth/weak-password":
      return "Password should be at least 6 characters."
    default:
      return "An error occurred. Please try again.";
  }
}

// Login to Account
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  loginFeedback.textContent = ""
  loginSpinner.classList.remove("hidden")
  let email = loginForm.email.value
  let password = loginForm.password.value
  signInWithEmailAndPassword(auth, email, password).then(() => {
    window.location.replace("./dashboard.html")
  }).catch((err) => {
    loginFeedback.textContent = getAuthError(err.code)
    loginForm.reset()
  }).finally(() => {
    loginSpinner.classList.add("hidden");
  })
})

// Create Account
signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  signupFeedback.textContent = ""
  signupSpinner.classList.remove("hidden")
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
    signupFeedback.textContent = getAuthError(err.code)
    signupForm.reset()
  }).finally(() => {
    signupSpinner.classList.add("hidden")
  })
})
