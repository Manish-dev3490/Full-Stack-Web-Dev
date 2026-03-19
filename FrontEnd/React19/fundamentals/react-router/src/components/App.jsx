import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";
import Header from "./Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/detail" element={<Detail/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
