import React from "react";
import "./Sbutton.css";

function Button({ text }) {
  return (
    <div>
      <button className={`btn2`}>
        <span className="primary-text">{text}</span>
        <span className="secondary-text">{text}</span>
      </button>
    </div>
  );
}

export default Button;
