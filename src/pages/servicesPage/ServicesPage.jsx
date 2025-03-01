import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";

import Hero from "../../components/Servicehero/Hero";
import ExpandingServiceBar from "../../components/ServiceBar/ExpandingServiceBar";

const ServicesPage = () => {
  const services = [
    {
      title: "Software Development",
      description: "Build custom software solutions that streamline your business operations."
  
    },
    {
      title: "web Development",
      description: "Build responsive and user-friendly websites that deliver seamless user experiences."

    },
    {
      title: "System Development",
      description: "Develop tailor-made software applications that meet your specific business needs."
    },
    {
      title: "Mobile Development",
      description: "Develop tailor-made software applications that meet your specific business needs."
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

export default ServicesPage;
