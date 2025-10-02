import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import uiuxImg from "../../Assests/Images/ui ux design.png";
import "./IndividualService.css";

function UIUXDesignPage() {
  usePageTitle("UI/UX Design - Services");

  const ServiceHeroData = {
    title: "UI/UX Design",
    subtitle: "Design intuitive and engaging user interfaces that provide exceptional user experiences across all platforms and devices.",
    backgroundImage: uiuxImg
  };

  const features = [
    {
      icon: "fas fa-paint-brush",
      title: "User Interface Design",
      description: "Beautiful, modern interfaces that align with your brand and engage users"
    },
    {
      icon: "fas fa-users",
      title: "User Experience Research",
      description: "In-depth research to understand your users' needs and behaviors"
    },
    {
      icon: "fas fa-drafting-compass",
      title: "Wireframing & Prototyping",
      description: "Interactive prototypes to visualize and test your product before development"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Designs that work seamlessly across all devices and screen sizes"
    },
    {
      icon: "fas fa-eye",
      title: "Visual Identity",
      description: "Consistent visual elements that strengthen your brand identity"
    },
    {
      icon: "fas fa-chart-line",
      title: "Usability Testing",
      description: "Testing and optimization to ensure the best possible user experience"
    }
  ];

  const technologies = [
    "Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer", 
    "Zeplin", "Marvel", "Miro", "Adobe Illustrator", "Photoshop", "After Effects"
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding your users, business goals, and market landscape through comprehensive research."
    },
    {
      step: "02", 
      title: "Wireframing & Planning",
      description: "Creating detailed wireframes and information architecture for optimal user flow."
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand visual designs that enhance user engagement."
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "User testing and iterative improvements to ensure optimal user experience."
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
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">View Designs</button>
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
            <h2>UI/UX Design Services</h2>
            <p>Comprehensive design solutions that create meaningful user experiences</p>
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
            <h2>Design Tools & Software</h2>
            <p>Professional tools for creating exceptional user experiences</p>
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
            <h2>Our Design Process</h2>
            <p>User-centered design methodology for exceptional results</p>
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
            <h2>Ready to Improve Your User Experience?</h2>
            <p>Let's create designs that your users will love and that drive business results.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Design Project</button>
              <button className="btn-secondary">Get Design Audit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UIUXDesignPage;