import { db, auth } from './index.js'
import { userDataPromise } from './auth.js';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'

const toggleThemeBtn = document.getElementById("toggle-theme");
const editForm = document.getElementById("edit-form");
const deleteForm = document.getElementById("delete-form");
const showEditBtn = document.getElementById("show-edit");
const showDeleteBtn = document.getElementById("show-delete");
const editSpinner = document.getElementById("edit-spinner");

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark": "light";
  localStorage.setItem("theme", theme);
};
showEditBtn.onclick = () => {
  editForm.classList.remove("hidden");
  deleteForm.classList.add("hidden");
};
showDeleteBtn.onclick = () => {
  deleteForm.classList.remove("hidden");
  editForm.classList.add("hidden");
};

// Load Existing Data into Form
userDataPromise.then((data) => {
  if (data) {
    editForm.username.value = data.username
    if (data.firstName) editForm.firstName.value = data.firstName
    if (data.lastName) editForm.lastName.value = data.lastName
    if (data.profession) editForm.profession.value = data.profession
    if (data.city) editForm.city.value = data.city
  }
}).catch((err) => {
  console.error("User not logged in or failed to fetch profile:", err)
  window.location.replace('./index.html')
});

// Logout of Account
const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.replace('./index.html')
  }).catch((err) => {
    console.log(err.message)
  })
})

// Edit Account
editForm.addEventListener('submit', (e) => {
  e.preventDefault()
  editSpinner.classList.remove("hidden")
  let user = auth.currentUser
  let uid = user.uid
  const docRef = doc(db, 'users', uid)
  updateDoc(docRef, {
    username: editForm.username.value,
    firstName: editForm.firstName.value,
    lastName: editForm.lastName.value,
    profession: editForm.profession.value,
    city: editForm.city.value,
  }).finally(() => {
    editSpinner.classList.add("hidden")
  })
})

// Delete Account
const deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let user = auth.currentUser
  let uid = user.uid
  user.delete().then(() => {
    let docRef = doc(db, 'users', uid)
    deleteDoc(docRef).then(() => {
      window.location.replace('./index.html')
    })
  }).catch((err) => {
    console.log(err.message)
  })
})
