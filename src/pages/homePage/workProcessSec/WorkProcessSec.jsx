import React, { useRef } from "react";
import "./workProcessSec.css";
import {
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
      title: "Planning An Idea",
      description:
        "Interact with stakeholders to understand basic functional and non-functional requirements of the software.",
      icon: <MdOutlineDraw />,
    },
    {
      id: "02",
      title: "Design & Development",
      description:
        "Interact with stakeholders to understand basic functional and non-functional requirements of the software.",
      icon: <MdOutlineSettingsSuggest />,
    },
    {
      id: "03",
      title: "Release & Support",
      description:
        "Interact with stakeholders to understand basic functional and non-functional requirements of the software.",
      icon: <MdSupportAgent />,
    },
  ];

  return (
    <section ref={ref} className="workprocess-sec">
      <div className="workprocess-head">
        <h3>WORK PROCESS</h3>
        <div className="workprocess-title">
          <h2>How we innovate</h2>
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
