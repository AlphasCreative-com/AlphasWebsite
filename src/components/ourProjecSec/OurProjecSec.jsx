import React, { useRef, useState } from "react";
import "./ourProjectSec.css";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import ArrowButton from "../Utilize/arrowButton/ArrowButton";

const OurProjecSec = () => {
  const ref = useRef();
  useIntersectionObserver(ref);
  const [current, setCurrent] = useState(1);

  const projects = [
    {
      id: 1,
      type: "Web Developments",
      title: "Artisan Marketplace",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/project/project-1.png",
    },
    {
      id: 2,
      type: "UI/UX Design",
      title: "Bliss Rebranding",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/project/project-2.png",
    },
    {
      id: 3,
      type: "Digital Marketing",
      title: "E-Commerce Shopping",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/project/project-4.png",
    },
    {
      id: 4,
      type: "Digital Marketing",
      title: "Eco-Vision Branding",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/project/project-3.png",
    },
  ];

  return (
    <section className="ourProject-sec">
      <div className="ourProject-head">
        <div ref={ref} className="ourProject-title">
          <h2>Our recent projects</h2>
          <Sbutton text="See All Projects" />
        </div>
      </div>
      <div className="ourProject-content">
        <div className="ourProject-content-img">
          {projects.map((project, index) => (
            <div
              key={`img-${index}`}
              className={`project-img ${
                index === current ? "active-project-img" : ""
              }`}
              style={{ backgroundImage: `url(${project.img})` }}
            />
          ))}
        </div>

        <div className="ourProject-content-cards">
          {projects.map((project, index) => {
            return (
              <div
                onMouseOver={() => setCurrent(index)}
                className={`ourProject-content-card ${
                  current === index ? "current" : ""
                }`}
                key={index}
              >
                <div className="ourProject-content-card-info">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="ourProject-content-card-btn">
                  <ArrowButton text={"Read More"} hover={current === index} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjecSec;
