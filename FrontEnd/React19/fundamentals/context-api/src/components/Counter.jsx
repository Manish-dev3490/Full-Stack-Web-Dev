import React from 'react'
import { useContext } from 'react'
import {StateContext} from './App.jsx'

function Counter() {
  const value=useContext(StateContext);
  console.log("hello from counter component");
  
  
  return (
    <div>
        <p>i am inside the counter commponent and let me change the value of count : {value.count}</p>
        <button  onClick={()=>value.setCount(value.count+1)}>increment</button>
        <button onClick={()=>value.setCount(value.count-1)}>decrement</button>
    </div>
  )
}

export default Counter