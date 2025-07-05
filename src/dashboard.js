import { db, auth } from './index.js'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'

const toggleThemeBtn = document.getElementById("toggle-theme");
const editForm = document.getElementById("edit-form");
const deleteForm = document.getElementById("delete-form");
const showEditBtn = document.getElementById("show-edit");
const showDeleteBtn = document.getElementById("show-delete");

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
  let user = auth.currentUser
  let uid = user.uid
  const docRef = doc(db, 'users', uid)
  updateDoc(docRef, {
    username: editForm.username.value,
  }).then(() => {
    editForm.reset()
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
