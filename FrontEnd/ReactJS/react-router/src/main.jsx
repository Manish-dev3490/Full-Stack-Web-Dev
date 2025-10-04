import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
