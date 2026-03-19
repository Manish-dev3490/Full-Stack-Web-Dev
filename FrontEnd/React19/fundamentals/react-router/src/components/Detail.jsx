import React from 'react'
import { Outlet } from 'react-router'
function Detail() {
  return (
    <div>
        <h1>I am inside the detail page</h1>
          <Outlet></Outlet>
    </div>
  
  )
}

export default Detail