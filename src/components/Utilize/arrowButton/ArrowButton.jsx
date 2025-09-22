import React from "react";
import "./arrowButton.css";
import { MdArrowOutward } from "react-icons/md";

function ArrowButton({ text, hover = false }) {
  return (
    <button className={`arrow-btn ${hover ? "hover" : ""}`}>
      <span>{text}</span>
      <div>
        <MdArrowOutward />
      </div>
    </button>
  );
}

export default ArrowButton;
