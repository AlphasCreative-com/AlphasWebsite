import React from "react";
import servicesImage from "../../Assests/Images/services.jpg";
import heroBg from "../../Assests/Images/second bg.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { useInView } from "react-intersection-observer";
import "./ServicesPage.css";

const ServicesPage = () => {
  const servicesRef = React.useRef(null);
  
  const { ref: heroRef, inView: heroInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Software Development",
      description: "Build custom software solutions that streamline your business operations and drive digital transformation.",
      icon: "fas fa-code",
      features: [
        "Custom Software Solutions",
        "Enterprise Applications",
        "API Development & Integration"
      ],
      hasButton: true,
      buttonText: "Learn More"
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications that engage users and deliver exceptional experiences.",
      icon: "fas fa-globe",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Development"
      ],
      hasButton: true,
      buttonText: "Get Started"
    },
    {
      title: "Mobile Development",
      description: "Develop powerful mobile applications for iOS and Android that connect with your audience on the go.",
      icon: "fas fa-mobile-alt",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Solutions",
        "App Store Optimization"
      ],
      hasButton: true,
      buttonText: "Build App"
    },
    {
      title: "Cloud Solutions",
      description: "Leverage cloud technologies to scale your business with secure, reliable, and cost-effective solutions.",
      icon: "fas fa-cloud",
      features: [
        "Cloud Migration",
        "DevOps & CI/CD",
        "Infrastructure Management"
      ],
      hasButton: true,
      buttonText: "Explore Cloud"
    },
    {
      title: "AI & Machine Learning",
      description: "Implement intelligent solutions that automate processes and provide valuable insights from your data.",
      icon: "fas fa-brain",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ],
      hasButton: true,
      buttonText: "Discover AI"
    },
    {
      title: "Digital Transformation",
      description: "Transform your business processes with modern technology solutions that improve efficiency and growth.",
      icon: "fas fa-rocket",
      features: [
        "Process Automation",
        "Digital Strategy Consulting",
        "Technology Integration"
      ],
      hasButton: true,
      buttonText: "Transform Now"
    }
  ];

  return (
    <div className="services-page-modern" style={{ backgroundColor: '#ffffff' }}>
      {/* Modern Hero Section */}
      <section 
        className="modern-hero" 
        ref={heroRef}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content-modern">
          <div className="hero-animation-wrapper">
            <div className={`hero-badge ${heroInView ? 'animate-in' : ''}`}>
              <span style={{ color: '#1A6AFF' }}>● PROFESSIONAL SERVICES</span>
            </div>
            <h1 className={`hero-title-modern ${heroInView ? 'animate-in' : ''}`}>
              Transform Your Business with
              <span className="text-gradient"> Expert Solutions</span>
            </h1>
            <p className={`hero-subtitle-modern ${heroInView ? 'animate-in' : ''}`}>
              We deliver cutting-edge digital solutions that drive growth, enhance efficiency, 
              and create lasting impact for businesses worldwide.
            </p>
            <div className={`hero-stats ${heroInView ? 'animate-in' : ''}`}>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Expert Support</span>
              </div>
            </div>
            <div className={`hero-buttons ${heroInView ? 'animate-in' : ''}`}>
              <button 
                className="btn-primary-modern"
                onClick={scrollToServices}
              >
                Explore Services
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn-secondary-modern">
                <i className="fas fa-play"></i>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section-modern">
        <div className="container-modern">
          <div className="value-grid">
            <div className="value-content">
              <div className="section-badge">
                <span style={{ color: '#1A6AFF' }}>● WHY CHOOSE US</span>
              </div>
              <h2 className="section-title-modern">
                We drive value in complex problems by creating 
                <span className="text-gradient"> unique solutions</span>
              </h2>
              <p className="section-description">
                Our mission is to empower businesses to thrive in the digital age. We strive to 
                deliver cutting-edge strategies and solutions that enhance brand visibility, 
                improve customer engagement, and drive sustainable growth.
              </p>
              <div className="value-points">
                <div className="value-point">
                  <div className="point-icon" style={{ backgroundColor: '#1A6AFF' }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4>Expert Team</h4>
                    <p>Industry professionals with proven track records</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="point-icon" style={{ backgroundColor: '#1A6AFF' }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h4>Modern Technology</h4>
                    <p>Latest tools and frameworks for optimal results</p>
                  </div>
                </div>
              </div>
              <div className="value-button">
                
              </div>
            </div>
            <div className="value-visual">
              <div className="image-wrapper-modern">
                <img 
                  src={servicesImage} 
                  alt="Our Services" 
                  className="value-image"
                />
                <div className="image-overlay" style={{ background: 'linear-gradient(45deg, rgba(78, 109, 236, 0.1), rgba(0, 0, 0, 0.05))' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Cards Grid */}
      <section ref={servicesRef} className="services-cards-modern">
        <div className="container-modern">
          <div className="services-header-modern">
            <div className="section-badge">
              <span style={{ color: '#1A6AFF' }}>● OUR EXPERTISE</span>
            </div>
            <h2 className="services-title-modern">
              Our <span className="text-gradient">Expert Services</span>
            </h2>
            <p className="services-subtitle-modern">
              Discover our comprehensive range of digital solutions designed to elevate 
              your business and drive innovation through cutting-edge technology.
            </p>
          </div>
          
          <div className="services-grid-modern">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Transform Your Business Card Section */}
      <section className="transform-business-section">
        <div className="container-modern">
          <div className="transform-business-card">
            <div className="transform-content">
              <div className="transform-text">
                <h2 className="transform-title">
                  Transform Your Business Today.
                </h2>
                <p className="transform-description">
                  Unlock your potential with our cutting-edge AI and development 
                  solutions. Let's create your competitive advantage.
                </p>
                <button className="transform-button">
                  Get Started
                </button>
              </div>
              <div className="transform-visual">
                <div className="cta-image-wrapper">
                  <img 
                    src={require("../../Assests/Images/bg-cta.webp")} 
                    alt="Transform Your Business" 
                    className="cta-background-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
