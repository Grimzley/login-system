import { auth } from './index.js'
import { onAuthStateChanged } from 'firebase/auth'

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace('./index.html')
  }else {
    document.body.classList.remove("hidden")
  }
})
