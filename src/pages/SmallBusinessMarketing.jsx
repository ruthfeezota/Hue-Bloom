import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Services from "../components/Services";
import MarketingPDF from "../components/MarketingPDF"
import HeroSM from "../components/SmallBusiness/HeroSM";
import ServicesSM from "../components/SmallBusiness/ServicesSM";
import AboutUsSM from "../components/SmallBusiness/AboutUsSM";
import FeaturesSM from "../components/SmallBusiness/FeaturesSM";
import AboutSM from "../components/SmallBusiness/AboutSM";
import StorySM from "../components/SmallBusiness/StorySM";
import ContactSM from "../components/SmallBusiness/ContactSM";

function SmallBusinessMarketing() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#f5f5f5]">
    <title>web design Marketing Page | Small Business Marketing | Web Design Marketing Agency Austin Texas | Hue & Bloom Marketing</title>
            <meta
                name="description"
                content="Grow your women-owned business with Hue & Bloom Marketing. We provide strategic web design, SEO, and content creation to boost your online presence and increase sales."
            />
            <meta
                name="keywords"
                content="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin, Website design for small business, Custom website design, E-commerce website design, Responsive web design, Website development Austin, Website redesign, Website maintenance, Website builders for small business, Web design for women owned business, Wordpress website design, Squarespace website design, Shopify website design, Affordable web design, Professional web design, SEO Austin, Small business SEO, Local SEO services, SEO optimization, SEO strategy, SEO consulting, SEO for women owned business, Increase website traffic, Improve search rankings, Keyword research, On-page SEO, Off-page SEO, Technical SEO, SEO audits, SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs,"
            />
            <HeroSM/>
            <AboutUsSM/>
            <ServicesSM/>
            <FeaturesSM/>
            <AboutSM/>
            <StorySM/>
            <ContactSM/>
            
      {/* <Hero />
      <Services/>
      <Features />
      <MarketingPDF/>
      <About />
      <Story />
      <Contact /> */}
      
    </main>
  );
}

export default SmallBusinessMarketing;
