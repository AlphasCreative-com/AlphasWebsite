import React, { useState } from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import "./Portfolio.css";
import Hero from "../../components/Abouthero/Hero";
import usePageTitle from "../../hooks/usePageTitle";
import skillpg from "../../Assests/Images/skill.png";

function PortfolioPage() {
  usePageTitle("Portfolio");

  const projects = [
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Website",
      desc: "A sleek and responsive store with advanced product filtering and smooth checkout experience.",
      features: ["Advanced filtering", "Secure payments"],
    },
    {
      icon: "fas fa-palette",
      title: "Brand Identity",
      desc: "Complete visual identity for a startup — logo, typography, color scheme, and brand guidelines.",
      features: ["Logo design", "Brand guidelines", "Marketing assets"],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App UI",
      desc: "A modern, user-friendly interface designed for cross-platform compatibility and intuitive navigation.",
      features: ["Cross-platform", "User testing", "Performance optimized"],
    },
    
    {
      icon: "fas fa-laptop-code",
      title: "Portfolio Website",
      desc: "Personal portfolio with interactive animations, modern layout, and SEO optimization.",
      features: ["Responsive layout", "SEO optimized", "Animated transitions"],
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Dashboard",
      desc: "Data analytics dashboard for cloud management with real-time metrics and data visualization.",
      features: ["Real-time updates", "Custom charts", "Secure API integration"],
    },
    {
      icon: "fas fa-lock",
      title: "Cybersecurity Platform",
      desc: "Security-focused platform offering real-time threat detection, monitoring, and reporting.",
      features: ["Threat analysis", "Risk management", "Secure architecture"],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  const visibleCards = projects.slice(startIndex, startIndex + 3);

  return (
    <div>
      <Hero />

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2>Our Creative Projects</h2>
        <p className="portfolio-description">
          We transform ideas into reality with stunning design, intuitive interfaces, and powerful development.
        </p>

        <div className="carousel-container">
          {/* Left Arrow */}
          <button className="carousel-arrow left" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Card Wrapper */}
          <div className="portfolio-grid">
            {visibleCards.map((project, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="portfolio-icon">
                      <i className={project.icon}></i>
                    </div>
                    <h3>{project.title}</h3>
                    <div className="flip-hint">
                      <i className="fas fa-sync-alt"></i> Click to explore
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <ul>
                      {project.features.map((f, i) => (
                        <li key={i}>- {f}</li>
                      ))}
                    </ul>
                    <button className="flip-cta">View Project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="carousel-arrow right" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>

   {/* Success Stories Section */}
<section className="success-stories-section">
  <div className="container">
    <h2>Success Stories</h2>
    <p className="stories-description">
      Discover how we've helped businesses transform their online presence and achieve remarkable results.
    </p>

    <div className="stories-grid">
      <div className="story-card">
        <div className="website-preview">
          <img src={skillpg} alt="cwoffee.com website" />
        </div>
        <div className="story-content">
          <div className="testimonial-text">
            <p>"My decision was correct! Instantestore provides me the perfect web platform with all the technical complexities."</p>
          </div>
          <div className="client-info">
            <div className="client-avatar">
              <img src={skillpg} alt="cwoffee.com website" />
            </div>
            <div className="client-details">
              <h3>Barbara Young</h3>
              <span>crazydelipons.com</span>
            </div>
          </div>
        </div>
      </div>

<div className="story-card">
  <div className="website-preview">
    <img src={skillpg} alt="cwoffee.com website" />
  </div>
  <div className="story-content">
    <div className="testimonial-text">
      <p>"We have successfully sold over $35 million dollars of products. The best business decision we ever made was going with Instantestore over competitive solutions."</p>
    </div>
    <div className="client-info">
      <div className="client-avatar">
        <img src={skillpg} alt="Preston Humphries" />
      </div>
      <div className="client-details">
        <h3>Preston Humphries</h3>
        <span>cwoffee.com</span>
      </div>
    </div>
  </div>
</div>
      
    </div>

    <div className="see-more-container">
      <button className="see-more-btn">SEE MORE ...</button>
    </div>
  </div>
</section>
      <section className="why-choose-section">
        <h2>Why Choose Us</h2>
        <p>
          Our passion for design and commitment to quality ensures that every project we undertake is pixel-perfect,
          user-friendly, and results-driven.
        </p>
        <Sbutton text="View More Projects" />
      </section>
    </div>
  );
}

export default PortfolioPage;