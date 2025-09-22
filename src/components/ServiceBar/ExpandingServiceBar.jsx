import React, { useState } from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";

const ExpandingServiceBar = ({ title, description, hasButton, buttonText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out cursor-pointer w-full bg-white text-black text-left flex items-center overflow-hidden border-b border-gray-300 ${
        expanded ? "h-auto min-h-[18rem] pb-8" : "h-48"
      }`}

    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
    >
      <div className="w-full">
        <h3 className="text-5xl m-12 font-semibold">{title}</h3>
        {expanded && (
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 mx-12 text-sm">{description}</p>
            {hasButton && (
              <div className="mx-12 mt-4">
                <Sbutton text={buttonText || "Inquire Now"} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandingServiceBar;
