const logoutBtn = document.getElementById("logout-btn");
const userLogo = document.getElementById("user-logo");
const userName = document.querySelector(".user-name");
const cartLength = document.getElementById('cart-length');
const productContainer=document.querySelector(".product-container");



// Get user data from localStorage
const userEmail = localStorage.getItem("userEmail");
const email = localStorage.getItem("email");

const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");

// Redirect to SignIn if not logged in
window.addEventListener("load", async function () {
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


  const data=await fetch("https://dummyjson.com/products/categories");
  const response=await data.json();

  console.log(response);

  response.map(function(category){
    const productBox=document.createElement("div");
    productBox.classList.add("product-box");
    productBox.innerHTML=`
        <a href="Pages/Category.html?category=${category.slug}">
    <h2 class="heading">${category?.name}</h2>

        </a>
    `;
    productContainer.appendChild(productBox);

  })
  






});

// Toggle logout button when user logo is clicked
userLogo.addEventListener("click", function () {
  const currentDisplay = getComputedStyle(logoutBtn).display;
  logoutBtn.style.display = currentDisplay === "none" ? "block" : "none";
});

// ✅ Logout functionality
logoutBtn.addEventListener("click", function () {
  localStorage.clear();

  // Redirect to SignIn page
  window.location.href = "./Pages/SignIn.html";
}






);

