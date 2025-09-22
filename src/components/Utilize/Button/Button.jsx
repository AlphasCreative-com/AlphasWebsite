import React from "react";
import "./Button.css";
import { Link } from 'react-router-dom';

function Button({ text, href, className, onClick, ...props }) {
  const Component = href ? Link : 'button';
  const linkProps = href ? { to: href } : { onClick };
  
  return (
    <Component className={`btn ${className}`} {...linkProps} {...props}>
      <span className="primary-text">{text}</span>
      <span className="secondary-text">{text}</span>
    </Component>
  );
}

export default Button;
