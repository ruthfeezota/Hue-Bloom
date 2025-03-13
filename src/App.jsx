import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./pages/AboutPage";
import Contactus from "./pages/ContactUs"
import Ecommerce from "./pages/Services/Ecommerce";
import ServicesHome from "./pages/ServicesHome";
import ServicesPage from "./pages/Services/ServicesPage";
import Socialmedia from "./pages/Services/Socialmedia";
import Website from "./pages/Services/Website";
import Store from "./pages/Store";
import blogcategories from "./pages/blog-categories";
import Home from "./pages/home";
import Ourwork from "./pages/Ourwork";
import Mypath from "./pages/my-path";
import { Route, Routes } from "react-router-dom";
import UpleafMedia from "./pages/OurWork/UpleafMedia";
import HomeResign from "./pages/Sales/HomeResign";
import Packages from "./pages/Packages";
import SEO from "./pages/SEO";
import SanAntonioWebDesign from "./pages/SEO Pages/SanAntonioWebDesign"
import DallasWebDesign from "./pages/SEO Pages/DallasWebDesign"
import AustinWebDesign from "./pages/SEO Pages/AustinWebDesign"
import HoustonWebDesign from "./pages/SEO Pages/HoustonWebDesign"
import NailSalonWeb from "./pages/SEO Pages/NailSalonWeb"
import SalonSEO from "./pages/SEO Pages/SalonSEO"



function App() {
  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/website" element={<Website />} />
        <Route path="/serviceshome" element={<ServicesHome />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/ourwork" element={<Ourwork />} />
        <Route path="/my-path" element={<Mypath />} />
        <Route path="blogcategories" element={blogcategories}/>
        <Route path="/upleafmedia" element={<UpleafMedia />} />
        <Route path="/homeresign" element={<HomeResign />} /> 
        <Route path="/packages" element={<Packages />} /> 
        <Route path="/seo" element={<SEO />} /> 
        <Route path="/AustinWebDesign" element={<AustinWebDesign />} /> 
        <Route path="/DallasWebDesign" element={<DallasWebDesign />} /> 
        <Route path="/HoustonWebDesign" element={<HoustonWebDesign />} /> 
        <Route path="/NailSalonWeb" element={<NailSalonWeb />} /> 
        <Route path="/SalonSEO" element={<SalonSEO />} /> 
        <Route path="/SanAntonioWebDesign" element={<SanAntonioWebDesign />} /> 
        </Routes>
        <Footer/>
        </div>
  )
}

export default App;
