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
