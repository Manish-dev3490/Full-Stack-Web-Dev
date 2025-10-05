import Header from "./Header";
import Body from "./Body";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import NotFound from "./NotFound";
import Detail from "./Detail";
import Footer from "./Footer";

// This is our App level component all the other sub component will be inside it 
const App = () => {
    return (
        <div className="App-Comp">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Contact" element={<Contact></Contact>}></Route>
                <Route path="/Cart" element={<Cart></Cart>}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)


export default App;