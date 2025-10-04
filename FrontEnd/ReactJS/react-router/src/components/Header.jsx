import { useState } from "react";
// This is the Header Component for our application

const Header = () => {
 const [status,setStatus]=useState("Login");
 
  return (
    <div className="header">
        <h1>Learning React Router</h1>
     
      <div className="navigation-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="cart-area">Cart</li>
          <button className="btn-login" onClick={()=>{
            if(status==="Login")setStatus("Logout");
            else setStatus("Login");
            
          }}>{status}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
