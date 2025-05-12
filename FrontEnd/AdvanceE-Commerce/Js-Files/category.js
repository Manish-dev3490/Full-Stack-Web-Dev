//  In this file i am going to consume category apis
const categoryContainer=document.getElementsByClassName("category-container");
// Get the category from the URL
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

console.log(category); // Output: "women-bags"


window.addEventListener("load",async function(){
const data=await fetch(`https://dummyjson.com/products/category/${category}`);
const response=await data.json();
console.log(response);



})