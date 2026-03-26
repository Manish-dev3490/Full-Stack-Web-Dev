import React from 'react'

function Header() {

  const userData=localStorage.getItem("currentUser");
  const userName=JSON.parse(userData);
  console.log(userName.name);
  

  function handleLogout(){
    localStorage.removeItem("currentUser");
    window.location.reload();
  }

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
          <button className='user-btn'>{userName.name}</button>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Header