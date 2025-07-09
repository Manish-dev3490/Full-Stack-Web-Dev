const cartContainer = document.getElementById("cart-container");
const cartLength = document.getElementById('cart-length');
const checkoutBtn = document.getElementById("checkout-btn");

let userEmail = localStorage.getItem("userEmail");
const userName = document.querySelector(".user-name");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");

window.addEventListener("load", async function () {
  if (userFirstName && userLastName) {
    userName.innerText = userFirstName + " " + userLastName;
  } else {
    userName.textContent = userEmail;
  }

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


  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Handle empty cart at load
  if (cartItems.length === 0) {
    cartContainer.innerHTML = `<h3 style="text-align:center;">Your cart is empty.</h3>`;
    checkoutBtn.style.display = "none";
    cartLength.textContent = `CartList (0)`;
    return;
  }

  cartLength.textContent = `CartList (${cartItems.length})`;

  const data = cartItems.map(async function (id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  });

  const results = await Promise.allSettled(data);

  const products = results
    .filter(result => result.status === "fulfilled")
    .map(result => result.value);

  // Show checkout button if cart has items
  if (products.length > 0) {
    checkoutBtn.style.display = "inline-block";
  }

  products.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("cart-box");
    item.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" class="cart-img" />
      <div class="cart-info">
        <h3 class="cart-title">${product.title}</h3>
        <p class="cart-price">Price: ₹${product.price}</p>
        <div class="cart-actions">
          <label>Qty:</label>
          <input type="number" min="1" value="1" class="qty-input" />
          <button class="remove-btn" id="${product.id}">Remove</button>
        </div>
      </div>
    `;
    cartContainer.appendChild(item);
  });

  // Handle remove item from cart
  cartContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const cartItemDiv = e.target.closest(".cart-box");
      const productId = e.target.getAttribute("id");
      cartItemDiv.remove();

      cartItems = cartItems.filter(function (id) {
        return String(id) !== productId;
      });

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      cartLength.textContent = `CartList (${cartItems.length})`;

      if (cartItems.length === 0) {
        cartContainer.innerHTML = `<h3 style="text-align:center;">Your cart is empty.</h3>`;
        checkoutBtn.style.display = "none";
      }
    }
  });

  // Checkout Button Click Event
  checkoutBtn.addEventListener("click", function () {
    if (cartItems.length > 0) {
      // Here you can proceed to checkout, redirect to checkout page
      window.location.href = "../Pages/checkout.html"; // Modify the URL as per your structure
    } else {
      alert("Your cart is empty. Please add items to proceed.");
    }
  });
});
