import React from 'react'
import Counter from './Counter'
import { useContext } from 'react'
import {StateContext} from './App.jsx'
function Body() {
  const value=useContext(StateContext);
  console.log("hello from body component");

  return (
    <div>
      <h1>i am inside the body and count is : { value.count}</h1>
      <Counter />
    </div>
  )
}

export default Body