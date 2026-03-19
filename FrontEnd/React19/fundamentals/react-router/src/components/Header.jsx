import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div style={{display:"flex", gap:"10px",alignItems:"center" ,backgroundColor:"cadetblue"}}>
        <h1>Learning react Router</h1>
        <ul style={{display:"flex", gap:"10px"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/detail"}>Detail</Link>

        </ul>
    </div>
  )
}

export default Header