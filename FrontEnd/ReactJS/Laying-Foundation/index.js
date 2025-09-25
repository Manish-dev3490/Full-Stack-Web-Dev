import React from "react";
import ReactDOM from 'react-dom/client'

//  Creating react element using React.CreateElemet using the core react
const h1 = React.createElement("h1", { id: 'head', className: 'heading' }, "hello world");
// console.log(h1);


// Making a react element using jsx 
const h2 = <h2>Hello world using jSX</h2>;
// console.log(h2);



// Functional component are normal js function which return peices of JSX

function HelloUsers() {
    return <h1>Hello World</h1>;
}


function Byeusers(props) {
    console.log(props);
    
    return (
        <div>
            <HelloUsers></HelloUsers>
            <p>Bye bye Users</p>
        </div>
    )
}



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Byeusers props={"data"}/>)