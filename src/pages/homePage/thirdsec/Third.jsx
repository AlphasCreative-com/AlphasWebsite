import React from "react";
import "./Third.css";
import { useInView } from "react-intersection-observer";

// Import service images
import webDevelopmentImg from "../../../Assests/Images/web development.png";
import appDevelopmentImg from "../../../Assests/Images/app development.png";
import uiUxDesignImg from "../../../Assests/Images/ui ux design.png";
import digitalMarketingImg from "../../../Assests/Images/digital marketing.png";
import brandIdentityImg from "../../../Assests/Images/brand identity.png";
import seoServicesImg from "../../../Assests/Images/seo services.png";

function Third() {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const services = [
    {
      id: 1,
      title: "Web Development",
      category: "WEB",
      image: webDevelopmentImg,
      description: "Building responsive and modern websites that drive business growth. Our expert developers create scalable, secure, and performance-optimized web solutions tailored to your specific needs.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.03) 0%, rgba(26, 106, 255, 0.015) 100%)"
    },
    {
      id: 2,
      title: "Mobile Apps",
      category: "APP", 
      image: appDevelopmentImg,
      description: "Creating intuitive mobile applications for iOS and Android platforms. We develop feature-rich, user-friendly apps that provide seamless experiences across all devices and operating systems.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.035) 0%, rgba(26, 106, 255, 0.018) 100%)"
    },
    {
      id: 3,
      title: "UI/UX Design",
      category: "DESIGN",
      image: uiUxDesignImg,
      description: "Designing user-centered experiences that engage and convert. Our design team combines creativity with data-driven insights to create interfaces that are both beautiful and highly functional.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.032) 0%, rgba(26, 106, 255, 0.016) 100%)"
    },
    {
      id: 4,
      title: "Digital Marketing",
      category: "MARKETING",
      image: digitalMarketingImg,
      description: "Strategic marketing campaigns that boost your online presence. We leverage cutting-edge digital marketing techniques to increase brand awareness, drive traffic, and maximize conversions.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.038) 0%, rgba(26, 106, 255, 0.019) 100%)"
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "BRANDING",
      image: brandIdentityImg,
      description: "Creating memorable brand identities that resonate with your audience. From logos to complete visual systems, we develop cohesive brand experiences that tell your unique story effectively.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.028) 0%, rgba(26, 106, 255, 0.014) 100%)"
    },
    {
      id: 6,
      title: "SEO Services",
      category: "SEO",
      image: seoServicesImg,
      description: "Optimizing your website to rank higher in search results. Our comprehensive SEO strategies improve your visibility, drive organic traffic, and help you dominate your market online.",
      gradient: "linear-gradient(135deg, rgba(26, 106, 255, 0.04) 0%, rgba(26, 106, 255, 0.02) 100%)"
    }
  ];

  return (
    <section className="modern-services-section">
      <div className="services-header-modern" ref={ref}>
        <div className={`services-badge ${inView ? 'animate-in' : ''}`}>
          <span>● OUR SPECIALIZE</span>
        </div>
        <h2 className={`services-main-title ${inView ? 'animate-in' : ''}`}>
          Our core services
        </h2>
      </div>
      
      <div className={`horizontal-scroll-container ${inView ? 'animate-in' : ''}`}>
        <div className="services-scroll-track">
          {/* First set of cards */}
          {services.map((service, index) => (
            <div 
              key={`first-${service.id}`} 
              className="service-card-modern"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="service-card-content">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div 
              key={`second-${service.id}`} 
              className="service-card-modern"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="service-card-content">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
}

export default Third;