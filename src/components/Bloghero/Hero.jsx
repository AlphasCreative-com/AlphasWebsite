import React from "react";

function Hero() {
  return (
    <div
      className="relative flex flex-col items-start justify-center w-full gap-8 px-28 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 text-black"
    >
      {/* Hero Text */}
      <div className="relative flex flex-col items-start text-start gap-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-unbounded">
          Blogs
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl font-light">
          Our professional team is dedicated to helping you achieve your digital
          goals. From website design and development to brandinggg.
        </h4>
      </div>

      
    </div>
  );
}

export default Hero;
