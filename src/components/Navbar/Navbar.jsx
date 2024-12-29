import React, { useEffect, useState } from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import image from "../../Assests/Images/logooursite.png";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggelMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="" />
      </div>

      {/* Hamburger Icon for Mobile - Visible on Mobile*/}
      <button onClick={() => toggelMenu()} className="hamburger">
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
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="navbar-btn">
          <Sbutton text="Login" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
