const logoutBtn = document.getElementById("logout-btn");
const userLogo = document.getElementById("user-logo");
const userName = document.querySelector(".user-name");
const cartLength = document.getElementById('cart-length');

console.log(userName);
console.log(cartLength);


// Get user data from localStorage
const userEmail = localStorage.getItem("userEmail");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");

// Redirect to SignIn if not logged in
window.addEventListener("load", function () {
  if (!userEmail) {
    window.location.href = "./Pages/SignIn.html";
  }

  // ✅ Set Cart length
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartLength.textContent = `CartList (${cartItems.length})`;

  // ✅ Set user name or email
  if (userFirstName && userLastName) {
    userName.innerText = `${userFirstName} ${userLastName}`;
  } else {
    userName.innerText = userEmail;
  }
});

// Toggle logout button when user logo is clicked
userLogo.addEventListener("click", function () {
  const currentDisplay = getComputedStyle(logoutBtn).display;
  logoutBtn.style.display = currentDisplay === "none" ? "block" : "none";
});

// ✅ Logout functionality
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userpassword");
  localStorage.removeItem("userFirstName");
  localStorage.removeItem("userLastName");
  localStorage.removeItem("number");

  // Redirect to SignIn page
  window.location.href = "./Pages/SignIn.html";
});
