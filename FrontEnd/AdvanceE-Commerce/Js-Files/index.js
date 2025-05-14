const logoutBtn = document.getElementById("logout-btn");
const userLogo = document.getElementById("user-logo");

// Get user data from localStorage
const userEmail = localStorage.getItem("userEmail");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");
const userName=document.querySelector(".user-name");

// Show name dynamically if needed (optional)
const userNameTag = document.querySelector(".user-name");
if (userFirstName && userLastName) {
  userNameTag.textContent = `${userFirstName} ${userLastName}`;
}

// Redirect to SignIn if not logged in
window.addEventListener("load", function () {
  if (!userEmail) {
    window.location.href = "./Pages/SignIn.html";
  }
});

userName.innerText=userFirstName+" "+userLastName;

// Toggle logout button when user logo is clicked
userLogo.addEventListener("click", function () {
  const currentDisplay = getComputedStyle(logoutBtn).display;
  logoutBtn.style.display = currentDisplay === "none" ? "block" : "none";
});

// ✅ Logout functionality
logoutBtn.addEventListener("click", function () {
  // Clear localStorage items
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userpassword");
  localStorage.removeItem("userFirstName");
  localStorage.removeItem("userLastName");
  localStorage.removeItem("number");

  // Optional: clear everything
  // localStorage.clear();

  // Redirect to SignIn page
  window.location.href = "./Pages/SignIn.html";
});
