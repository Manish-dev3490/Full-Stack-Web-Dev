import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Help from './Help'
import Details from './Details';
import Zero from './Zero';
import Hi from "./Hi"
import Hello from "./Hello"



function App() {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Help">Help</Link>
                <Link to="/Details">Details</Link>

            </nav>

            <Routes>
                <Route path='/' element={<Home></Home>} ></Route>
                <Route path='/About' element={<About></About>} ></Route>
                <Route path='/Contact' element={<Contact></Contact>} ></Route>
                <Route path='/Help' element={<Help></Help>} ></Route>


                {/*  This is how we create nested routes using react router library  */}
                <Route path='/Details' element={<Details></Details>}>
                    {/* This will render by default in details page */}
                    <Route index element={<Zero></Zero>}></Route>
                    <Route path='Hi' element={<Hi></Hi>}></Route>
                    <Route path='Hello' element={<Hello></Hello>}></Route>


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;