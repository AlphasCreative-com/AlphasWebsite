import React, { useState } from "react";

const ExpandingServiceBar = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ease-in-out cursor-pointer w-full bg-white text-black text-left  flex items-center overflow-hidden shadow-md ${
        expanded ? "h-60" : "h-48"
      }`}

    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
    >
      <div className="w-full">
        <h3 className="text-5xl m-32 font-semibold">{title}</h3>
        {expanded && <p className="text-gray-500 m-32 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default ExpandingServiceBar;
