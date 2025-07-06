import { db, auth } from './index.js'
import { doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

// Verify the user is logged in and fetch user profile
export const userDataPromise = new Promise((res, rej) => {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.replace('./index.html')
    }else {
      try {
        document.body.classList.remove("hidden")

        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        res(docSnap.exists() ? docSnap.data(): {})
      }catch (error) {
        rej(error)
      }
    }
  })
})
