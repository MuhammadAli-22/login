  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCrB5p0mQP1ogn147DQbpHbX2r6dfBAC84",
    authDomain: "signup-page-eb6cf.firebaseapp.com",
    projectId: "signup-page-eb6cf",
    storageBucket: "signup-page-eb6cf.appspot.com",
    messagingSenderId: "250509063039",
    appId: "1:250509063039:web:8bfbdd0c8689221838e04a",
    measurementId: "G-N1PQ7DR12N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const db = getDatabase(app);

  document.getElementById("submit").addEventListener("click", function(e){

  set(ref(db, 'user/'))

  })