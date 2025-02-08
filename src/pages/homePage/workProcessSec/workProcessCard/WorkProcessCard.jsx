import React, { useRef } from "react";
import "./WorkProcessCard.css";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";

function WorkProcessCard({ card }) {
  const ref = useRef();
  useIntersectionObserver(ref);

  return (
    <div ref={ref} className="workpro-crd-box">
      <div className="workpro-crd">
        <div className="workpro-crd-id">
          <p>{card.id}</p>
        </div>

        <div className="workpro-crd-icn">{card.icon}</div>

        <h3 className="workpro-crd-title">{card.title}</h3>
        <p className="workpro-crd-disc">{card.description}</p>
      </div>
    </div>
  );
}

export default WorkProcessCard;
