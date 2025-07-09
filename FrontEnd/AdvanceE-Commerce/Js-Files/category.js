//  In this file i am going to consume category apis
const categoryContainer = document.querySelector(".category-container");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");
const cartLength = document.getElementById('cart-length');

// Get the category from the URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const userEmail = localStorage.getItem("userEmail");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");
const userName = document.querySelector(".user-name");



window.addEventListener("load", async function () {
  if (!userEmail) {
    window.location.href = "./pages/SignIn.html";
  }
  

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
cartLength.textContent = `CartList (${cartItems.length})`;



  if (userFirstName && userLastName) {
    userName.innerText = userFirstName + " " + userLastName;

  }
  else userName.textContent = userEmail;

  userLogo.addEventListener("click", function () {
    const currentDisplay = getComputedStyle(logOutButton).display;
    if (currentDisplay === "none") {
      logOutButton.style.display = "block";
    } else {
      logOutButton.style.display = "none";
    }
  });


  const data = await fetch(`https://dummyjson.com/products/category/${category}`);
  const response = await data.json();
  console.log(response);

  response.products.map(function (data) {
    const product = document.createElement("div");
    product.classList.add("product-gallary");
    product.innerHTML = `
      <a href="../pages/Product_Detail.html?id=${data.id}">
   <img src="${data.images[0]}" loading="lazy">
 </a>
   <p>${data.description}</p>
   <p class="price-tag">Rs. <span class="span">${data.price}</span></p>
    `;
    categoryContainer.appendChild(product);

  })

})