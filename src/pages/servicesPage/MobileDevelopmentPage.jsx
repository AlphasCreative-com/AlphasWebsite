import React from "react";
import usePageTitle from "../../hooks/usePageTitle";
import mobileDevImg from "../../Assests/Images/app development.png";
import "./IndividualService.css";

function MobileDevelopmentPage() {
  usePageTitle("Mobile Development - Services");

  const ServiceHeroData = {
    title: "Mobile Development",
    subtitle: "Develop powerful mobile applications for iOS and Android that connect with your audience on the go and deliver exceptional user experiences.",
    backgroundImage: mobileDevImg
  };

  const features = [
    {
      icon: "fab fa-apple",
      title: "iOS Development",
      description: "Native iOS applications built with Swift and optimized for iPhone and iPad"
    },
    {
      icon: "fab fa-android",
      title: "Android Development",
      description: "High-performance Android apps using Kotlin and Java for all Android devices"
    },
    {
      icon: "fas fa-sync-alt",
      title: "Cross-Platform Solutions",
      description: "Develop once, deploy everywhere with React Native and Flutter frameworks"
    },
    {
      icon: "fas fa-store",
      title: "App Store Optimization",
      description: "Maximize your app's visibility and downloads in both App Store and Google Play"
    },
    {
      icon: "fas fa-cloud",
      title: "Backend Integration",
      description: "Seamless integration with cloud services and robust backend systems"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile interfaces that users love to interact with"
    }
  ];

  const technologies = [
    "Swift", "Kotlin", "React Native", "Flutter", "Ionic", "Xamarin", 
    "Firebase", "AWS Mobile", "Node.js", "MongoDB", "PostgreSQL", "Redis"
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "We define your app's goals, target audience, and create a detailed development roadmap."
    },
    {
      step: "02", 
      title: "UI/UX Design",
      description: "Our designers create engaging interfaces following platform-specific guidelines and best practices."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Expert developers build your app using modern frameworks with rigorous testing at every stage."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle app store submissions and provide ongoing maintenance and updates."
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
                <button className="btn-secondary">View Apps</button>
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
            <h2>Mobile App Development Services</h2>
            <p>End-to-end mobile solutions for iOS and Android platforms</p>
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
            <h2>Mobile Technologies & Frameworks</h2>
            <p>Latest tools and technologies for mobile app development</p>
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
            <h2>Our Mobile App Development Process</h2>
            <p>From concept to app store - a streamlined development approach</p>
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
            <h2>Ready to Launch Your Mobile App?</h2>
            <p>Let's create a mobile app that engages your users and grows your business.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-secondary">Get Free Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileDevelopmentPage;