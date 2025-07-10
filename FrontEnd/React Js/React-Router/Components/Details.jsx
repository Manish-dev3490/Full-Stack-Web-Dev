import React from 'react'
import { Outlet } from 'react-router'
function Details() {
  return (
    <>
    <div> I am inside Detail page component</div>
    <Outlet></Outlet>

   </>
   
  )
}

export default Details