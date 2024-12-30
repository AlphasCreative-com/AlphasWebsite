import React from "react";
import "./Sbutton.css";

function Button({ text, className }) {
  return (
    <button className={`btn2 ${className}`}>
      <span className="primary-text">{text}</span>
      <span className="secondary-text">{text}</span>
    </button>
  );
}

export default Button;
