import React from "react";
import Hero from "./Herosection/Hero";
import Second from "./sec section/Second";
import Third from "./thirdsec/Third";
import Fourth from "./fourthsection/Fourth";
import OurProjecSec from "./ourProjecSec/OurProjecSec";
import WorkProcessSec from "./workProcessSec/WorkProcessSec";
import TestimonialsSec from "./testimonialsSec/TestimonialsSec";
import OurTeamSec from "./ourTeamSection/OurTeamSec";

function HomePage() {
  return (
    <div>
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <OurProjecSec />
      <WorkProcessSec />
      <TestimonialsSec />
      <OurTeamSec />
    </div>
  );
}

export default HomePage;
