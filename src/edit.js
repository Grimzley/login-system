import { db, colRef } from './index.js'
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
} from 'firebase/firestore'

// Delete Account
const deleteUserForm = document.querySelector('#delete-form')
deleteUserForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const docRef = doc(db, 'users', deleteUserForm.id.value)
    deleteDoc(docRef).then(() => {
        deleteUserForm.reset()
    })
})
