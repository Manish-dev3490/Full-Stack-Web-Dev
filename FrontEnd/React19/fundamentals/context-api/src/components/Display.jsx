import React from 'react'
import { useContext } from 'react'
import {StateContext} from './App.jsx'

function Display() {
    const value=useContext(StateContext);
    console.log("hello from display component");
    
  
  return (
        <>
        <p>Hello i am display component and count is : {value.count}</p>
        </>
  )
}

export default Display