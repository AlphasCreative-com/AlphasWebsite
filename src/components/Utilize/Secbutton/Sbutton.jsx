import React from "react";
import "./Sbutton.css";
import { Link } from 'react-router-dom';

function Sbutton({ text, href, className, ...props }) {
  return (
    <Link to={href} className={`btn2 ${className}`} {...props}>
      <span className="primary-text">{text}</span>
      <span className="secondary-text">{text}</span>
    </Link>
  );
}

export default Sbutton;
