import React from "react";
import "./Second.css";
import { useEffect } from "react";

function Second() {
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'animate' class when the section is in view
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing after animation trigger
        }
      });
    }, options);

    // Start observing the .home-aboutus-info section
    const section = document.querySelector(".home-aboutus-info");
    observer.observe(section);

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div className="home-aboutus">
      <div className="home-aboutus-info">
        <h3>ABOUT US</h3>
        <h2>
          <p>Empower your innovative</p>
          <p>ideas with Axole</p>
        </h2>
        <p>
          Welcome to Axole, where digital innovation meets creative excellence.
          As a premier digital agency, we pride ourselves on being at the
          forefront of technology.
        </p>

        <div className="home-aboutus-info-wrap">
          <div>
            <span>25+</span>
            <p>Successfully Completed Project</p>
          </div>
          <div>
            <span>6k+</span>
            <p>Successfully Completed Project</p>
          </div>
        </div>
      </div>
      <div className="home-aboutus-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/VCPGMjCW0is?playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fthemeforest.wprealizer.com&widgetid=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Second;
