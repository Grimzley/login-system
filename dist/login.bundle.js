/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("const loginForm = document.getElementById(\"login-form\");\r\nconst signupForm = document.getElementById(\"signup-form\");\r\nconst showLoginBtn = document.getElementById(\"show-login\");\r\nconst showSignupBtn = document.getElementById(\"show-signup\");\r\nconst toggleThemeBtn = document.getElementById(\"toggle-theme\");\r\n\r\nshowLoginBtn.onclick = () => {\r\n  loginForm.classList.remove(\"hidden\");\r\n  signupForm.classList.add(\"hidden\");\r\n};\r\n\r\nshowSignupBtn.onclick = () => {\r\n  signupForm.classList.remove(\"hidden\");\r\n  loginForm.classList.add(\"hidden\");\r\n};\r\n\r\ntoggleThemeBtn.onclick = () => {\r\n  document.body.classList.toggle(\"dark\");\r\n};\r\n\n\n//# sourceURL=webpack://login/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;