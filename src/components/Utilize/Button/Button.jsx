import React from "react";
import "./Button.css";

function Button({ text, className }) {
  return (
    <button className={`btn ${className}`}>
      <span className="primary-text">{text}</span>
      <span className="secondary-text">{text}</span>
    </button>
  );
}

export default Button;
