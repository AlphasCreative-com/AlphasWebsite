import React from "react";
import Sbutton from "../../components/Utilize/Secbutton/Sbutton";
import productImg1 from "../../Assests/Images/skill.png";
import productImg2 from "../../Assests/Images/skill.png";
import productImg3 from "../../Assests/Images/skill.png";
import Hero from "../../components/Producthero/Hero";

function ProductPage() {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <Hero />

      {/* Solutions Overview */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Tailored Digital Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Our expert team crafts top-tier software products, mobile apps, systems, and websites to address unique business challenges and drive growth.
        </p>
      </section>

      {/* Solution Cards */}
      <div className="container mx-auto">
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="portfolio-card">
            <img src={productImg1} alt="Product 1" className="portfolio-img" />
            <div className="portfolio-content">
              <h3 className="portfolio-heading">Enterprise Resource Planning (ERP) System</h3>
              <p className="portfolio-text">
                Streamline and automate core business processes with our powerful, customizable ERP solutions.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="portfolio-card">
            <img src={productImg2} alt="Product 2" className="portfolio-img" />
            <div className="portfolio-content">
              <h3 className="portfolio-heading">E-Commerce Platforms</h3>
              <p className="portfolio-text">
                Elevate your online presence with user-friendly and scalable e-commerce websites and mobile apps.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="portfolio-card">
            <img src={productImg3} alt="Product 3" className="portfolio-img" />
            <div className="portfolio-content">
              <h3 className="portfolio-heading">Custom Mobile Applications</h3>
              <p className="portfolio-text">
                Deliver exceptional user experiences through innovative, cross-platform mobile applications.
              </p>
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