import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import CircularArrows from "../../components/Utilize/CircularArrows/CircularArrows";
import productImg1 from "../../Assests/Images/skill.png";
import productImg2 from "../../Assests/Images/skill.png";
import productImg3 from "../../Assests/Images/skill.png";
import Hero from "../../components/Producthero/Hero";
import usePageTitle from "../../hooks/usePageTitle";

function ProductPage() {
  usePageTitle("Products");
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* Solutions Overview */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-[2.1rem] font-medium font-unbounded mb-4 md:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.7rem] 2xl:text-[3.3rem]">Tailored Digital Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Our expert team crafts top-tier software products, mobile apps, systems, and websites to address unique business challenges and drive growth.
        </p>
      </section>

      {/* Solution Cards */}
      <div className="container mx-auto px-4">
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg bg-blue-50">
              <img 
                src={productImg1} 
                alt="Streamline and automate core business processes with our powerful, customizable ERP solutions." 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Streamline and automate core business processes with our powerful, customizable ERP solutions.</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium font-unbounded">Enterprise Resource Planning (ERP) System</h3>
              <CircularArrows />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg bg-blue-50">
              <img
                src={productImg2} 
                alt="Elevate your online presence with user-friendly and scalable e-commerce websites and mobile apps." 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Elevate your online presence with user-friendly and scalable e-commerce websites and mobile apps.</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium font-unbounded">E-Commerce Platforms</h3>
              <CircularArrows />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white p-6 rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg bg-blue-50">
              <img 
                src={productImg3} 
                alt="Deliver exceptional user experiences through innovative, cross-platform mobile applications." 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mb-4">
              <span className="text-sm text-gray-500">Deliver exceptional user experiences through innovative, cross-platform mobile applications.</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium font-unbounded">Custom Mobile Applications</h3>
              <CircularArrows />
            </div>
          </div>
        </section>
      </div>

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