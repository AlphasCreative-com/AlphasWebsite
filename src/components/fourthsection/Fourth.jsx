import React, { useRef } from "react";
import SKILL from "../../Assests/Images/skill.png";
import "./Fourth.css";
import BarChart from "../barChart/BarChart";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function Fourth() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  return (
    <section ref={ref} className="our-skill">
      <div className="our-skill-img">
        <img src={SKILL} alt="skill img" />
        <div className="our-skill-img-info">
          <p>25+</p>
          <p>Years, Since We Serve You With Our Expertise</p>
        </div>
      </div>

      <div className="our-skill-info">
        <div className="our-skill-title">
          <h3>OUR SKILLS</h3>
          <h2>Discover our level best expertise</h2>
          <p>
            Welcome to Axole, where digital innovation meets creative
            excellence. As a premier digital agency, we pride ourselves on being
            at the forefront of technology.
          </p>
        </div>
        <div className="our-skill-chrt">
          <BarChart />
        </div>
      </div>
    </section>
  );
}

export default Fourth;
