import { useState } from "react";
import { headerLogo } from "../utils/constData";
import { Link } from "react-router";
// This is the Header Component for our application

const Header = () => {
  const [status, setStatus] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={headerLogo}
          alt="logo"
        />
        <h1>Desi Dhaaba</h1>
      </div>

      <div className="navigation-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li className="cart-area"><Link to="/Cart">Cart</Link></li>
          <button className="btn-login" onClick={() => {
            if (status === "Login") setStatus("Logout");
            else setStatus("Login");

          }}>{status}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
