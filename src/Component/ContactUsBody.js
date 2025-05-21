import React from "react";
import "../Component/Style/ContactUs.css";


const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Email, Call or Complete the form to learn how Agro World can help you.
        </p>

        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"></div>
              <span>info@agroworld.lk</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"></div>
              <span>+94 770111999</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"></div>
              <span>
                No. 14, Sir Baron Jayathilake Mawatha, Colombo 01, Western 00100, LK
              </span>
            </div>
            <button className="contact-button">Contact</button>
          </div>

          {/* Right Side - Support & Feedback */}
          <div>
            <h3 className="support-title">Customer Support</h3>
            <p className="support-text">
              Our support team is available around the clock to address any concerns
              or queries you may have.
            </p>

            <h3 className="support-title">Feedback and Suggestions</h3>
            <p className="support-text">
              We value your feedback and are continuously working to improve Agro
              World. Your input is crucial in shaping the ratings of Agro World.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
