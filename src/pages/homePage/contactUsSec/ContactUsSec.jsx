import React, { useEffect, useRef } from "react";
import "./contactUsSec.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
function ContactUsSec() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      y: 10, // Moves up/down
      ease: "power2.out", // Smooth acceleration effect
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom", // Starts when it enters viewport
        end: "bottom top", // Ends when leaving viewport
        scrub: 2, // Smooth scrolling effect (higher = more delay)
      },
    });
  }, []);

  return (
    <div className="home-contact-us">
      <div ref={ref} className="home-contact-us-content">
        <h3>Have Any Project in Mind?</h3>
        <p>Subscribe Our Newsletter & Start The Project</p>
        <div className="home-contact-us-actions">
          <form className="home-contact-us-content-input">
            <input placeholder="Enter Your Email" type="text" />
            <button type="submit">Subscribe</button>
          </form>
          <Link to="/contact" className="contact-us-button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSec;
