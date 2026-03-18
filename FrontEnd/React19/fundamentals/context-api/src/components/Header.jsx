import React from 'react'
import Display from './Display'
function Header({count}) {
  
  return (
    <>
    <h1>i am inside the header</h1>
    <Display count={count}/>
    </>
  )
}

export default Header