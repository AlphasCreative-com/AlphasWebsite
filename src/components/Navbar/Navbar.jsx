import React from 'react'
import Sbutton from '../Utilize/Secbutton/Sbutton'
import  image  from "../../Assests/Images/logooursite.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="" />
      </div>

      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="navbar-btn">
        <Sbutton text="Login" />
      </div>
    </div>
  )
}

export default Navbar