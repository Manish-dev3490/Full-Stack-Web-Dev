// Contact.jsx
import React from "react";
import Header from "./Header";
import Footer from "./footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>
          Have questions, feedback, or just want to say hello? We'd love to hear from you! 
          Fill out the form below or reach out via email or phone.
        </p>

        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Write your message here"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Our Contact Info</h2>
            <p><strong>Email:</strong> support@quickeats.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> 123 Food Street, Delhi, India</p>
            <p><strong>Working Hours:</strong> Mon-Sun, 9:00 AM - 10:00 PM</p>

            <h3>Follow Us</h3>
            <p>
              <strong>Facebook:</strong> facebook.com/quickeats <br />
              <strong>Instagram:</strong> instagram.com/quickeats <br />
              <strong>Twitter:</strong> twitter.com/quickeats
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us Here</h2>
          <iframe
            title="QuickEats Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0000000000005!2d77.00000000000001!3d28.00000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce00000000001%3A0x0000000000000000!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
