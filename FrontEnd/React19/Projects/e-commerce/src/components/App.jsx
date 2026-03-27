import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import LoginForm from './LoginForm'
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About"
import Cart from './Cart'
import ProductDetail from './ProductDetail'


function App() {


  return (

    <div className='app-component'>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Body/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductDetail/>}/>
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App