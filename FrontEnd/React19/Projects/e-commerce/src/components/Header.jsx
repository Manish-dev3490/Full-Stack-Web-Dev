import React from 'react'

function Header() {
  return (
    <div className='header'>
      <h2 className='logo'>E-commerce App</h2>

      <div className="nav-container">
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>

        <div className="btn-group">
          <button className='user-btn'>User-name</button>
          <button className='logout-btn'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header