import React from 'react'
import Display from './Display'
function Header() {
  console.log("hello from header component");
  
  return (
    <>
    <h1>i am inside the header</h1>
    <Display/>
    </>
  )
}

export default Header