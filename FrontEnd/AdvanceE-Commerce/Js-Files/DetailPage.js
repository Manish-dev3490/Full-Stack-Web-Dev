const detailcontainer = document.querySelector(".detail-container");
let userEmail = localStorage.getItem("userEmail");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const userLogo = document.querySelector("#user-logo");
const logOutButton = document.getElementById("logout-btn");
const userName = document.querySelector(".user-name");
const userFirstName = localStorage.getItem("userFirstName");
const userLastName = localStorage.getItem("userLastName");

const cartLength = document.getElementById('cart-length');
console.log(cartLength);


window.addEventListener("load", async function () {

    try {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartLength.textContent = `CartList (${cartItems.length})`;


        if (!userEmail) {
            window.location.href = "../Pages/SignIn.html";
        }

        cartLength.textContent = `CartList (${cartItems.length})`;

        if (userFirstName && userLastName) {
            userName.innerText = userFirstName + " " + userLastName;

        }
        else userName.textContent = userEmail;


        if (userLogo && logOutButton) {
            userLogo.addEventListener("click", function () {
                const currentDisplay = getComputedStyle(logOutButton).display;
                logOutButton.style.display =
                    currentDisplay === "none" ? "block" : "none";
            });
        }

        if (logOutButton) {
            logOutButton.addEventListener("click", function () {
                localStorage.clear();
                window.location.href = "../Pages/SignIn.html";
            });
        }

        const data = await fetch(`https://dummyjson.com/products/${id}`);
        const response = await data.json();


        const detail = document.createElement("div");
        detail.classList.add("detail-box");
        detail.innerHTML = `
        <img class="big-img" src="${response?.images[0]}">
        <div class="detail">
        <div class="info-section">
    <h2 class="product-title">${response.title}</h2>
    <p class="product-description">
      ${response.description}
    </p>
    <p class="product-price">Price: ₹${response.price}</p>
    <p class="product-discount">Discount: ₹${response.discountPercentage}</p>

    <p class="product-rating">Rating: ⭐ 4.5/5</p>
    <p class="product-warranty">Warranty:  ${response.warrantyInformation}</p>
    <p class="stock">Stock:  ${response.stock}</p>
    <p class="stock">Availability Status:  ${response.availabilityStatus}</p>
    <p class="returnPolicy
"> Return Policy:  ${response.returnPolicy}</p>

    <p class="shippingInformation
">shippingInformation
:  ${response.shippingInformation}</p>
    <p class="category">Category: ${response.category}</p>





    <div class="btn-group">
      <button class="btn cart-btn">Add to Cart</button>
    </div>
        `;





        detailcontainer.appendChild(detail);
        const imageGallary = document.createElement("div");
        imageGallary.classList.add("image-gallary");
        response.images.map(function (data) {
            const subImages = document.createElement("img");
            subImages.classList.add("sub-images");

            subImages.src = `${data}`;
            imageGallary.appendChild(subImages);

            subImages.addEventListener("click", function (event) {
                let bigImg = document.querySelector(".big-img");
                bigImg.src = event.target.src;
            });
        });
        detailcontainer.appendChild(imageGallary);

        const AddCart = document.querySelector(".cart-btn");






        AddCart.addEventListener("click", function () {
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            console.log(cartItems);

            // Agar duplicate na chahiye toh pehle check kar lein
            if (!cartItems.includes(id)) {
                cartItems.push(id);
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                alert("Item added to cart!");
                window.location.reload();
            } else {
                alert("Item already in cart");
            }
        });


    } catch { }
});
