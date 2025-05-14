const cartContainer = document.getElementById("cart-container");
const cartLength=document.getElementById('cart-length');
let userEmail = localStorage.getItem("userEmail");
const userName = document.querySelector(".user-name");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");
window.addEventListener("load", async function () {


    if (userFirstName && userLastName) {
    userName.innerText = userFirstName + " " + userLastName;;

  }

  else userName.textContent = userEmail;

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartItems.length);

    cartLength.textContent=`CartList (${cartItems.length})`;

    const data = cartItems.map(async function (id) {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        return res.json();
    })

    const results = await Promise.allSettled(data);

    const products = results
        .filter(result => result.status === "fulfilled")
        .map(result => result.value);


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
          <button class="remove-btn" data-id="${product.id}">Remove</button>
        </div>
      </div>

  `;
        cartContainer.appendChild(item);
    });




})