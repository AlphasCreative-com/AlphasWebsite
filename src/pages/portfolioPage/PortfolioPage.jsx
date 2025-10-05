import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import "./Portfolio.css";
import Hero from "../../components/Abouthero/Hero";
import usePageTitle from "../../hooks/usePageTitle";

function PortfolioPage() {
  usePageTitle("Portfolio");
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Portfolio Projects */}
      <section className="portfolio-section">
        <h2>Our Creative Projects</h2>
        <p className="portfolio-description">
          We transform ideas into reality with stunning design, intuitive interfaces, and powerful development.
        </p>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>E-commerce Website</h3>
            <p>A sleek and responsive store with advanced product filtering and smooth checkout experience.</p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Brand Identity</h3>
            <p>Complete visual identity for a startup — logo, typography, color scheme, and brand guidelines.</p>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile App UI</h3>
            <p>A modern, user-friendly interface designed for cross-platform compatibility and intuitive navigation.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Work With Us</h2>
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