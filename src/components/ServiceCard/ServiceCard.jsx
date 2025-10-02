import React, { useState } from "react";
import "./ServiceCard.css";
import Sbutton from "../Utilize/Secbutton/Sbutton";

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`service-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="card-content">
        {/* Icon Section */}
        <div className="service-icon">
          <i className={service.icon}></i>
        </div>
        
        {/* Content Section */}
        <div className="service-info">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          
          {/* Features List */}
          {service.features && (
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Button Section */}
        {service.hasButton && (
          <div className="service-button">
            <Sbutton text={service.buttonText} href={service.href} />
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="card-overlay"></div>
      </div>
    </div>
  );
};

export default ServiceCard;