import React, { useState } from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";

const ExpandingServiceBar = ({ title, description, hasButton, buttonText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ease-in-out cursor-pointer w-full bg-white text-black text-left flex items-center overflow-hidden ${
        expanded ? "h-auto min-h-[12rem] pb-6" : "h-32"
      }`}
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
    >
      <div className="w-full max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-b border-gray-300 pb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[1.8rem] mt-8 mb-4 font-medium font-unbounded">{title}</h3>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform -rotate-45"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          {expanded && (
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-base leading-relaxed text-justify">{description}</p>
              <div className="mt-2 text-left">
                <Sbutton text="Inquire Now" className="service-btn" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandingServiceBar;
