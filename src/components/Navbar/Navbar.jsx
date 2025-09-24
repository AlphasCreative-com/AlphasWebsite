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
    setDropdownOpen(!dropdownOpen);
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
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <div className="flex items-center gap-1">
              <NavLink className="nav-link" to="/services">Services</NavLink>
              <svg 
                className="cursor-pointer w-4 h-4 transition-transform duration-200 inline-block ml-1"
                onClick={toggleDropdown}
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <ul className={`dropdown-menu absolute bg-white shadow-lg mt-2 py-2 ${dropdownOpen ? "block" : "hidden"}`}>
              <li><NavLink className="block px-4 py-2 hover:bg-gray-100" to="/servicepagedev">Development</NavLink></li>
              <li><NavLink className="block px-4 py-2 hover:bg-gray-100" to="/servicepagedes">Design</NavLink></li>
              <li><NavLink className="block px-4 py-2 hover:bg-gray-100" to="/services">All Services</NavLink></li>
            </ul>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li><NavLink className="dropdown-link" to="/servicepagedev">Development</NavLink></li>
              <li><NavLink className="dropdown-link" to="/servicepagedes">Design</NavLink></li>
              <li><NavLink className="dropdown-link" to="/services">All Services</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink className="nav-link" to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/portfolio">
              Projects
            </NavLink>
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