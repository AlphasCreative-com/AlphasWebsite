import React from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import image from "../../Assests/Images/logooursite.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="content">
      <div className="Logo">
        <img src={image} alt="" />
      </div>
      <div className="Items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="login">
        <Sbutton text={"Login"} />
      </div>
    </div>
  );
}

export default Navbar;
