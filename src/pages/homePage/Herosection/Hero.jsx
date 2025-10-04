import React, { useState, useEffect } from "react";
import Button from "../../../components/Utilize/Button/Button";
import Sbutton from "../../../components/Utilize/Secbutton/Sbutton";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const fullText = "Digital Solutions";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 250); // slower typing speed
      return () => clearTimeout(timer);
    } else {
      // Reset after 1.5 seconds
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1500); // wait before repeating
      return () => clearTimeout(resetTimer);
    }
  }, [index]);

  return (
    <div className="hero">
      <div className="hero-text">
        <h3>We Create</h3>
        {/* Fixed layout + glowing text */}
        <h1 className="glow-text">{displayedText || "\u00A0"}</h1>
        <h4>
          Our professional team is dedicated to helping you achieve your digital
          goals. From website design and development to branding
        </h4>
      </div>
      <div className="hero-btn">
      <Button
        className="btn01"
        text={"Contact Us"}
        onClick={() => navigate("/contact")}
      />
      <Sbutton
        className="btn02 white-variant"
        text={"Explore Services"}
        onClick={() => navigate("/services")}
      />

      </div>
    </div>
  );
}

export default Hero;
