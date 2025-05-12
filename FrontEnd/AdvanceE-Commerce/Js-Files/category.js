//  In this file i am going to consume category apis
const categoryContainer = document.querySelector(".category-container");


// Get the category from the URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');



window.addEventListener("load", async function () {
    const data = await fetch(`https://dummyjson.com/products/category/${category}`);
    const response = await data.json();
    console.log(response);

    response.products.map(function (data) {
        const product = document.createElement("div");
        product.classList.add("product-gallary");
        product.innerHTML = `
      <a href="">
   <img src="${data.images[0]}" loading="lazy">
 </a>
   <p>${data.description}</p>
   <p class="price-tag">Rs. <span class="span">${data.price}</span></p>
    `;
        categoryContainer.appendChild(product);

    })

})