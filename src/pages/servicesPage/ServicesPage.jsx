import React from "react";
import servicesImage from "../../Assests/Images/services.jpg";
import Hero from "../../components/Servicehero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";



import "./ServicesPage.css";
import usePageTitle from "../../hooks/usePageTitle";

function ServicesPage() {
  usePageTitle("Services");
  const servicesRef = React.useRef(null);

  const services = [
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
      buttonText: "Learn More",
      href: "/services/web-development"
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
      buttonText: "Learn More",
      href: "/services/mobile-development"
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive and engaging user interfaces that provide exceptional user experiences across all platforms.",
      icon: "fas fa-paint-brush",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing"
      ],
      hasButton: true,
      buttonText: "Learn More",
      href: "/services/ui-ux-design"
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with strategic digital marketing campaigns that drive traffic and conversions.",
      icon: "fas fa-bullhorn",
      features: [
        "Social Media Marketing",
        "Content Marketing",
        "PPC Advertising"
      ],
      hasButton: true,
      buttonText: "Learn More",
      href: "/services/digital-marketing"
    },
    {
      title: "SEO Services",
      description: "Improve your search engine rankings and organic visibility with our comprehensive SEO strategies.",
      icon: "fas fa-search",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Link Building"
      ],
      hasButton: true,
      buttonText: "Learn More",
      href: "/services/seo-services"
    },
    {
      title: "Brand Identity",
      description: "Build a strong brand identity that resonates with your audience and sets you apart from competitors.",
      icon: "fas fa-palette",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity System"
      ],
      hasButton: true,
      buttonText: "Learn More",
      href: "/services/brand-identity"
    }
  ];

  return (
    <div className="services-page-modern" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <Hero />

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

      {/* Services Cards Grid */}
      <section id="services-section" ref={servicesRef} className="services-cards-modern">
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

          <Link to="/contact" className="transform-button">
            Get Started
          </Link>
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
