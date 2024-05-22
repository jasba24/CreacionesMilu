import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { configDotenv } from 'dotenv'
import './components/styles/index.css'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// configDotenv()

const firebaseConfig = {
  apiKey: "AIzaSyDJD4Fn54Cj39RAkt9o6IQEnfln1M-RrfE",
  authDomain: "test-55f80.firebaseapp.com",
  projectId: "test-55f80",
  storageBucket: "test-55f80.appspot.com",
  messagingSenderId: "747039356086",
  appId: "1:747039356086:web:abefd0d9eeeca34018e217"
}

const email = import.meta.env.VITE_EMAIL
const password = import.meta.env.VITE_PASSWORD

const firebaseApp = initializeApp(firebaseConfig)


const auth = getAuth(firebaseApp)
signInWithEmailAndPassword(auth, email, password).then(userCredential => {
  const user = userCredential.user
  console.log(user);
})

const storage = getStorage(firebaseApp, 'gs://test-55f80.appspot.com')
const listRef = ref(storage, "sandalia")

listAll(listRef).then(res => {
  console.log(res.items[0]._location.path)
})

getDownloadURL(
  ref(storage, 'gs://test-55f80.appspot.com/sandalia/IMG-20240215-WA0101.jpg')
)
  .then(url => {
    // const xhr = new XMLHttpRequest()
    // xhr.responseType = 'blob'
    // xhr.onload = event => {
    //   const blob = xhr.response
    // }
    // xhr.open('GET', url)
    // xhr.send()
    // console.log(img)
    // // Or inserted into an <img> element
    const img = document.getElementById('myimg')
    img.setAttribute('src', url)
  })
  .catch(error => {
    // Handle any errors
  })
// console.log(storage)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <img src="" alt="example" id="myimg" />
    <App />
  </React.StrictMode>
)
