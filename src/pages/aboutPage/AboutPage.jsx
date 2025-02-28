import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import team1 from "../../Assests/Images/skill.png";
import team2 from "../../Assests/Images/skill.png";
import team3 from "../../Assests/Images/skill.png";
import "./About.css";
import Hero from "../../components/Abouthero/Hero";

function AboutPage() {
  return (
    <div>
    {/* Hero Section */}
    <Hero/>

    {/* Mission Statement */}
   
   
      
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            At CXOLE, we empower businesses to thrive in the digital age through
            cutting-edge solutions and strategic partnerships. Our commitment to
            excellence drives every aspect of our operations.
          </p>
          <Sbutton text="Learn More" />
        </div>
      </section>
      <div className="about-container">
      {/* Company History */}
      <section className="history-section">
        <div className="history-timeline">
          <div className="timeline-item">
            <h3>2015</h3>
            <p>Founded in New York with 3 team members</p>
          </div>
          <div className="timeline-item">
            <h3>2018</h3>
            <p>Expanded to European markets</p>
          </div>
          <div className="timeline-item">
            <h3>2022</h3>
            <p>Recognized as Top Tech Innovator</p>
          </div>
          <div className="timeline-item">
            <h3>2024</h3>
            <p>Serving clients in 15+ countries</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Our Leadership</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={team1} alt="CEO" />
            <h4>Alex Johnson</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={team2} alt="CTO" />
            <h4>Maria Gonzalez</h4>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={team3} alt="CFO" />
            <h4>James Wilson</h4>
            <p>Chief Financial Officer</p>
          </div>
        </div>
      </section>
      </div>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-lightbulb"></i>
            <h3>Innovation</h3>
            <p>Pushing boundaries in technology and business solutions</p>
          </div>
          <div className="value-card">
            <i className="fas fa-users"></i>
            <h3>Collaboration</h3>
            <p>Building strong partnerships for mutual success</p>
          </div>
          <div className="value-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Integrity</h3>
            <p>Ethical business practices as our foundation</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Transform Your Business?</h2>
        <Sbutton text="Get Started" />
      </section>
  
    </div>
  );
}

export default AboutPage;