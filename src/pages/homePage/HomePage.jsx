import React from "react";
import Hero from "../../components/Herosection/Hero";
import Second from "../../components/sec section/Second";
import Third from "../../components/thirdsec/Third";
import Fourth from "../../components/fourthsection/Fourth";
import OurProjecSec from "../../components/ourProjecSec/OurProjecSec";
import WorkProcessSec from "../../components/workProcessSec/WorkProcessSec";

function HomePage() {
  return (
    <div>
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <OurProjecSec />
      <WorkProcessSec />
    </div>
  );
}

export default HomePage;
