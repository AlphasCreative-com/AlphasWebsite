import React, { useEffect, useState } from "react";
import "./About.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import usePageTitle from "../../hooks/usePageTitle";

function AboutPage() {
  usePageTitle("About");
  const { ref: counterRef, inView: counterInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: testimonialsRef } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      quote: "I am extremely satisfied with our partnership with Alpha Creative. They were able to assemble a very knowledgeable and enthusiastic team who was very passionate about working on our project and always finding ways to make our product better. Alpha Creative's commitment to understanding and advancing our vision has been integral to our success in the digital art space. I highly recommend them for their exceptional service and look forward to our continued collaboration.",
      author: "Michael Miller",
      position: "Founder and Chief Vision Officer, Apollo Art",
      avatar: "https://via.placeholder.com/60x60/1A6AFF/ffffff?text=MM"
    },
    {
      quote: "Working with Alpha Creative has been a game-changer for our business. Their innovative approach to digital marketing and web development helped us increase our online presence by 300%. The team's attention to detail and commitment to delivering quality results on time is unmatched. They truly understand what it takes to build a successful digital brand.",
      author: "Sarah Johnson",
      position: "CEO & Marketing Director, TechStart Solutions",
      avatar: "https://via.placeholder.com/60x60/4285F4/ffffff?text=SJ"
    },
    {
      quote: "The graphic design and branding work Alpha Creative delivered exceeded our expectations. They took our vision and transformed it into a cohesive brand identity that resonates with our target audience. The collaborative process was smooth, and their creative insights were invaluable. Our brand now stands out in a competitive market.",
      author: "David Chen",
      position: "Creative Director, Urban Design Studio",
      avatar: "https://via.placeholder.com/60x60/FF6B35/ffffff?text=DC"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Disabled animations
  useEffect(() => {
    // Animation disabled - no intersection observer needed
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section - matching home page style */}
      <section className="about-hero">
        <div className="about-hero-info">
          <h3>ABOUT US</h3>
          <h2>
            <p>Building Ideas Into</p>
            <p>Digital Realities</p>
          </h2>
          <p>
            We specialise in Software Development, Digital Marketing, and Graphic Design - 
            helping businesses grow with smart technology, powerful campaigns, and creative visuals.
          </p>
          
          <div className="about-hero-info-wrap">
            <div>
              <span>50+</span>
              <p>Successfully Completed Projects</p>
            </div>
            <div>
              <span>3+</span>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="about-hero-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VCPGMjCW0is?playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fthemeforest.wprealizer.com&widgetid=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

     {/* Vision & Mission Section */}
<section className="vision-mission">
  <div className="vm-wrapper">
    <div className="vm-left">
      <div className="services-badge">
        <span>● OUR FOUNDATION</span>
      </div>
      <h2>What is Alpha's Creative Purpose & Principle</h2>
      <h4>Our purpose guides every solution we create.</h4>
      <p>
        At Alpha Creative, we believe digital excellence starts with alignment. Every project we take on is driven by creativity, strategy, and technology—all moving in a clear direction. We integrate mission-driven values and push boundaries with every solution we build.
      </p>

      {/* New Image Added */}
      <div className="about-us-image">
        <img 
          src={require("../../Assests/Images/abt us.jpg")} 
          alt="About Us" 
        />
      </div>
    </div>
    <div className="vm-right">
      <div className="vm-card">
        <div className="vm-card-icon">
          <i className="fas fa-eye"></i>
        </div>
        <h3>Our Vision</h3>
        <p>Empowering businesses with cutting-edge digital solutions that drive growth and innovation.</p>
      </div>
      <div className="vm-card">
        <div className="vm-card-icon">
          <i className="fas fa-bullseye"></i>
        </div>
        <h3>Our Mission</h3>
        <p>Turning ideas into impactful digital experiences with expert digital solutions and creative excellence.</p>
      </div>
      <div className="vm-card">
        <div className="vm-card-icon">
          <i className="fas fa-rocket"></i>
        </div>
        <h3>Our Motto</h3>
        <p>Create. Innovate. Elevate.</p>
      </div>
    </div>
  </div>
</section>


      {/* Counter Section - matching home page style */}
      <section className={`counter-section ${counterInView ? "in-view" : ""}`} ref={counterRef}>
        <div className="counter-container">
          <div className="counters-grid">
            {[
              { label: "Successful Projects", end: 50, icon: "fas fa-rocket" },
              { label: "Industry Specialists", end: 20, icon: "fas fa-users" },
              { label: "Industries Served", end: 10, icon: "fas fa-globe" },
              { label: "Years of Experience", end: 5, icon: "fas fa-award" },
            ].map((item, index) => (
              <div className="counter-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="counter-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="counter-info">
                  <h3 className="counter-number">
                    {counterInView ? <CountUp end={item.end} duration={2} suffix="+" /> : "0+"}
                  </h3>
                  <p className="counter-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - matching home page style */}
      <section className="modern-services-section" ref={valuesRef}>
        <div className="services-header-modern">
          <div className="services-badge">
            <span>● WHY CHOOSE US</span>
          </div>
          <h2 className="services-main-title">
  Smart Solutions to Build
  <span className="text-gradient"> Outstanding Performance</span>
</h2>

          <p className="services-subtitle">
            We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
          </p>
        </div>
        
        <div className="services-container">
          <div className="services-grid">
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="service-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h4 className="service-title">All-in-One Service</h4>
              <p className="service-description">
                Strategy, design, and development under one roof for seamless project execution.
              </p>
            </div>
            
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4 className="service-title">Results That Matter</h4>
              <p className="service-description">
                We deliver measurable outcomes, not just outputs, focusing on your business success.
              </p>
            </div>
            
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="service-icon">
                <i className="fas fa-sync-alt"></i>
              </div>
              <h4 className="service-title">Agile Process</h4>
              <p className="service-description">
                Flexible and responsive methodology that adapts to your evolving goals and requirements.
              </p>
            </div>
            
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="service-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h4 className="service-title">Transparent Collaboration</h4>
              <p className="service-description">
                Clear communication and regular updates at every stage of your project lifecycle.
              </p>
            </div>
            
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.5s' }}>
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="service-title">Quality Assurance</h4>
              <p className="service-description">
                Rigorous testing and quality control processes ensure every deliverable meets the highest standards.
              </p>
            </div>
            
            <div className={`service-card ${valuesInView ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4 className="service-title">24/7 Support</h4>
              <p className="service-description">
                Dedicated ongoing support and maintenance to keep your digital solutions running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="services-badge">
              <span>● TESTIMONIALS</span>
            </div>
            <h2 className="testimonials-title">
              What Our Clients are Saying.
            </h2>
            <p className="testimonials-subtitle">
              See what our clients say about partnering with us to drive innovation and long-term success.
            </p>
          </div>
          
          <div className="testimonial-carousel">
            <button className="testimonial-nav testimonial-prev" onClick={prevTestimonial}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="testimonial-content">
              <div className="testimonial-quote">
                <p>
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].author} 
                  />
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].author}</h4>
                  <p>{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </div>
            
            <button className="testimonial-nav testimonial-next" onClick={nextTestimonial}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <div className="services-badge">
              <span>● OUR PROCESS</span>
            </div>
            <h2 className="process-title">
              How We Turn Ideas Into <span className="text-gradient">Digital Success</span>
            </h2>
            <p className="process-subtitle">
              Our proven three-step methodology ensures every project is delivered with precision, 
              creativity, and measurable results from concept to completion.
            </p>
          </div>
          
          <div className="process-image">
            <img src={require("../../Assests/Images/Process.png")} alt="Our Process Flow" />
          </div>
        </div>
      </section>


    </div>
  );
}

export default AboutPage;