import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TestimonialsSec from "../../pages/homePage/testimonialsSec/TestimonialsSec";

function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Building Ideas Into Digital Realities</h1>
          <p className="hero-subtitle">
            We specialise in Software Development, Digital Marketing, and Graphic Design
          </p>
          <p>
            helping businesses grow with smart technology, powerful campaigns, and creative visuals.
          </p>
        </div>
      </section>

      {/* Company Approach Section */}
      <section className="approach-section">
        <div className="approach-grid">
          <div className="approach-left">
            <h2>We Create Digital Solutions That Inspire, Engage, And Perform.</h2>
            <p><em>We believe in bespoke strategies, designed specifically for your business needs.</em></p>
          </div>
          <div className="approach-right">
            <p>
              Our expertise spans Software Development, Digital Marketing, and Graphic Design,
              enabling us to deliver end-to-end digital solutions. Whether you are aiming to build
              your presence or an established business looking to scale, we craft strategies and
              tools that fit your unique goals.
            </p>
            <p>
              We take the time to understand your needs, challenges, and opportunities, ensuring
              every solution we provide leads to actionable measurable results. By including
              cutting-edge technology, user-centric thinking, and seamless integration, we not only
              give competitors but with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className={`counter-section ${inView ? "in-view" : ""}`} ref={ref}>
        {[
          { label: "Successfull Projects", end: 50 },
          { label: "Industry Specialists", end: 20 },
          { label: "Industries Served", end: 10 },
          { label: "Year if Experience", end: 5 },
        ].map((item, index) => (
          <div className="counter-box" key={index}>
            <h2>{inView ? <CountUp end={item.end} duration={2} suffix="+" /> : "0+"}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="values-section">
  <h2>Why Choose Us</h2>
  <p>Smart Solution to Build an Outstanding Performance Easily.</p>
  <div className="values-grid">
    <div className="value-card">
      <i className="fas fa-puzzle-piece"></i>
      <h3>All-in-One Service</h3>
      <p>Strategy, design, and development under one roof.</p>
    </div>
    <div className="value-card">
      <i className="fas fa-chart-line"></i>
      <h3>Results That Matter</h3>
      <p>We deliver outcomes, not just outputs.</p>
    </div>
    <div className="value-card">
      <i className="fas fa-sync-alt"></i>
      <h3>Agile Process</h3>
      <p>Flexible and responsive to your goals.</p>
    </div>
    <div className="value-card">
      <i className="fas fa-comments"></i>
      <h3>Transparent Collaboration</h3>
      <p>Clear communications and updates at every stage.</p>
    </div>
  </div>
</section>

{/* Process Image Section */}
<section className="process-image">
  <img src={require("../../Assests/Images/Process.png")} alt="Our Process" />
</section>

      {/* Vision & Mission */}
     <section className="vision-mission">
  <div className="vm-wrapper">
    <div className="vm-left">
      <h2>What is Alpha’s Creative Purpose & Principle</h2>
      <h4>Our purpose guides every solution we create.</h4>
      <p>
        At Alpha Creative, we believe digital excellence starts with alignment. Every project we take on is driven by creativity, strategy, and technology—all moving in a clear direction. We integrate mission-driven values and push boundaries with every solution we build.
      </p>
    </div>
    <div className="vm-right">
      <div className="vm-card">
        <h3>Our Vision</h3>
        <p>Empowering businesses with cutting-edge digital solutions.</p>
      </div>
      <div className="vm-card">
        <h3>Our Mission</h3>
        <p>Turning ideas into impactful digital experiences with expert digital solutions.</p>
      </div>
      <div className="vm-card">
        <h3>Our Motto</h3>
        <p>Create. Innovate. Elevate.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default AboutPage;