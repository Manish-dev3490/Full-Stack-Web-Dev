import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222",
        color: "white",
        padding: "10px 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <h1
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        MyShop
      </h1>

      {/* Navigation Links */}
      <nav>
        <a
          href="#"
          style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="#"
          style={{ marginRight: "20px", color: "white", textDecoration: "none" }}
        >
          Products
        </a>
        <a
          href="#"
          style={{ color: "white", textDecoration: "none" }}
        >
          Cart
        </a>
      </nav>
    </header>
  );
};

export default Header;
