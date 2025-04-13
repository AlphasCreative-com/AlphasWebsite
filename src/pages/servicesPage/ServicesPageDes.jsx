import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";

import Hero from "../../components/Servicehero/Hero";
import ExpandingServiceBar from "../../components/ServiceBar/ExpandingServiceBar";

const ServicesPageDes = () => {
  const services = [
    {
      title: "Brand Identity",
      description: "  Build a strong and recognizable presence with our brand identity design services. We develop cohesive visuals that communicate your brand’s mission, values, and personality, ensuring consistency across all platforms. Our branding solutions enhance recognition, build trust, and drive long-term customer loyalty."
  
    },
    {
      title: "Logo Design ",
      description: " Your logo is the face of your business. Our custom logo design services deliver professional, memorable logos that reflect your brand identity, strengthen customer trust, and improve market recognition. Get a high-impact logo that makes a lasting impression."

    },
    {
      title: "Print Design",
      description: "Communicate effectively with professionally designed print materials, including brochures, flyers, posters, and business cards. Our print design services ensure your marketing materials stand out while conveying your brand’s message with clarity and creativity.​"
    },
    {
      title: "Social Media Graphics",
      description: "Boost your digital presence with eye-catching social media graphics tailored for platforms like Instagram, Facebook, LinkedIn, and Twitter. Our designs enhance engagement, increase visibility, and help you grow your audience while strengthening your brand identity."
    },
    {
      title: "Packaging Design",
      description: " Make your products stand out with innovative packaging design solutions that combine aesthetics with functionality. We create visually compelling packaging that resonates with your audience, enhances brand recognition, and drives purchase decisions."
    },
    {
      title: "Infographics",
      description: " Transform complex data into engaging infographics that improve comprehension and boost audience engagement. Our SEO-friendly infographics help communicate information effectively, supporting your digital marketing and content marketing efforts. "
    },
    {
      title: "Presentation Design",
      description: "  Make your presentations impactful with professional presentation design services. We create visually appealing, well-structured slides that enhance storytelling, captivate audiences, and improve the effectiveness of your corporate and marketing presentations. "
    },
    {
      title: "Illustrations",
      description: "  Stand out with custom illustrations that add a unique visual identity to your brand. Our bespoke artwork enhances brand storytelling, increases audience engagement, and makes your content more memorable across digital and print media."
    },
    {
      title: "UI/UX Design ",
      description: " Enhance user experience with UI/UX design services that prioritize usability, accessibility, and aesthetic appeal. Our designs create intuitive, engaging interfaces that improve customer interactions, boost conversions, and drive business growth."
    }
  ];

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* Expanding Service Bars */}
      <section className="py-16 space-y-4">
        {services.map((service, index) => (
          <ExpandingServiceBar key={index} title={service.title} description={service.description} />
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
        <Sbutton text="Get Started" />
      </section>
    </div>
  );
};

export default ServicesPageDes;
