import React from "react";
import "./specializeCard.css";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";

function SpecializeCard({ card }) {
  useIntersectionObserver(".specialize-card"); // observe the card

  return (
    <div className="specialize-card">
      <div className="specialize-card-icn">{card.icon}</div>

      <h3>{card.title}</h3>
      <p>{card.description}</p>

      <div className="specialize-card-btn">
        <span className="arrow-button-text">Read More</span>
        <button className="arrow-button" aria-label="Read More"></button>
      </div>
    </div>
  );
}

export default SpecializeCard;
