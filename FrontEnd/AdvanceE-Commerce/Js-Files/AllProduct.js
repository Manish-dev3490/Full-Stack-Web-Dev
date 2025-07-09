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


const searchArea = document.getElementById("srch-btn");
const searchButton = document.getElementById("srch");


const applyFilter = document.querySelector(".apply-filter");


let skip = 10;

window.addEventListener("load", async function () {

  // Some check conditions
  if (!userEmail) {
    window.location.href = "../Pages/SignIn.html";

  }
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))||[];

  const cartLength = document.getElementById('cart-length');
  if (userFirstName && userLastName) {
    userName.innerText = userFirstName + " " + userLastName;;

  }

  else userName.textContent = userEmail;
  cartLength.textContent = `CartList (${cartItems.length})`;

  // search button feauture 
  searchButton.addEventListener("click", async function () {
    const searchQuery = searchArea.value.trim();
    if (!searchQuery) return; // agar input empty ho toh kuch na karo

    const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const data = await response.json();

    productContainer.innerHTML = ""; // previous products clear karo

    if (data.products.length === 0) {
      // No products found
      loadMore.style.display = "none"; // hide Load More button
      productContainer.innerHTML = `
      <div style="text-align: center; font-size: 18px; padding: 20px;">
        No products found for "<strong>${searchQuery}</strong>". Try something else.
      </div>
    `;
    } else {
      loadMore.style.display = "block"; // show Load More button (optional)

      data.products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-gallary");
        productDiv.innerHTML = `
        <a href="../pages/Product_Detail.html?id=${product.id}">
          <img src="${product.images[0]}" />
        </a>
        <p class="desc">${product.description}</p>
        <p class="price-tag">Rs. <span class="span">${product.price}</span></p>
      `;
        productContainer.appendChild(productDiv);
      });
    }
  });



  // Filter feauture implemented on the data
  const allData = await fetch("https://dummyjson.com/products?limit=100");
  const allResponse = await allData.json();

  applyFilter.addEventListener("click", function () {
    const minPrice = document.querySelector("#min-price").value;
    const maxPrice = document.querySelector("#max-price").value;

    const filteredData = allResponse.products.filter(function (data) {
      return data.price > minPrice && data.price < maxPrice;
    })
    console.log(filteredData);

    productContainer.innerHTML = "";
    filteredData.map(function (data) {
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


  })




  // Logout feauture is implemented
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




  // All product data list
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

  // pagination load more functionality
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
