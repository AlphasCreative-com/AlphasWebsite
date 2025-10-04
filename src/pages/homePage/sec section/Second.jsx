import React from "react";
import "./Second.css";

function Second() {
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
