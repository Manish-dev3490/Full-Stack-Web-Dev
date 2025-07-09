// In this file i am writing a logic to when i click on sign in it  will redirect user to the index .html

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA10h7VyxpGyx9Q_pR4wq3iFy2Lib113ik",
    authDomain: "advance-ecommerce-e2cf6.firebaseapp.com",
    projectId: "advance-ecommerce-e2cf6",
    storageBucket: "advance-ecommerce-e2cf6.firebasestorage.app",
    messagingSenderId: "888139933028",
    appId: "1:888139933028:web:154566f8a0ff52f760c671",
    measurementId: "G-F98HC22RXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (event) {
    console.log('hello from inside');
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;



        localStorage.clear();
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userpassword", password);
        window.location.href = "../index.html";

    }

    catch(error){
        console.error("Signup failed:", error.code, error.message);
        alert("Sign-up failed: " + error.message);
    }
   
});

console.log("hello ji");
