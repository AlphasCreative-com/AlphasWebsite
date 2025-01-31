import React, { useEffect, useState } from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import image from "../../Assests/Images/Logo.webp";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={image} alt="Company Logo" />
        </div>

        <div className="footer-grid">
          {/* Address Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Address</h3>
            <p className="footer-text">New York — 785 18h Street, Office 778</p>
            <p className="footer-text">Berlin, De 81226</p>
            <p className="footer-text">+880.000.1111.111</p>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="footer-heading">For Company</h3>
            <ul className="footer-links">
              <li><NavLink to="/about" className="footer-link">About Us</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Core Services</NavLink></li>
              <li><NavLink to="/blog" className="footer-link">Blogs and News</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Important Links</h3>
            <ul className="footer-links">
              <li><NavLink to="/faq" className="footer-link">FAQ's</NavLink></li>
              <li><NavLink to="/terms" className="footer-link">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy" className="footer-link">Privacy Policy</NavLink></li>
              <li><NavLink to="/help" className="footer-link">Help Centre</NavLink></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Type Your Email"
                className="newsletter-input"
              />
              <div className="newsletter-button">
                <Sbutton text="Subscribe" type="submit" />
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-text">
            © 2024 All Rights Reserved. Axole is Proudly Powered by WPrealizer.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;