import React from "react";
import Button from "../Utilize/Button/Button";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import servicesImg from "../../Assests/Images/services.jpg";
import "./Hero.css";

function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="service-hero relative flex flex-col items-start justify-center w-full gap-8 px-6 sm:px-12 md:px-20 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${servicesImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start text-start gap-4 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded text-white">
          Our Services
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light text-white">
          At Alphas Creative, we offer comprehensive digital solutions to transform your business. 
          From cutting-edge web development to strategic digital marketing, our expert team delivers 
          innovative services that drive growth and create lasting impact in the digital landscape.
        </h4>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap gap-6">
        <Button 
          className="px-6 py-3 md:px-8 md:py-4 text-white border border-white rounded-lg transition duration-300 hover:bg-white hover:text-black" 
          text="Explore Services"
          onClick={scrollToServices}
        />
        <Sbutton 
          className="btn02 white-variant" 
          text="Get Quote"
          href="/contact"
        />
      </div>
    </div>
  );
}

export default Hero;