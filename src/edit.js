import { db } from './index.js'
import {
  deleteDoc, doc, updateDoc
} from 'firebase/firestore'

const editForm = document.getElementById("edit-form");
const deleteForm = document.getElementById("delete-form");
const showEditBtn = document.getElementById("show-edit");
const showDeleteBtn = document.getElementById("show-delete");
const toggleThemeBtn = document.getElementById("toggle-theme");

showEditBtn.onclick = () => {
  editForm.classList.remove("hidden");
  deleteForm.classList.add("hidden");
};

showDeleteBtn.onclick = () => {
  deleteForm.classList.remove("hidden");
  editForm.classList.add("hidden");
};

toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// Edit Account
const editUserForm = document.querySelector('#edit-form')
editUserForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const docRef = doc(db, 'users', editUserForm.id.value)
  console.log("test")
  updateDoc(docRef, {
    username: editUserForm.username.value,
    email: editUserForm.email.value,
    password: editUserForm.password.value
  }).then(() => {
    editUserForm.reset()
  })
})

// Delete Account
const deleteUserForm = document.querySelector('#delete-form')
deleteUserForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const docRef = doc(db, 'users', deleteUserForm.id.value)
    deleteDoc(docRef).then(() => {
        deleteUserForm.reset()
    })
})
