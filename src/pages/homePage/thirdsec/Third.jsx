import React, { useRef } from "react";
import "./Third.css";
import Sbutton from "../../../components/Utilize/Secbutton/Sbutton";
import { GrReactjs } from "react-icons/gr";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import SpecializeCard from "./specializeCard/SpecializeCard";

function Third() {
  const ref = useRef();
  useIntersectionObserver(ref);

  const cards = [
    {
      icon: <GrReactjs />,
      title: "Web Developments",
      description:
        "Our expert team of web developers, designers, and strategists are dedicated to crafting cutting-edge websites.",
    },
    {
      icon: <GrReactjs />,
      title: "UI/UX Design",
      description:
        "Our expert team of web developers, designers, and strategists are dedicated to crafting cutting-edge websites.",
    },
    {
      icon: <GrReactjs />,
      title: "Digital Marketing",
      description:
        "Our expert team of web developers, designers, and strategists are dedicated to crafting cutting-edge websites.",
    },
  ];

  return (
    <section className="specialize-sec">
      <div className="specialize-head">
        <h3>OUR SPECIALIZE</h3>
        <div ref={ref} className="specialize-title">
          <h2>Our core services</h2>
          <Sbutton text="See Services" />
        </div>
      </div>
      <div className="specialize-cards">
        {cards.map((card, index) => (
          <SpecializeCard card={card} />
        ))}
      </div>
    </section>
  );
}

export default Third;
