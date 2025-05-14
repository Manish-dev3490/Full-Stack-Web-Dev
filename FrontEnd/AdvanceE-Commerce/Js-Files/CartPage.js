const cartContainer = document.getElementById("cart-container");
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

async function renderCart() {
  cartContainer.innerHTML = "";

  // Sabhi product fetch promises banaye
  const fetchPromises = cartItems.map(id =>
    fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
  );

  // Promise.allSettled se sabka result milega (success + failure dono)
  const results = await Promise.allSettled(fetchPromises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const product = result.value;

      const item = document.createElement("div");
      item.className = "cart-item";
      item.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>Price: ₹${product.price}</p>
        <div class="quantity">
          <label for="qty-${product.id}">Qty:</label>
          <input type="number" id="qty-${product.id}" min="1" value="1" style="width: 3rem;" />
        </div>
        <button onclick="removeFromCart(${product.id})">Remove</button>
      `;

      cartContainer.appendChild(item);
    } else {
      console.warn(`❌ Product with ID ${cartItems[index]} failed to load:`, result.reason);
    }
  });
}

function removeFromCart(id) {
  const updatedCart = cartItems.filter(item => item !== id);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  location.reload();
}

window.addEventListener("load", renderCart);
