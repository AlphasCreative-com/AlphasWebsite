import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import serviceImg1 from "../../Assests/Images/skill.png";
import serviceImg2 from "../../Assests/Images/skill.png";
import serviceImg3 from "../../Assests/Images/skill.png";
import Hero from "../../components/Servicehero/Hero";


function ServicesPage() {
  return (
    <div className=" mx-auto">
      {/* Hero Section */}
       <Hero/>
      {/* Service Cards */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={serviceImg1} alt="Service 1" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation</h3>
          <p className="text-gray-600 mb-4">
            Transform your business operations with modern digital strategies and cutting-edge technologies.
          </p>
          <Sbutton text="Learn More" />
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={serviceImg2} alt="Service 2" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analytics</h3>
          <p className="text-gray-600 mb-4">
            Leverage data insights to drive better decisions and improve overall business performance.
          </p>
          <Sbutton text="Learn More" />
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={serviceImg3} alt="Service 3" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Software Solutions</h3>
          <p className="text-gray-600 mb-4">
            Develop tailor-made software applications that meet your specific business needs.
          </p>
          <Sbutton text="Learn More" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
        <Sbutton text="Get Started" />
      </section>
    </div>
  );
}

export default ServicesPage;
