import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

function Button({ text, href, className, ...props }) {
  return (
    <Link to={href} className={`btn ${className}`} {...props}>
      <span className="primary-text">{text}</span>
      <span className="secondary-text">{text}</span>
    </Link>
  );
}

export default Button;
