import React from 'react';
import './CircularArrows.css';

const CircularArrows = ({ onClick }) => {
  return (
    <button className="circular-arrow-button" onClick={onClick}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6"/>
      </svg>
    </button>
  );
};

export default CircularArrows;
