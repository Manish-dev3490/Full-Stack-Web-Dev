const filterSection = document.querySelector(".filter-section");
const bigContainer = document.querySelector(".big-container");
const productList = document.querySelector(".product-list-two");
const categoryContainer = document.querySelector(".categories");
const productContainer = document.querySelector(".product-container");
const loadMore = document.getElementById("load-more-button");
let userEmail = localStorage.getItem("userEmail");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");

let skip = 10;

window.addEventListener("load", async function () {

  if (!userEmail) {
    window.location.href = "./Pages/SignIn.html";
 
  }

  userLogo.addEventListener("click", function () {
    const currentDisplay = getComputedStyle(logOutButton).display;
    if (currentDisplay === "none") {
      logOutButton.style.display = "block";
    
    } else {
      logOutButton.style.display = "none";
    }
  });


  logOutButton.addEventListener("click",function (){
    window.location.href="./Pages/SignIn.html";
  })

  

  const data = await fetch('https://dummyjson.com/products/category-list');
  const response = await data.json();



  response.map(function (category) {
    const categoryName = document.createElement("p");
    categoryName.innerText = category;
    categoryContainer.appendChild(categoryName);
  })

  const wholeData = await fetch('https://dummyjson.com/products?limit=10&skip=10');
  const response2 = await wholeData.json();

  response2.products.map(function (data) {
    const product = document.createElement("div");
    product.classList.add("product-gallary");
    product.innerHTML = `
      <a href="../pages/Product_Detail.html?id=${data.id}">
   <img src="${data.images[0]}" loading="lazy">
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
   <img src="${data.images[0]}" loading="lazy">
 </a>
   <p>${data.description}</p>
   <p class="price-tag">Rs. <span class="span">${data.price}</span></p>
    `;
      productContainer.appendChild(product);

    })
  })






})
