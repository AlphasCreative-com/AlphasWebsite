import React from "react";
import "./specializeCard.css";
import ArrowButton from "../Utilize/arrowButton/ArrowButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SpecializeCard({ card }) {
  useIntersectionObserver(".specialize-card");
  return (
    <div className="specialize-card">
      <div className="specialize-card-icn">{card.icon}</div>

      <h3>{card.title}</h3>
      <p>{card.description}</p>

      <div className="specialize-card-btn">
        <ArrowButton text="Read More" />
      </div>
    </div>
  );
}

export default SpecializeCard;
