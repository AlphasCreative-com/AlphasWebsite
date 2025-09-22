import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ServicesPageDev from "./pages/servicesPage/ServicesPageDev";
import ServicesPageDes from "./pages/servicesPage/ServicesPageDes";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import ProductPage from "./pages/productPage/ProductPage";
import BlogsPage from "./pages/blogsPage/BlogsPage";
import CareerPage from "./pages/careerPage/CareerPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/servicepagedes" element={<ServicesPageDes />} />
        <Route path="/servicepagedev" element={<ServicesPageDev />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
