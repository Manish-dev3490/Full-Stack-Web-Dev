import React from 'react';

function About() {
  return (
    <div className="about-page" style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1>About Us</h1>

      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        Welcome to our e-commerce platform! We aim to provide high-quality products 
        at affordable prices with a smooth and seamless shopping experience.
      </p>

      <h2 style={{ marginTop: "30px" }}>Our Mission</h2>
      <p style={{ lineHeight: "1.6" }}>
        Our mission is to make online shopping simple, fast, and reliable for everyone.
        We continuously improve our platform to give users the best experience.
      </p>

      <h2 style={{ marginTop: "30px" }}>Features</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li>🔍 Easy product search</li>
        <li>🛒 Add to cart functionality</li>
        <li>📂 Category-based filtering</li>
        <li>🔐 Secure authentication system</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>Contact Us</h2>
      <p style={{ lineHeight: "1.6" }}>
        Email: support@yourstore.com <br />
        Phone: +91 9876543210
      </p>

    </div>
  );
}

export default About;