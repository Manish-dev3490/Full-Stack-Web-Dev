import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Help from './Help'


function App() {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Help">Help</Link>

            </nav>

            <Routes>
                <Route path='/' element={<Home></Home>} ></Route>
                <Route path='/About' element={<About></About>} ></Route>
                <Route path='/Contact' element={<Contact></Contact>} ></Route>
                <Route path='/Help' element={<Help></Help>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;