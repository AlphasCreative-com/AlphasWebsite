import React from "react";
import Button from "../Utilize/Button/Button";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h3>We Create</h3>
        <h1>Digital Solutions</h1>
        <h4>
          Our professional team is dedicated to helping you achieve your digital
          goals. From website design and development to branding
        </h4>
      </div>
      <div className="hero-btn">
        <Button className="btn01" text={"Get Started"} />
        
      </div>
    </div>
  );
}

export default Hero;
