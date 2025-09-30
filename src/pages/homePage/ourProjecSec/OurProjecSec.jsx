import React, { useRef, useState } from "react";
import "./ourProjectSec.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import ArrowButton from "../../../components/Utilize/arrowButton/ArrowButton";

const OurProjecSec = () => {
  const ref = useRef();
  useIntersectionObserver(ref);
  const [current, setCurrent] = useState(1);

  const projects = [
    {
      id: 1,
      type: "Web Developments",
      title: "Artisan Marketplace",
      img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      type: "UI/UX Design",
      title: "Bliss Rebranding",
      img: "https://images.unsplash.com/photo-1648109941110-d30f859426ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      type: "Digital Marketing",
      title: "E-Commerce Shopping",
      img: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      type: "Digital Marketing",
      title: "Eco-Vision Branding",
      img: "https://images.unsplash.com/photo-1611586963544-edea7af076a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="ourProject-sec">
      <div className="ourProject-head">
        <div ref={ref} className="ourProject-title">
          <h2>Our recent projects</h2>
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