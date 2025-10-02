import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import brandImg from "../../Assests/Images/brand identity.png";
import "./IndividualService.css";

function BrandIdentityPage() {
  usePageTitle("Brand Identity - Services");

  const ServiceHeroData = {
    title: "Brand Identity",
    subtitle: "Build a strong brand identity that resonates with your audience and sets you apart from competitors with cohesive visual and strategic branding.",
    backgroundImage: brandImg
  };

  const features = [
    {
      icon: "fas fa-palette",
      title: "Logo Design",
      description: "Memorable and impactful logo designs that represent your brand's essence and values"
    },
    {
      icon: "fas fa-book",
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to ensure consistent application across all touchpoints"
    },
    {
      icon: "fas fa-eye",
      title: "Visual Identity System",
      description: "Complete visual identity including colors, typography, and design elements"
    },
    {
      icon: "fas fa-file-alt",
      title: "Brand Strategy",
      description: "Strategic brand positioning and messaging that connects with your target audience"
    },
    {
      icon: "fas fa-print",
      title: "Print Design",
      description: "Business cards, brochures, and other print materials that reinforce your brand"
    },
    {
      icon: "fas fa-laptop",
      title: "Digital Assets",
      description: "Digital brand assets optimized for web, social media, and online platforms"
    }
  ];

  const technologies = [
    "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "Sketch", "Canva", 
    "Brand.ai", "Frontify", "Adobe XD", "Pantone", "Typography.com", "Unsplash"
  ];

  const process = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "Understanding your business, values, target audience, and competitive landscape."
    },
    {
      step: "02", 
      title: "Strategy & Positioning",
      description: "Developing brand strategy, positioning, and messaging that resonates with your audience."
    },
    {
      step: "03",
      title: "Visual Identity Creation",
      description: "Designing logo, color palette, typography, and all visual brand elements."
    },
    {
      step: "04",
      title: "Implementation & Guidelines",
      description: "Creating comprehensive brand guidelines and supporting brand application across channels."
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
            <h2>Brand Identity Services</h2>
            <p>Complete branding solutions to establish and strengthen your brand presence</p>
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
            <h2>Design Tools & Resources</h2>
            <p>Professional design software and resources for exceptional brand creation</p>
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
            <h2>Our Branding Process</h2>
            <p>Strategic approach to creating memorable and effective brand identities</p>
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
            <h2>Ready to Build Your Brand?</h2>
            <p>Let's create a powerful brand identity that makes your business stand out and succeed.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Brand Project</button>
              <button className="btn-secondary">Get Brand Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandIdentityPage;