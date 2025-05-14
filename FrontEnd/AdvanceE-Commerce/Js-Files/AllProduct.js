const filterSection = document.querySelector(".filter-section");
const bigContainer = document.querySelector(".big-container");
const productList = document.querySelector(".product-list-two");
const categoryContainer = document.querySelector(".categories");
const productContainer = document.querySelector(".product-container");
const loadMore = document.getElementById("load-more-button");
let userEmail = localStorage.getItem("userEmail");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");
const userName = document.querySelector(".user-name");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");

let skip = 10;

window.addEventListener("load", async function () {

  if (!userEmail) {
    window.location.href = "../Pages/SignIn.html";

  }
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const cartLength = document.getElementById('cart-length');
  if (userFirstName && userLastName) {
    userName.innerText = userFirstName + " " + userLastName;;

  }

  else userName.textContent = userEmail;
  cartLength.textContent = `CartList (${cartItems.length})`;

  userLogo.addEventListener("click", function () {
    const currentDisplay = getComputedStyle(logOutButton).display;
    if (currentDisplay === "none") {
      logOutButton.style.display = "block";

    } else {
      logOutButton.style.display = "none";
    }
  });


  if (logOutButton) {
    logOutButton.addEventListener("click", function () {
      localStorage.clear();
      window.location.href = "../Pages/SignIn.html";
    });
  }




 
  const wholeData = await fetch('https://dummyjson.com/products?limit=10&skip=10');
  const response2 = await wholeData.json();

  response2.products.map(function (data) {
    const product = document.createElement("div");
    product.classList.add("product-gallary");
    product.innerHTML = `
      <a href="../pages/Product_Detail.html?id=${data.id}">
   <img src="${data.images[0]}">
 </a>
   <p class="desc">${data.description}</p>
   <p class="price-tag">Rs. <span class="span">${data.price}</span></p>
    `;
    productContainer.appendChild(product);

  })

  loadMore.addEventListener("click", async function () {
    skip += 10;
    const moreData = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
    const res = await moreData.json();

    res.products.map(function (data) {
      const product = document.createElement("div");
      product.classList.add("product-gallary");
      product.innerHTML = `
      <a href="../pages/Product_Detail.html?id=${data.id}">
   <img src="${data.images[0]}">
 </a>
   <p>${data.description}</p>
   <p class="price-tag">Rs. <span class="span">${data.price}</span></p>
    `;
      productContainer.appendChild(product);

    })
  })






})
