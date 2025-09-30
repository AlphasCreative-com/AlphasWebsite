import React, { useRef } from "react";
import "./workProcessSec.css";
import {
  MdDescription,
  MdOutlineDraw,
  MdOutlineSettingsSuggest,
  MdSupportAgent,
} from "react-icons/md";
import WorkProcessCard from "./workProcessCard/WorkProcessCard";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const WorkProcessSec = () => {
  const ref = useRef(null);
  useIntersectionObserver(ref);

  const cards = [
    {
      id: "01",
      title: "Strategic Planning & Solution",
      description:
        "Send us questions and questionnaires to gather key information.",
      icon: <MdOutlineDraw />,
      step: "Step 01",
    },
    {
      id: "02",
      title: "Monitoring & Optimization",
      description:
        "Send us questions and questionnaires to gather key information.",
      icon: <MdOutlineSettingsSuggest />,
      step: "Step 02",
    },
    {
      id: "03",
      title: "Training & Knowledge Transfer",
      description:
        "Send us questions and questionnaires to gather key information.",
      icon: <MdSupportAgent />,
      step: "Step 03",
    },
    {
      id: "04",
      title: "Final Documentation",
      description:
        "Send us questions and questionnaires to gather key information.",
      icon: <MdDescription />,
      step: "Step 04",
    },
  ];

  return (
    <section ref={ref} className="workprocess-sec">
      <div className="workprocess-head">
        <div className="workprocess-title">
          <h2>How to Solve the Problems.</h2>
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress" style={{ width: '100%' }}>
                <span>Client Satisfaction of Our First Priority</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="workprocess-cards">
        {cards.map((card, index) => (
          <WorkProcessCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default WorkProcessSec;
