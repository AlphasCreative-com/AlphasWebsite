import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import productImg1 from "../../Assests/Images/skill.png";
import productImg2 from "../../Assests/Images/skill.png";
import productImg3 from "../../Assests/Images/skill.png";
import Hero from "../../components/Producthero/Hero";

function ProductPage() {
  return (
    <div className=" mx-auto ">
      {/* Hero Section */}
      <Hero/>

      {/* Solutions Overview */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Tailored Digital Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Our expert team crafts top-tier software products, mobile apps, systems, and websites to address unique business challenges and drive growth.
        </p>
      </section>

      {/* Solution Cards */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={productImg1} alt="Product 1" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Enterprise Resource Planning (ERP) System</h3>
          <p className="text-gray-600 mb-4">
            Streamline and automate core business processes with our powerful, customizable ERP solutions.
          </p>
          <Sbutton text="Learn More" />
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={productImg2} alt="Product 2" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platforms</h3>
          <p className="text-gray-600 mb-4">
            Elevate your online presence with user-friendly and scalable e-commerce websites and mobile apps.
          </p>
          <Sbutton text="Learn More" />
        </div>

        <div className="bg-white rounded-lg p-8 text-center shadow-lg">
          <img src={productImg3} alt="Product 3" className="w-full max-w-xs mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Mobile Applications</h3>
          <p className="text-gray-600 mb-4">
            Deliver exceptional user experiences through innovative, cross-platform mobile applications.
          </p>
          <Sbutton text="Learn More" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Custom Solutions?</h2>
        <p className="text-lg mb-6">Let us help you build and scale the solutions your business needs.</p>
        <Sbutton text="Contact Us" />
      </section>
    </div>
  );
}

export default ProductPage;
