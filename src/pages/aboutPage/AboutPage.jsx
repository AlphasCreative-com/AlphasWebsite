import React from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AboutPage() {
  const { ref: counterRef, inView: counterInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="about-container-modern">
      {/* Modern Hero Section */}
      <section className="about-hero-modern" ref={heroRef}>
        <div className="hero-background-modern">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content-modern">
          <div className={`hero-animation ${heroInView ? 'animate-in' : ''}`}>
            <div className="hero-badge-modern">
              <span style={{ color: '#1A6AFF' }}>● ABOUT US</span>
            </div>
            <h1 className="hero-title-about">
              Building Ideas Into 
              <span className="text-gradient-about"> Digital Realities</span>
            </h1>
            <p className="hero-subtitle-about">
              We specialise in Software Development, Digital Marketing, and Graphic Design - 
              helping businesses grow with smart technology, powerful campaigns, and creative visuals.
            </p>
            <div className="hero-features">
              <div className="feature-pill">
                <i className="fas fa-code" style={{ color: '#1A6AFF' }}></i>
                <span>Software Development</span>
              </div>
              <div className="feature-pill">
                <i className="fas fa-bullhorn" style={{ color: '#1A6AFF' }}></i>
                <span>Digital Marketing</span>
              </div>
              <div className="feature-pill">
                <i className="fas fa-paint-brush" style={{ color: '#1A6AFF' }}></i>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Approach Section */}
      <section className="approach-section-modern">
        <div className="container-about">
          <div className="approach-grid-modern">
            <div className="approach-content">
              <div className="section-badge-about">
                <span style={{ color: '#1A6AFF' }}>● OUR APPROACH</span>
              </div>
              <h2 className="approach-title">
                We Create Digital Solutions That 
                <span className="text-gradient-about"> Inspire, Engage, And Perform</span>
              </h2>
              <p className="approach-tagline">
                <em>We believe in bespoke strategies, designed specifically for your business needs.</em>
              </p>
            </div>
            <div className="approach-details">
              <div className="detail-card">
                <div className="detail-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="detail-content">
                  <h4>End-to-End Solutions</h4>
                  <p>
                    Our expertise spans Software Development, Digital Marketing, and Graphic Design,
                    enabling us to deliver comprehensive digital solutions that cover every aspect of your business needs.
                  </p>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-target"></i>
                </div>
                <div className="detail-content">
                  <h4>Results-Driven Process</h4>
                  <p>
                    We take the time to understand your needs, challenges, and opportunities, ensuring
                    every solution we provide leads to actionable, measurable results that drive real growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Counter Section */}
      <section className={`counter-section-modern ${counterInView ? "in-view" : ""}`} ref={counterRef}>
        <div className="container-about">
          <div className="counters-grid">
            {[
              { label: "Successful Projects", end: 50, icon: "fas fa-rocket" },
              { label: "Industry Specialists", end: 20, icon: "fas fa-users" },
              { label: "Industries Served", end: 10, icon: "fas fa-globe" },
              { label: "Years of Experience", end: 5, icon: "fas fa-award" },
            ].map((item, index) => (
              <div className="counter-card-modern" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="counter-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className={item.icon}></i>
                </div>
                <div className="counter-info">
                  <h3 className="counter-number">
                    {counterInView ? <CountUp end={item.end} duration={2} suffix="+" /> : "0+"}
                  </h3>
                  <p className="counter-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Values Section */}
      <section className="values-section-modern" ref={valuesRef}>
        <div className="container-about">
          <div className="values-header">
            <div className="section-badge-about">
              <span style={{ color: '#1A6AFF' }}>● WHY CHOOSE US</span>
            </div>
            <h2 className="values-title">
              Smart Solutions to Build 
              <span className="text-gradient-about"> Outstanding Performance</span>
            </h2>
            <p className="values-subtitle">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
            </p>
          </div>
          <div className="values-grid-modern">
            <div className={`value-card-modern ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="value-card-header">
                <div className="value-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-puzzle-piece"></i>
                </div>
                <h3>All-in-One Service</h3>
              </div>
              <p>Strategy, design, and development under one roof for seamless project execution.</p>
            </div>
            <div className={`value-card-modern ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="value-card-header">
                <div className="value-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Results That Matter</h3>
              </div>
              <p>We deliver measurable outcomes, not just outputs, focusing on your business success.</p>
            </div>
            <div className={`value-card-modern ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="value-card-header">
                <div className="value-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3>Agile Process</h3>
              </div>
              <p>Flexible and responsive methodology that adapts to your evolving goals and requirements.</p>
            </div>
            <div className={`value-card-modern ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="value-card-header">
                <div className="value-icon" style={{ backgroundColor: '#1A6AFF' }}>
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Transparent Collaboration</h3>
              </div>
              <p>Clear communication and regular updates at every stage of your project lifecycle.</p>
            </div>
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