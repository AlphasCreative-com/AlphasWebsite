import React from "react";
import "./arrowButton.css";
import { MdArrowOutward } from "react-icons/md";

function ArrowButton({ text }) {
  return (
    <button className="arrow-btn">
      <span>{text}</span>
      <div>
        <MdArrowOutward />
        <MdArrowOutward />
      </div>
    </button>
  );
}

export default ArrowButton;
