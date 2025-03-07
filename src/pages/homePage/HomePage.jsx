import Hero from "./Herosection/Hero";
import Second from "./sec section/Second";
import Third from "./thirdsec/Third";
import Fourth from "./fourthsection/Fourth";
import OurProjecSec from "./ourProjecSec/OurProjecSec";
import WorkProcessSec from "./workProcessSec/WorkProcessSec";
import TestimonialsSec from "./testimonialsSec/TestimonialsSec";
import OurTeamSec from "./ourTeamSection/OurTeamSec";
import ContactUsSec from "./contactUsSec/ContactUsSec";
import NewsSection from "./newsSec/NewsSection";

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
      <ContactUsSec />
      <NewsSection />
    </div>
  );
}

export default HomePage;
