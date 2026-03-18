import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { createContext } from 'react'

export const StateContext = createContext();

function App() {
  const [count, setCount] = useState(0);
    console.log("hello from app component");
    
  return (
    <StateContext value={{ count, setCount ,name:"hello"}}>
      <div >
        <Header />
        <Body />
        <Footer />
      </div>
    </StateContext>
  )
}

export default App