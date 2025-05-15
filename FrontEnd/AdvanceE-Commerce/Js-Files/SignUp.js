// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA10h7VyxpGyx9Q_pR4wq3iFy2Lib113ik",
    authDomain: "advance-ecommerce-e2cf6.firebaseapp.com",
    projectId: "advance-ecommerce-e2cf6",
    storageBucket: "advance-ecommerce-e2cf6.firebasestorage.app",
    messagingSenderId: "888139933028",
    appId: "1:888139933028:web:154566f8a0ff52f760c671",
    measurementId: "G-F98HC22RXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Sign-up logic
const signUpForm = document.getElementById("signupForm");

signUpForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page reload

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;
    const number = document.getElementById('newNumber').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store extra info locally (optional)
        localStorage.setItem("userFirstName", firstName);
        localStorage.setItem("userLastName", lastName);
        localStorage.setItem("userEmail", email);
        
        localStorage.setItem("number", number);
       

        // Redirect
        window.location.href = "../index.html";
    } catch (error) {
        console.error("Signup failed:", error.code, error.message);
        alert("Sign-up failed: " + error.message);
    }
});
