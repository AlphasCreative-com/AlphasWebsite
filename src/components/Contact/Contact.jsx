import React, { useState } from "react";
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
    <div className="contact-page-container">
      <div className="contact-content-wrapper">
        <div className="contact-info">
          <h4>Let's connect</h4>
          <h2>Let's work together</h2>
          <p className="contact-intro-text">
            People know what an FAQ is, so make that your page title. Don't overcomplicate thing have calling it's good to know or more info.
          </p>
          <p className="contact-detail-text">info@alphascreative.com</p>
          <p className="contact-detail-text">+94 71 490 7110</p>
          <div className="social-media">
            <h3>Follow us:</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1GVrChiC3K/?mibextid=wwXIfr/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/alphas-creative//">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your e-mail?"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="requiredService"
                value={formData.requiredService}
                onChange={handleChange}
                placeholder="Required service"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="preferred"
                value={formData.preferred}
                onChange={handleChange}
                placeholder="Preferred"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Have any message?"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="form-submit">
              <Sbutton type="submit" text="Contact Us" />
            </div>
          </form>
        </div>
      </div>
      <div className="back-to-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;