import React from "react";
import ReactDOM from 'react-dom/client';
import Card from "./Components/Card"



// craeted the root where we have to render the cards
const root = ReactDOM.createRoot(document.querySelector(".root"));


fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    root.render(
        <>
        {data.products.map(function(card){
           return <Card card={card} key={card.id}/>
        })}
        </>
    )
   
})



