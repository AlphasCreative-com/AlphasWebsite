import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import CircularArrows from "../../components/Utilize/CircularArrows/CircularArrows";
import productImg1 from "../../Assests/Images/skill.png";
import productImg2 from "../../Assests/Images/skill.png";
import productImg3 from "../../Assests/Images/skill.png";
import Hero from "../../components/Producthero/Hero";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";

function ProductPage() {
  usePageTitle("Products");
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* Solutions Overview */}
      <section className="py-16 text-center">
        <h2 className="text-[2.1rem] font-medium mb-4 md:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.7rem] 2xl:text-[3.3rem]" style={{fontFamily: 'var(--bs-font-unbounded)'}}>
          Tailored Digital Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
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
              <span className="text-sm text-gray-500" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                Streamline and automate core business processes with our powerful, customizable ERP solutions.
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                Enterprise Resource Planning (ERP) System
              </h3>
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
              <span className="text-sm text-gray-500" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                Elevate your online presence with user-friendly and scalable e-commerce websites and mobile apps.
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                E-Commerce Platforms
              </h3>
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
              <span className="text-sm text-gray-500" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                Deliver exceptional user experiences through innovative, cross-platform mobile applications.
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[1.5rem] font-medium" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
                Custom Mobile Applications
              </h3>
              <CircularArrows />
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-10 bg-[#0b1221] text-white text-center mb-9">
        <div className="max-w-3xl mx-auto p-6">
          <h2 className="text-5xl font-bold mb-4" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
            Looking for Custom Solutions?
          </h2>
          <p className="text-lg mb-6" style={{fontFamily: 'var(--bs-font-sans-serif)'}}>
            Let us help you build and scale the solutions your business needs.
          </p>
          <Link to="/contactus">
            <Sbutton text="Contact Us" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;