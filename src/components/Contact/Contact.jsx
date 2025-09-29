import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requiredService: "",
    preferred: "",
    message: "",
  });

  const { ref: heroRef, inView: heroInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  
  const { ref: formRef, inView: formInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send this data to a server or process it here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-page-modern">
      {/* Modern Hero Section */}
      <section className="contact-hero-modern" ref={heroRef}>
        <div className="hero-background-contact">
          <div className="hero-pattern-contact"></div>
        </div>
        <div className="hero-content-contact">
          <div className={`hero-animation-contact ${heroInView ? 'animate-in' : ''}`}>
            <div className="hero-badge-contact">
              <span style={{ color: '#1A6AFF' }}>● CONTACT US</span>
            </div>
            <h1 className="hero-title-contact">
              Let's Create Something 
              <span className="text-gradient-contact"> Amazing Together</span>
            </h1>
            <p className="hero-subtitle-contact">
              Ready to transform your ideas into reality? Our expert team is here to help you 
              achieve your digital goals with innovative solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="contact-content-modern" ref={formRef}>
        <div className="container-contact">
          <div className="contact-grid-modern">
            <div className={`contact-info-modern ${formInView ? 'animate-in' : ''}`}>
              <div className="info-header">
                <h2>Get In Touch</h2>
                <p>
                  We're here to help bring your vision to life. Whether you need development, 
                  design, or digital marketing services, let's start the conversation.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon" style={{ backgroundColor: '#1A6AFF' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h4>Email Us</h4>
                    <p>info@alphascreative.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon" style={{ backgroundColor: '#1A6AFF' }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-info">
                    <h4>Call Us</h4>
                    <p>+94 71 490 7110</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon" style={{ backgroundColor: '#1A6AFF' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="method-info">
                    <h4>Visit Us</h4>
                    <p>Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="social-media-modern">
                <h4>Follow Our Journey</h4>
                <div className="social-icons-modern">
                  <a href="https://www.facebook.com/share/1GVrChiC3K/?mibextid=wwXIfr/" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/alphas-creative//" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className={`contact-form-modern ${formInView ? 'animate-in' : ''}`}>
              <div className="form-header">
                <h3>Send Us A Message</h3>
                <p>Ready to get started? Tell us about your project and we'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-row">
                  <div className="form-group-modern">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group-modern">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group-modern">
                    <label htmlFor="requiredService">Service Needed</label>
                    <select
                      id="requiredService"
                      name="requiredService"
                      value={formData.requiredService}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="software-development">Software Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div className="form-group-modern">
                    <label htmlFor="preferred">Preferred Contact</label>
                    <select
                      id="preferred"
                      name="preferred"
                      value={formData.preferred}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="meeting">In-Person Meeting</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group-modern full-width">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <div className="form-submit-modern">
                  <button type="submit" className="submit-btn-modern">
                    <span>Send Message</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-modern">
        <div className="container-contact">
          <div className="cta-content-contact">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your ideas and create something extraordinary together.</p>
            <div className="cta-buttons-contact">
              <button className="btn-primary-contact">
                Schedule a Call
              </button>
              <button className="btn-secondary-contact">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;