import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import seoImg from "../../Assests/Images/SEO.webp";
import "./IndividualService.css";
import { Link } from "react-router-dom";

function SEOServicesPage() {
  usePageTitle("SEO Services - Services");

  const ServiceHeroData = {
    title: "SEO Services",
    subtitle: "Improve your search engine rankings and organic visibility with our comprehensive SEO strategies that drive sustainable traffic and growth.",
    backgroundImage: seoImg
  };

  const features = [
    {
      icon: "fas fa-search",
      title: "On-Page SEO",
      description: "Optimize your website's content, structure, and HTML elements for better search rankings"
    },
    {
      icon: "fas fa-cogs",
      title: "Technical SEO",
      description: "Improve your website's technical foundation for better crawlability and indexing"
    },
    {
      icon: "fas fa-link",
      title: "Link Building",
      description: "Build high-quality backlinks to increase your domain authority and rankings"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Local SEO",
      description: "Optimize your business for local search results and Google My Business"
    },
    {
      icon: "fas fa-keyboard",
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right terms for your business"
    },
    {
      icon: "fas fa-chart-line",
      title: "SEO Analytics",
      description: "Detailed reporting and analysis to track your SEO performance and ROI"
    }
  ];

  const technologies = [
    "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", 
    "GTMetrix", "PageSpeed Insights", "Yoast SEO", "Schema.org", "Google Tag Manager", "Hotjar"
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance and identification of opportunities."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Creating a customized SEO strategy based on your business goals and market analysis."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Executing on-page, technical, and off-page SEO improvements according to best practices."
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous monitoring of rankings and performance with detailed monthly reports."
    }
  ];

  return (
    <div className="individual-service-page">
      {/* Hero Section */}
      <div className="service-individual-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">{ServiceHeroData.title}</h1>
              <p className="hero-subtitle">{ServiceHeroData.subtitle}</p>
              <div className="hero-buttons">
               <Link to="/contact" className="transform-button">
  Get Started
</Link>

                <button className="btn-secondary">Free SEO Audit</button>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="hero-bg"
          style={{ backgroundImage: `url(${ServiceHeroData.backgroundImage})` }}
        ></div>
      </div>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <h2>SEO Services We Offer</h2>
            <p>Comprehensive search engine optimization to boost your online visibility</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-technologies">
        <div className="container">
          <div className="section-header">
            <h2>SEO Tools & Analytics</h2>
            <p>Professional SEO tools for comprehensive optimization and tracking</p>
          </div>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our SEO Process</h2>
            <p>Proven methodology for sustainable search engine optimization results</p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Rank Higher in Search Results?</h2>
            <p>Let's improve your search rankings and drive more organic traffic to your website.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start SEO Project</button>
              <button className="btn-secondary">Get Free SEO Report</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SEOServicesPage;