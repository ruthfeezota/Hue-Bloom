import { useState } from "react";
import Gallery from "../../components/Gallary";
import AnimatedTitle from "../../components/AnimatedTitle";
import Contact from "../../components/Contact";
import Services from "../../components/Services";
import Image1 from "../../assets/UrbnLeaf2.png";
import Image2 from "../../assets/UrbnLeaf1.png";
import Image3 from "../../assets/texasoriginalteam.png";

function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const panels = [
    { image: "/src/assets/12.png" },
    { image: "/src/assets/15.png" },
    { image: "/src/assets/12.png" },
    { image: "/src/assets/15.png" },
    { image: "/src/assets/12.png" },
    { image: "/src/assets/15.png" },
    { image: "/src/assets/12.png" },
    { image: "/src/assets/15.png" },
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-screen flex-grow bg-[#F4F3E1  ] ">
      <title>
        All Services Page | Texas web design Marketing | CBD & Cultivation
        Marketing | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing is a leading web design marketing agency in Texas specializing in helping Cultivation Equipment Providers, CBD Manufacturers, Testing Labs, Seed Banks, and Genetics Companies achieve their marketing goals. We offer a full suite of services, including SEO, social media marketing, content marketing, and more. Contact us today for a free consultation."
      />
      <meta
        name="keywords"
        content="SEO Marketing Agency, SEO Marketing Services, CBD Marketing, web design Marketing, Industrial SEO Marketing, SEO Product Marketing, SEO Branding, SEO Advertising, SEO SEO, SEO Social Media Marketing, SEO Content Marketing, SEO Email Marketing, SEO Google Ads, SEO Marketing Strategy, SEO Market Research, SEO Compliance Marketing, SEO Marketing Agency Austin, Austin SEO Marketing, SEO Marketing Services Austin TX, CBD Marketing Austin, web design Marketing Austin, SEO Marketing Agency Texas, Texas SEO Marketing, SEO Marketing Services Texas, Best SEO Marketing Agency Austin, Top Rated SEO Marketing Agency Austin, SEO Marketing Agency for Startups, SEO Marketing Agency for E-commerce, SEO Marketing Agency for CBD Oil, SEO Marketing Agency for Delta 8, SEO Marketing Agency for Farmers, SEO Marketing Agency with Google Ads Expertise, SEO Marketing Agency specializing in e-commerce, SEO Marketing Agency specializing in Skincare"
      />

      <Services />

      <div className="flex items-center justify-center">
        <div className="p-10 w-[900px] flex flex-col items-center justify-center text-center">
          <p className="text-[18px]">
            <span className="font-bold text-[26px]">
              Hue & Bloom Marketing: Your web design Marketing Partner
            </span>{" "}
            <br />
            Hue & Bloom Marketing is your go-to web design marketing agency, specializing
            in crafting effective strategies to elevate your brand within the
            industry. Our comprehensive services cover everything from digital
            marketing to creative design, ensuring your message resonates with
            your target audience.
          </p>
        </div>
      </div>

      <div className="sm:flex items-center justify-center gap-4 ">
        <div className="mb-4">
          <img
            src={Image1}
            className="h-[400px] max-w-full rounded-lg"
            alt=""
          />
        </div>
        <div className="mb-4">
          <img
            src={Image2}
            className="h-[400px] max-w-full rounded-full"
            alt=""
          />
        </div>
        <div className="mb-4">
          <img
            src={Image3}
            className="h-[400px] max-w-full rounded-full"
            alt=""
          />
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </main>
  );
}

export default ServicesPage;
