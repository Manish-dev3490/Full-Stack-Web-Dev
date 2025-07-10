import React from 'react'
import { Outlet } from 'react-router'
function Details() {
  return (
    <Outlet>
    <div> I am inside Detail page component</div>
    </Outlet>
  )
}

export default Details