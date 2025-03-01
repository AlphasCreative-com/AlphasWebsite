import React, { useRef, useState } from "react";
import "./testimonialsSec.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function TestimonialsSec() {
  const ref = useRef(null);
  useIntersectionObserver(ref);
  const [currentIndex, setCurrenIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const testimonials = [
    {
      id: 1,
      name: "Thomas Martin",
      title: "Designer, International Company",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/testimonial/tm-1.png",
      description:
        "Axole exceeded our expectations with their innovative solutions and impeccable design. Their team's commitment to excellence transformed our digital presence and significantly enhanced user engagement. Truly a reliable partner in the digital landscape!",
    },

    {
      id: 2,
      name: "Alexander Carter",
      title: "Designer, International Company",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/testimonial/tm-2.png",
      description:
        "Axole exceeded our expectations with their innovative solutions and impeccable design. Their team's commitment to excellence transformed our digital presence and significantly enhanced user engagement. Truly a reliable partner in the digital landscape!",
    },

    {
      id: 3,
      name: "Alexander Carter",
      title: "Designer, International Company",
      img: "https://themeforest.wprealizer.com/axole-html-template/axole-html/assets/images/testimonial/tm-3.png",
      description:
        "Axole exceeded our expectations with their innovative solutions and impeccable design. Their team's commitment to excellence transformed our digital presence and significantly enhanced user engagement. Truly a reliable partner in the digital landscape!",
    },
  ];

  const handelNext = () => {
    setDirection("next");
    setCurrenIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => {
      setDirection("");
    }, 500);
  };

  const handelPrevious = () => {
    setDirection("prev");
    setCurrenIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => {
      setDirection("");
    }, 500);
  };

  return (
    <section ref={ref} className="our-testimonial">
      <div className="testimonial-head">
        <h3>OUR TESTIMONIALS</h3>
        <div className="testimonial-title">
          <h2>OUR TESTIMONIALS</h2>

          <div className="testimonial-scroll-btns">
            <button onClick={handelPrevious} className="testimonial-scroll-btn">
              <IoIosArrowBack />
            </button>
            <button onClick={handelNext} className="testimonial-scroll-btn">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-img-box">
          {testimonials.map((testimonial, index) => (
            <div
              key={`img-${index}`}
              style={{ backgroundImage: `url(${testimonial.img})` }}
              className={`testimonial-img ${
                index === currentIndex && "active"
              }`}
            ></div>
          ))}
        </div>

        <div className="testimonial-info">
          <div className={`testimonial-info-card ${direction}`}>
            <p className="testimonial-info-desc">
              “{testimonials[currentIndex].description}”
            </p>
            <p className="testimonial-info-name">
              {testimonials[currentIndex].name}
            </p>
            <p className="testimonial-info-title">
              {testimonials[currentIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSec;
