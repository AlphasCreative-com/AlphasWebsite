import React, { useRef } from "react";
import "./bar.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

function Bar({ bar }) {
  const ref = useRef(null);
  useIntersectionObserver(ref, 0.8);

  return (
    <div ref={ref} className="bar">
      <div className="bar-txt" style={{ width: `${bar.value}%` }}>
        <p>{bar.name}</p>
        <p>{bar.value}%</p>
      </div>

      <div className="bar-tab">
        <div className="bar-tab-inner" style={{ width: `${bar.value}%` }}></div>
      </div>
    </div>
  );
}

export default Bar;
