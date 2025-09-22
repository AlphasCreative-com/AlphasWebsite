import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import servicesImage from "../../Assests/Images/services.jpg";

import Hero from "../../components/Servicehero/Hero";
import ExpandingServiceBar from "../../components/ServiceBar/ExpandingServiceBar";

const ServicesPage = () => {
  const servicesRef = React.useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Software Development",
      description: "Build custom software solutions that streamline your business operations."
  
    },
    {
      title: "web Development",
      description: "We provide professional software engineering services, delivering high-quality, scalable, and innovative solutions for businesses of all sizes. Our experienced software engineers specialize in custom software development, cloud-based solutions, and enterprise applications, ensuring efficiency, security, and seamless integration. Whether you need full-stack development, API integration, or AI-driven solutions, we turn complex ideas into powerful, functional software products. Partner with us to build cutting-edge software that drives your business forward.",
      hasButton: true,
      buttonText: "Inquire Now"
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

      {/* Value Proposition Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="w-full max-w-xl">
              <h2 className="text-5xl font-bold leading-tight mb-8">
                We drive value in complex problems by creating an unique solutions
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our mission is to empower businesses to thrive in the digital age. We strive to deliver cutting-edge strategies and solutions that enhance brand visibility, improve customer engagement, and drive sustainable growth.
              </p>
              <div onClick={scrollToServices}>
                <Sbutton text="See All Services" />
              </div>
            </div>
            <div className="w-full max-w-xl justify-self-center">
              <img 
                src={servicesImage} 
                alt="Our Services" 
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Service Bars */}
      <section ref={servicesRef} className="py-16 space-y-4">
        {services.map((service, index) => (
          <ExpandingServiceBar 
            key={index} 
            title={service.title} 
            description={service.description}
            hasButton={service.hasButton}
            buttonText={service.buttonText}
          />
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
