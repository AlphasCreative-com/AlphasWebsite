import React from "react";
import Hero from "../../components/Herosection/Hero";
import Second from "../../components/sec section/Second";
import Third from "../../components/thirdsec/Third";
import Fourth from "../../components/fourthsection/Fourth";

function HomePage() {
  return (
    <div>
      <Hero />
      <Second />
      <Third/>
      <Fourth/>
    </div>
  );
}

export default HomePage;
