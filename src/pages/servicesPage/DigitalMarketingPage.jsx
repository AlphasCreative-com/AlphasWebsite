import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import digitalMarketingImg from "../../Assests/Images/digital.webp";
import "./IndividualService.css";

function DigitalMarketingPage() {
  usePageTitle("Digital Marketing - Services");

  const ServiceHeroData = {
    title: "Digital Marketing",
    subtitle: "Boost your online presence with strategic digital marketing campaigns that drive traffic, engagement, and conversions across all digital channels.",
    backgroundImage: digitalMarketingImg
  };

  const features = [
    {
      icon: "fas fa-bullhorn",
      title: "Social Media Marketing",
      description: "Engaging social media strategies that build community and drive brand awareness"
    },
    {
      icon: "fas fa-ad",
      title: "Pay-Per-Click (PPC)",
      description: "Targeted advertising campaigns that maximize ROI and drive qualified traffic"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads and convert customers"
    },
    {
      icon: "fas fa-edit",
      title: "Content Marketing",
      description: "Compelling content that tells your story and engages your target audience"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance and ROI"
    },
    {
      icon: "fas fa-users",
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to expand your reach and credibility"
    }
  ];

  const technologies = [
    "Google Ads", "Facebook Ads", "LinkedIn Ads", "Google Analytics", "HubSpot", "Mailchimp", 
    "Hootsuite", "Buffer", "SEMrush", "Ahrefs", "Canva", "Adobe Creative Suite"
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Analyzing your market, competitors, and audience to create a comprehensive marketing strategy."
    },
    {
      step: "02", 
      title: "Campaign Creation",
      description: "Developing targeted campaigns across multiple channels to reach your ideal customers."
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: "Executing campaigns with precision timing and continuous monitoring for optimal performance."
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Analyzing results and continuously optimizing campaigns for better ROI and growth."
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
                <button className="btn-secondary">View Case Studies</button>
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
            <h2>Digital Marketing Services</h2>
            <p>Comprehensive marketing solutions to grow your online presence and revenue</p>
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
            <h2>Marketing Tools & Platforms</h2>
            <p>Professional marketing tools for maximum campaign effectiveness</p>
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
            <h2>Our Marketing Process</h2>
            <p>Data-driven approach to digital marketing success</p>
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
            <h2>Ready to Grow Your Business?</h2>
            <p>Let's create digital marketing campaigns that drive real results for your business.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Marketing Campaign</button>
              <button className="btn-secondary">Get Marketing Audit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingPage;