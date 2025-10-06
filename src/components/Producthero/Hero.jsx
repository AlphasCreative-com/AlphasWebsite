import React from "react";
import Button from "../Utilize/Button/Button";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative flex flex-col items-start justify-center w-full gap-8 px-28 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white text-black">
      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-start text-start gap-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded">
          Products
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light">
          Our professional team is dedicated to helping you achieve your digital
          goals. From website design and development to branding.
        </h4>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap gap-6">
        <Link to="/contact">
          <Button
            className="px-6 py-3 md:px-8 md:py-4 text-white bg-blue-600 border border-blue-600 rounded-lg transition duration-300 hover:bg-blue-700 hover:border-blue-700"
            text={"Get Started"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
