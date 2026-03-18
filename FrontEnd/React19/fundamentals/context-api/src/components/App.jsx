import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { createContext } from 'react'

const StateContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <StateContext value={{ count, setCount }}>
      <div >
        <Header count={count} />
        <Body count={count} setCount={setCount} />
        <Footer />
      </div>
    </StateContext>
  )
}

export default App