import React, { useState } from "react";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phoneno: "",
    message: "",
    preferredContact: ""  // Added this for the radio buttons
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
      [name]: value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Whether you're starting a new brand, building a website, or refreshing
          your visuals — we’re here to help bring your ideas to life.
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="phoneno"
              id="phoneno"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Preferred mode of contact:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="Phone"
                  checked={formData.preferredContact === "Phone"}
                  onChange={handleChange}
                />
                Phone Call
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="preferredContact"
                  value="Email"
                  checked={formData.preferredContact === "Email"}
                  onChange={handleChange}
                />
                E-mail
              </label>
            </div>
          </div>

          <div className="form-submit">
            <Sbutton type="submit" text="Send Message" />
          </div>
        </form>

        <div className="contact-info">
          <div className="info-section">
            <h3>Contact Information</h3>
            

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p> +94 71 4907 110</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p> info@alphascreative.com</p>
              </div>
            </div>
          </div>

          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href=" https://www.facebook.com/share/18qG334BCz/?mibextid=wwXIfr">
                <i className="fab fa-facebook-f"></i>
              </a>
          
              <a href="https://www.linkedin.com/company/alphas-creative/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/invites/contact/?igsh=1bg7qg53mkypv&utm_content=npr5b8a">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617539955866!2d-73.98542828459394!3d40.74844097932786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623436789016!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
