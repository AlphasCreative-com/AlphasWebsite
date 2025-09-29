import React from "react";
import Button from "../Utilize/Button/Button";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import productImg3 from "../../Assests/Images/skill.png"; // Background image for the Hero section
import "./Hero.css"; // Add CSS file for animations

function Hero() {
  return (
    <div
      className="services-hero relative flex flex-col items-start justify-center w-full gap-8 px-6 sm:px-12 md:px-20 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${productImg3})` }}
    >
      {/* Dark Overlay and Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg z-0"></div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-start text-start gap-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded text-white">
          Services
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">
          Our professional team is dedicated to helping you achieve your digital goals with high-quality solutions tailored to your business needs. We specialize in Graphic Design and Development, ensuring a seamless and visually engaging digital presence.
        </h2>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap gap-6">
        <Button 
          className="px-6 py-3 md:px-8 md:py-4 text-white border border-white rounded-lg transition duration-300 hover:bg-white hover:text-black" 
          text={"Call Us"} 
          href="/servicepagedes"
          aria-label="Go to Graphic Design services"
        />
        <Sbutton 
          className="btn02 white-variant" 
          text={"Explore Projects"} 
          href="/servicepagedev"
          aria-label="Explore Development services"
        />
      </div>
    </div>
  );
}

export default Hero;
