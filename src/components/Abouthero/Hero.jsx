import React from "react";
import Button from "../Utilize/Button/Button";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import productImg3 from "../../Assests/Images/skill.png"; // Importing the image correctly
import "./Hero.css"; // Add CSS file for animations

function Hero() {
  return (
    <div
      className="about-hero relative flex flex-col items-start justify-center w-full gap-8 px-28 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white text-black"
    >
      {/* No overlay needed for white background */}

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-start text-start gap-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded">
        Who We Are ?
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light">
        At Alphas Creative, we’re a passionate team of designers and developers committed to bringing ideas to life. Since 2020, we’ve been helping businesses stand out with custom websites, bold visual identities, and strategic digital design. We believe great design goes beyond aesthetics—it’s about creating meaningful experiences that connect with your audience and grow your brand.
        </h4>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap gap-6">
        <Button className="px-6 py-3 md:px-8 md:py-4 text-white bg-blue-600 border border-blue-600 rounded-lg transition duration-300 hover:bg-blue-700 hover:border-blue-700" text={"Get Started"} />
        <Sbutton className="btn02" text={"See Features"} />
      </div>
    </div>
  );
}

export default Hero;
