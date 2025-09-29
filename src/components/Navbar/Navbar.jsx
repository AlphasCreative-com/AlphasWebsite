import React, { useEffect, useState } from "react";
import image from "../../Assests/Images/Logo.webp";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleCallButtonClick = () => {
    console.log("Call Us button clicked");
  };

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="Company Logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <button onClick={toggleMenu} className="hamburger">
        <div className="hamburger-lines">
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        </div>
      </button>

      <div className={`navbar-actions ${isOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>

          <li className={`nav-item dropdown ${dropdownOpen ? "open" : ""}`}>
            <div className="flex items-center gap-1 cursor-pointer" onClick={toggleDropdown}>
              <span className="nav-link">Services</span>
              <span className="arrow"></span>
            </div>

            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <NavLink className="dropdown-link" to="/servicepagedev">Development</NavLink>
              </li>
              <li>
                <NavLink className="dropdown-link" to="/servicepagedes">Design</NavLink>
              </li>
        
            </ul>
          </li>

          <li>
            <NavLink className="nav-link" to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/portfolio">Projects</NavLink>
          </li>
        </ul>

        <div className="navbar-call-btn">
          <button className="call-button" onClick={handleCallButtonClick}>
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;