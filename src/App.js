import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ServicesPageDev from "./pages/servicesPage/ServicesPageDev";
import ServicesPageDes from "./pages/servicesPage/ServicesPageDes";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import WebDevelopmentPage from "./pages/servicesPage/WebDevelopmentPage";
import MobileDevelopmentPage from "./pages/servicesPage/MobileDevelopmentPage";
import UIUXDesignPage from "./pages/servicesPage/UIUXDesignPage";
import DigitalMarketingPage from "./pages/servicesPage/DigitalMarketingPage";
import SEOServicesPage from "./pages/servicesPage/SEOServicesPage";
import BrandIdentityPage from "./pages/servicesPage/BrandIdentityPage";
import ProductPage from "./pages/productPage/ProductPage";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import BlogPost from "./pages/blogsPage/BlogPost";
import CareerPage from "./pages/careerPage/CareerPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/mobile-development" element={<MobileDevelopmentPage />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/services/seo-services" element={<SEOServicesPage />} />
        <Route path="/services/brand-identity" element={<BrandIdentityPage />} />
        <Route path="/servicepagedes" element={<ServicesPageDes />} />
        <Route path="/servicepagedev" element={<ServicesPageDev />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
