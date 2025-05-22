import React from "react";
import ReactDOM from "react-dom/client";

// Created root where I have to append my container
const root = ReactDOM.createRoot(document.querySelector(".root"));
GetDataFromServer();

function makeCard(id, title, price, image) {
    return (
        <div key={id} style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h2>{title}</h2>
            <h4>₹{price}</h4>
        </div>
    );
}

async function GetDataFromServer() {
    const data = await fetch('https://dummyjson.com/products');
    const response = await data.json();

    const container2 = response.products.map(function (card) {
        return makeCard(card.id, card.title, card.price, card.images[0]);
    });

    // Render the container2 inside a parent container
    root.render(<div style={{ display: "flex", flexWrap: "wrap" }}>{container2}</div>);
}
