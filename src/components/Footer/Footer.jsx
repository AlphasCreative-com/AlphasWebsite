import Sbutton from "../Utilize/Secbutton/Sbutton";
import image from "../../Assests/Images/Logo.webp";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h2 className="footer-heading">Subscribe our news letter</h2>
            <p className="newsletter-description">
              Join us today, get updated everyday
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email..."
                className="newsletter-input"
              />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><NavLink to="/about" className="footer-link">About Us</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Our portfolio</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Our services</NavLink></li>
              <li><NavLink to="/careers" className="footer-link">Careers</NavLink></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Useful Links</h3>
            <ul className="footer-links">
              <li><NavLink to="/blog/grid" className="footer-link">Blog grid</NavLink></li>
              <li><NavLink to="/blog/standard" className="footer-link">Blog standard</NavLink></li>
              <li><NavLink to="/blog/details" className="footer-link">Blog details</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact us</NavLink></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <div className="copyright-content">
            <p className="copyright-text">
              Copyright © 2025 WPRealizer. All rights reserved.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;