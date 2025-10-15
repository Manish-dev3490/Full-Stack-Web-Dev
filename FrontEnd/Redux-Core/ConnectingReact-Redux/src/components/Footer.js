import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        marginTop: "auto",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </p>
      <div style={{ marginTop: "5px" }}>
        <a
          href="#"
          style={{
            color: "white",
            margin: "0 10px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Privacy Policy
        </a>
        <a
          href="#"
          style={{
            color: "white",
            margin: "0 10px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Terms
        </a>
        <a
          href="#"
          style={{
            color: "white",
            margin: "0 10px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
