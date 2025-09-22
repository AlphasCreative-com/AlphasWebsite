import Hero from "./Herosection/Hero";
import Second from "./sec section/Second";
import Third from "./thirdsec/Third";
import OurProjecSec from "./ourProjecSec/OurProjecSec";
import WorkProcessSec from "./workProcessSec/WorkProcessSec";
import TestimonialsSec from "./testimonialsSec/TestimonialsSec";
import OurTeamSec from "./ourTeamSection/OurTeamSec";
import ContactUsSec from "./contactUsSec/ContactUsSec";
import NewsSection from "./newsSec/NewsSection";

function HomePage() {
  // Team section is temporarily hidden but code is preserved
  const showTeamSection = false;

  return (
    <div>
      <Hero />
      <Second />
      <Third />
      <OurProjecSec />
      <WorkProcessSec />
      <TestimonialsSec />
      {showTeamSection && <OurTeamSec />}
      <ContactUsSec />
      <NewsSection />
    </div>
  );
}

export default HomePage;
