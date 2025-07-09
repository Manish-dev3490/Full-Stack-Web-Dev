import React from "react";
import ReactDOM from "react-dom/client";

// Created root where I have to append my container
const root = ReactDOM.createRoot(document.querySelector(".root"));
GetDataFromServer();



// This is a react functional component which is returning a pece f jsx which will convert into react.createElement syntax by the bebel and that also convert into object.. React Component is a react element which type is function..
function MakeCard(props) {
    const {title, image, price } = props;
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
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
        return <MakeCard title={card.title} image={card.images[0] }  price={card.price} key={card.id}/>;
    });

    // Render the container2 inside a parent container
    root.render(<div style={{ display: "flex", flexWrap: "wrap" }}>{container2}</div>);
}


// we can also render functional component into the root render api accepst react element we can create react element but this syntax is not supported by react now it was supported in back 2023 so we will directly create element with react.createelemnt which also convert into object
// root.render({
//     $$typeof:Symbol.for('react.element'),
//     type:makeCard,
//     ref:null,
//     props:{
//         key:1,
//         title:"Apple iphone",
//         image:"https:://www.google.com",
//         price:2000
//     }
// })


// We are creating react element by using core react buty we also short its syntax by usning jsx
// root.render(React.createElement(makeCard, {

//     image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
//     price: 3000,
//     title: "Essence Mascara Lash Princess"
// }))


