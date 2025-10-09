import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import webDevImg from "../../Assests/Images/web.jpg";
import "./IndividualService.css";
import { Link } from "react-router-dom";

function WebDevelopmentPage() {
  usePageTitle("Web Development - Services");

  const ServiceHeroData = {
    title: "Web Development",
    subtitle: "Create stunning, responsive websites and web applications that engage users and deliver exceptional experiences across all devices and platforms.",
    backgroundImage: webDevImg
  };

  const features = [
    {
      icon: "fas fa-code",
      title: "Custom Web Applications",
      description: "Build powerful, scalable web applications tailored to your business needs"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Ensure your website looks perfect on all devices, from mobile to desktop"
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description: "Create powerful online stores that drive sales and enhance customer experience"
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance Optimization",
      description: "Fast-loading websites that provide excellent user experience and SEO benefits"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Maintenance",
      description: "Secure, reliable websites with ongoing maintenance and support"
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimized",
      description: "Built with SEO best practices to improve your search engine visibility"
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", 
    "PHP", "WordPress", "Shopify", "MongoDB", "PostgreSQL", "AWS"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes that align with your brand and user experience goals."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers bring the designs to life using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures quality, then we deploy your website and provide ongoing support."
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

                <button className="btn-secondary">View Portfolio</button>
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
            <h2>What We Offer</h2>
            <p>Comprehensive web development services to transform your digital presence</p>
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
            <h2>Technologies We Use</h2>
            <p>Cutting-edge tools and frameworks for modern web development</p>
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
            <h2>Our Development Process</h2>
            <p>A proven methodology that ensures successful project delivery</p>
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
            <h2>Ready to Build Your Website?</h2>
            <p>Let's create a stunning web presence that drives results for your business.</p>
            <div className="cta-buttons">
              
             <Link to="/contact" className="btn-secondary">
  Get Free Quote
</Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopmentPage;