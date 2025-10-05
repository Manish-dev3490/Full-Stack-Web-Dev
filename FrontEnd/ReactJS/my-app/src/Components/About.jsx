// About.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <h1>About Desi Dhaba</h1>
        
        <p>
          Welcome to <strong>QuickEats</strong>, your number one destination for fast, reliable,
          and delicious food delivery. Our goal is to make every meal an experience you will
          remember. From local favorites to international cuisines, we bring the best restaurants
          right to your doorstep.
        </p>
        
        <p>
          At QuickEats, we believe food is more than just fuel; it is an experience that connects
          people. Our team works tirelessly to ensure that every order reaches you hot, fresh, and
          on time. With a user-friendly app and real-time tracking, ordering your favorite meals
          has never been easier.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: <strong>delicious food, delivered fast</strong>. We strive to
          make food ordering convenient and enjoyable for everyone. Whether you’re craving comfort
          food after a long day or want to explore new cuisines, QuickEats has got you covered.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast and reliable delivery within 30–45 minutes.</li>
          <li>Wide variety of restaurants and cuisines to choose from.</li>
          <li>Easy-to-use app with secure payment options.</li>
          <li>Special discounts and offers for our loyal customers.</li>
          <li>24/7 customer support to ensure satisfaction.</li>
        </ul>

        <h2>Our Story</h2>
        <p>
          QuickEats was founded with a simple idea: to make food delivery fast, reliable, and
          enjoyable. Over the years, we have partnered with hundreds of restaurants and served
          thousands of happy customers. Our team is passionate about food and dedicated to making
          every delivery a delightful experience.
        </p>

        <p>
          Thank you for trusting <strong>QuickEats</strong>. We promise to continue bringing
          your favorite meals with speed, quality, and care.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
