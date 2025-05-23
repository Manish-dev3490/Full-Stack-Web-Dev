import React from "react";
import ReactDOM from "react-dom/client";

// Created root where I have to append my container
const root = ReactDOM.createRoot(document.querySelector(".root"));
GetDataFromServer();


// This is a react functional component which is returning a pece f jsx which will convert into react.createElement syntax by the bebel and that also convert into object.. React Component is a react element which type is function..
function makeCard(props) {
    const { key, title, image, price } = props;
    return (
        <div key={key} style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
            <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h2>{title}</h2>
            <h4>₹{price}</h4>
        </div>
    );
}


// In this function we are calling a api and mapping over all the items we get and making cards from makeCard() function this function is returning us jsx which is at the end f the day react elemnt which convert into objects and all the object we are return through map function into container 2 and then rendering it in the root elements

async function GetDataFromServer() {
    const data = await fetch('https://dummyjson.com/products');
    const response = await data.json();


    // In this code there is only one drawback if we change the order of arguments ur code wil change 
    // const container2 = response.products.map(function (card) {
    //     return makeCard(card.id, card.title, card.price, card.images[0]);
    // });

    // so we can also pass object from here 
    const container2 = response.products.map(function (card) {
        return makeCard({
            key: card.id,
            title: card.title,
            price: card.price,
            image: card.images[0]
        });
    });

    // Render the container2 inside a parent container
    root.render(<div style={{ display: "flex", flexWrap: "wrap" }}>{container2}</div>);
}


