import React, { useEffect, useState } from "react";
import image from "../../Assests/Images/Logo.webp";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleCallButtonClick = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            <img src={image} alt="Alphas Creative" className="brand-logo" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeDropdowns}>
            Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeDropdowns}>
            Products
                </NavLink>
              </li>
            <li 
              className={`nav-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-link dropdown-toggle" 
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
              >
                Services
                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
                </svg>
              </button>
              <div 
                className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink to="/services/web-development" className="dropdown-item">Web Development</NavLink>
                <NavLink to="/services/mobile-development" className="dropdown-item">Mobile Development</NavLink>
                <NavLink to="/services/ui-ux-design" className="dropdown-item">UI/UX Design</NavLink>
                <NavLink to="/services/digital-marketing" className="dropdown-item">Digital Marketing</NavLink>
                <NavLink to="/services/seo-services" className="dropdown-item">SEO Services</NavLink>
                <NavLink to="/services/brand-identity" className="dropdown-item">Brand Identity</NavLink>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeDropdowns}>
                Company
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeDropdowns}>
                Partners
              </NavLink>
            </li>



            <li className="nav-item">
              <NavLink to="/blogs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeDropdowns}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="cta-button" onClick={handleCallButtonClick}>
            Talk to Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src={image} alt="Alphas Creative" className="mobile-logo" />
              <button className="mobile-close" onClick={() => setIsOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
            
            <ul className="mobile-nav">
              <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
              
             
              <li className="mobile-dropdown">
                <button onClick={() => toggleDropdown('mobile-services')}>
                  Services
                  <svg className={`mobile-dropdown-icon ${activeDropdown === 'mobile-services' ? 'active' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 8L2 4h8L6 8z" fill="currentColor"/>
                  </svg>
                </button>
                <ul className={`mobile-submenu ${activeDropdown === 'mobile-services' ? 'show' : ''}`}>
                  <li><NavLink to="/services/web-development" onClick={() => setIsOpen(false)}>Web Development</NavLink></li>
                  <li><NavLink to="/services/mobile-development" onClick={() => setIsOpen(false)}>Mobile Development</NavLink></li>
                  <li><NavLink to="/services/ui-ux-design" onClick={() => setIsOpen(false)}>UI/UX Design</NavLink></li>
                  <li><NavLink to="/services/digital-marketing" onClick={() => setIsOpen(false)}>Digital Marketing</NavLink></li>
                  <li><NavLink to="/services/seo-services" onClick={() => setIsOpen(false)}>SEO Services</NavLink></li>
                  <li><NavLink to="/services/brand-identity" onClick={() => setIsOpen(false)}>Brand Identity</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/company" onClick={() => setIsOpen(false)}>Company</NavLink></li>
              <li><NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Partners</NavLink></li>
              <li><NavLink to="/careers" onClick={() => setIsOpen(false)}>Careers</NavLink></li>
              <li><NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink></li>
            </ul>

            <div className="mobile-cta">
              <button className="mobile-cta-button" onClick={handleCallButtonClick}>
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;