import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./Components/Footer"


// This is our App level component all the other sub component will be inside it 
const App = () => {
    return (
        <div className="App-Comp">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


// This is the root of our application in which we have to render our whole application app level component
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App></App>)