import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";

import Hero from "../../components/Servicehero/Hero";
import ExpandingServiceBar from "../../components/ServiceBar/ExpandingServiceBar";

const ServicesPageDev = () => {
  const services = [
    {
      title: "Software Development",
      description: " We provide professional software engineering services, delivering high-quality, scalable, and innovative solutions for businesses of all sizes. Our experienced software engineers specialize in custom software development, cloud-based solutions, and enterprise applications, ensuring efficiency, security, and seamless integration. Whether you need full-stack development, API integration, or AI-driven solutions, we turn complex ideas into powerful, functional software products. Partner with us to build cutting-edge software that drives your business forward."
  
    },
    {
      title: "web Development",
      description: "We provide professional software engineering services, delivering high-quality, scalable, and innovative solutions for businesses of all sizes. Our experienced software engineers specialize in custom software development, cloud-based solutions, and enterprise applications, ensuring efficiency, security, and seamless integration. Whether you need full-stack development, API integration, or AI-driven solutions, we turn complex ideas into powerful, functional software products. Partner with us to build cutting-edge software that drives your business forward."
    },
    {
      title: "System Development",
      description: "We provide system development services focused on designing and implementing integrated systems that streamline your business processes. Our solutions enhance productivity and ensure seamless operations across various platforms. Collaborate with us to optimize your organizational workflows with our customized system development offerings.​"
    },
    {
      title: "Mobile Development",
      description: "Our mobile development team excels in creating intuitive and feature-rich mobile applications for both Android and iOS platforms. We focus on delivering mobile app development solutions that provide exceptional user experiences and drive customer engagement. Let us help you connect with your audience on-the-go through our tailored mobile development services."
    },
    {
      title: "CMS Development",
      description: "We specialize in CMS development, providing dynamic, user-friendly, and scalable solutions that empower businesses to manage their digital content with ease. Whether you need a WordPress website for its flexibility or a Wix website for its simplicity, our team ensures seamless design, functionality, and performance. Our custom CMS solutions are built with SEO best practices, responsive design, and user-friendly navigation to enhance your online presence. Take control of your content with a powerful, easy-to-manage CMS tailored to your business needs."
    },
    {
      title: "UI/UX Design",
      description: "Our UI/UX design services are dedicated to crafting visually appealing and user-centric interfaces that enhance user satisfaction. We prioritize usability and aesthetics to ensure your digital products are both functional and engaging. Partner with our UI/UX design experts to create intuitive designs that resonate with your target audience. "
    }
  ];

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* Expanding Service Bars */}
      <section className="py-16 space-y-4">
        {services.map((service, index) => (
          <ExpandingServiceBar 
            key={index} 
            title={service.title} 
            description={service.description}
            hasButton={true}
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

export default ServicesPageDev;
