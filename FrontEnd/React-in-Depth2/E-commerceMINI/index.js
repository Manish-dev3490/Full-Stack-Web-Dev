import React, { Children } from "react";
import ReactDOM from 'react-dom/client';
import Card from "./Components/Card"



// craeted the root where we have to render the cards
const root = ReactDOM.createRoot(document.querySelector(".root"));


// this is for fetching data and rendering on the UI
// fetch('https://dummyjson.com/products')
// .then((res)=>res.json())
// .then((data)=>{
//     root.render(
//         <>
//         {data.products.map(function(card){
//            return <Card card={card} key={card.id}/>
//         })}
//         </>
//     )

// })


// Jo hamara render method hai woh ek react ka element leta hai so look at the diffrent examples in am going to show you in the below code. Hum render ko direct react element bhi de sakte hai because at the end of the day yeh react element hee leta hai yeh object me convert hojayega

// root.render(React.createElement('h2',{},'Hello world '));



// React.createElement at the end of the day pure object me convert kar deta hai toh hum direct bhi render kar sakte hai object ko baat toh wohi huii but this is now not supported i am just telling you for the sake of depth
// root.render({
//     $$typeof:Symbol.for('react.element'),
//     type:'h2',
//     ref:null,
//     key:1,
//     props:{
//         attribute:{},
//         Children:'Hello world'
//     }
// })



// So FunctionalCOmponent is also a react element at the end of the day because it return some peices of jsx and those jsx is converted into React.createElement format and it is also converted into object but now this format is not supported it is good for knwoning behind the scenes only
function h2() {
    return <h2>Hello world ji</h2>
}

root.render({
    $$typeof: Symbol.for('react.element'),
    type: h2,
    ref: null,
    key: 1,
    props: {}
})

