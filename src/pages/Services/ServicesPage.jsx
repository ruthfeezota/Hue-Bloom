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
    <main className="w-screen h-[800px] bg-[#F4F3E1] ">
      <title>
        All Services Page | Texas Cannabis Marketing | CBD & Cultivation
        Marketing | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing is a leading cannabis marketing agency in Texas specializing in helping Cultivation Equipment Providers, CBD Manufacturers, Testing Labs, Seed Banks, and Genetics Companies achieve their marketing goals. We offer a full suite of services, including SEO, social media marketing, content marketing, and more. Contact us today for a free consultation."
      />
      <meta
        name="keywords"
        content="Hemp Marketing Agency, Hemp Marketing Services, CBD Marketing, Cannabis Marketing, Industrial Hemp Marketing, Hemp Product Marketing, Hemp Branding, Hemp Advertising, Hemp SEO, Hemp Social Media Marketing, Hemp Content Marketing, Hemp Email Marketing, Hemp Google Ads, Hemp Marketing Strategy, Hemp Market Research, Hemp Compliance Marketing, Hemp Marketing Agency Austin, Austin Hemp Marketing, Hemp Marketing Services Austin TX, CBD Marketing Austin, Cannabis Marketing Austin, Hemp Marketing Agency Texas, Texas Hemp Marketing, Hemp Marketing Services Texas, Best Hemp Marketing Agency Austin, Top Rated Hemp Marketing Agency Austin, Hemp Marketing Agency for Startups, Hemp Marketing Agency for E-commerce, Hemp Marketing Agency for CBD Oil, Hemp Marketing Agency for Delta 8, Hemp Marketing Agency for Farmers, Hemp Marketing Agency with Google Ads Expertise, Hemp Marketing Agency specializing in e-commerce, Hemp Marketing Agency specializing in Skincare"
      />

      <Services />

      <div className="flex items-center justify-center">
        <div className="p-10 w-[900px] flex flex-col items-center justify-center text-center">
          <p className="text-[18px]">
            <span className="font-bold text-[26px]">
              Hue & Bloom Marketing: Your Cannabis Marketing Partner
            </span>{" "}
            <br />
            Hue & Bloom Marketing is your go-to cannabis marketing agency, specializing
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
