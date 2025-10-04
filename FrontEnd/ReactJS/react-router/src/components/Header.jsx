import { useState } from "react";
import { Link } from "react-router";  // ✅ v7 me react-router se hi

const Header = () => {
  const [status, setStatus] = useState("Login");

  return (
    <div className="header">
      <h1>Learning React Router</h1>

      <div className="navigation-bar">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li className="cart-area">Cart</li>
          <button
            className="btn-login"
            onClick={() => setStatus(status === "Login" ? "Logout" : "Login")}
          >
            {status}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
