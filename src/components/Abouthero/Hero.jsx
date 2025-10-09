import React from "react";
import Button from "../Utilize/Button/Button";
import Sbutton from "../Utilize/Secbutton/Sbutton";
import "./Hero.css";

function Hero() {
  return (
    <div
      className="about-hero relative flex flex-col items-start justify-start w-full gap-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-black"
      style={{
        backgroundImage: "url('/Wave_Line(1).svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional: overlay for readability */}
      <div className="absolute inset-0 bg-white/10 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start text-left w-full px-6 md:px-12 lg:px-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded mb-4">
          Who We Are ?
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light text-justify w-full mb-8 max-w-3xl">
          At Alphas Creative, we're a passionate team of designers and developers committed to bringing ideas to life. Since 2020, we've been helping businesses stand out with custom websites, bold visual identities, and strategic digital design. We believe great design goes beyond aesthetics—it's about creating meaningful experiences that connect with your audience and grow your brand.
        </h4>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-4">
          <Button 
            className="px-6 py-3 md:px-8 md:py-4 text-white bg-blue-600 border border-blue-600 rounded-lg transition duration-300 hover:bg-blue-700 hover:border-blue-700" 
            text={"Get Started"} 
          />
          <Sbutton 
            className="btn02" 
            text={"See Features"} 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
