
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAk3SOslrKUDxn7SXbRHaC1UMmbx0YKrbU",
    authDomain: "proyecton-41bca.firebaseapp.com",
    projectId: "proyecton-41bca",
    storageBucket: "proyecton-41bca.appspot.com",
    messagingSenderId: "298404242486",
    appId: "1:298404242486:web:624f991532ebff7ff22497"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveSus = (email) => 
    addDoc(collection(db, 'suscribirse'), {email: email})