

import About from "../components/About";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Story from "../components/Story";
import Contact from "../components/Contact";
import Services from "../components/Services";
import MarketingPDF from "../components/MarketingPDF"
import AboutUs from "../components/AboutUs";
import HeroNew from "../components/HeroNew";
import Ranking from "../components/Ranking";

function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#F4F3E1  ]">
    <title>Home Page | Hue & Bloom Marketing in Austin empowers women-owned businesses nationwide with expert web design, SEO, and social media. Let us amplify your brand and drive growth. | Hue & Bloom</title>
            <meta
                name="description"
                content="Hue & Bloom Marketing: Empowering women-owned businesses with creative web design, SEO, and social media strategies. Join our community and watch your business thrive."
            />
            <meta
                name="keywords"
                content="Website design for small business, Custom website design, E-commerce website design, Responsive web design, Website development Austin, Website redesign, Website maintenance, Website builders for small business, Web design for women owned business, Wordpress website design, Squarespace website design, Shopify website design, Affordable web design, Professional web design, SEO Austin, Small business SEO, Local SEO services, SEO optimization, SEO strategy, SEO consulting, SEO for women owned business, Increase website traffic, Improve search rankings, Keyword research, On-page SEO, Off-page SEO, Technical SEO, SEO audits, SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs"
            />
      {/* <Hero /> */}
      <HeroNew/>
      <Ranking/>
      <AboutUs/>
      <Services/>
      <Features />
      <MarketingPDF/>
      <About />
      <Story />
      <Contact />
      
    </main>
  );
}

export default Home;