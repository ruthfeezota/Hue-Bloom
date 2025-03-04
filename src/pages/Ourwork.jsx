import { useState } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import Contact from "../components/Contact";
import QualityRoots from "../assets/QualityRoots.png";
import UrbnLeaf1 from "../assets/UrbnLeaf1.png";
import Mgcsocial from "../assets/mgcsocial.png";
import takespruces from "../assets/takespruce.png";
import trilogeneseeds from "../assets/trilogeneseeds.png";
import Smoke from "../assets/Smoke.png";
import Can from "../assets/canrent.png";

function Ourwork() {
  return (
    <main className="w-screen h-[800px] bg-[#F4F3E1] ">
      <title>
        Our Work Page | CBD & Cultivation Marketing | Hemp Marketing Agency
      </title>
      <meta
        name="description"
        content="Based in Austin, Hue & Bloom Marketing serves women entrepreneurs across the US. We specialize in web design, SEO, and social media to help you bloom online."
      />
      <meta
        name="keywords"
        content=" Women owned business marketing agency, Support women owned businesses, Business coaching for women, Resources for women entrepreneurs, Women in business, Women's business network, Female entrepreneurs, Women owned small businesses, Business grants for women, Austin marketing agency for women, Marketing companies near me, Small business services Austin, Local SEO Austin, Austin web design services, Austin social media marketing, Marketing for Austin businesses, Women business owners Austin, Austin small business support, Austin marketing consultants, Brand development, Brand strategy, Email marketing, Online advertising, Lead generation, Conversion optimization, Marketing analytics, Digital branding, Content strategy, Marketing packages for small business, Affordable web design for women-owned businesses Austin, SEO services for small businesses owned by women, Social media marketing for female entrepreneurs nationwide, How to market a women-owned business online, Best marketing agency for women-led startups, Web design and SEO for local Austin businesses, Content creation services for women entrepreneurs, Increase website traffic for women-owned e-commerce, Graphic design for social media women businesses, Marketing strategy consultation for women business owners.
"
      />

      <div className="relative max-w-2xl mx-auto mt-32">
        <div className="relative z-10">
          <AnimatedTitle
            title="Our<br/>Work<br/>"
            containerClass="mt-1 !text-black text-center"
          />
          <div className="px-4 py-6 text-center">
            <p className="mb-6 mt-8 font-semibold text-2xl ">
              Hue & Bloom Marketing: Your Cannabis Marketing Partner
            </p>
            <p className="mt-8 text-base">
              Hue & Bloom Marketing is your go-to cannabis marketing agency, specializing
              in crafting effective strategies to elevate your brand within the
              industry. Our comprehensive services cover everything from digital
              marketing to creative design, ensuring your message resonates with
              your target audience.
            </p>
          </div>
          ​
        </div>
      </div>




      <div className="mt-10">
  <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-20 items-center text-[#586828]">
    E-commerce Development Projects
  </h1>
</div>
<div className="flex flex-col gap-4 md:flex-row justify-center items-center">
  {/* First Image */}
  <div className="mb-4 ml-10 group relative">
    <a href="https://takespruce.com/">
      <img
        src={takespruces}
        className="h-[300px] max-w-full rounded-lg md:h-[400px] group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
        <span className="text-white font-semibold text-center text-xl">Take Spruce E-commerce Website <br/> Click to View</span>
      </div>
    </a>
  </div>

  {/* Second Image */}
  <div className="mb-4 ml-10 group relative">
    <a href="https://trilogeneseeds.com/">
      <img
        src={trilogeneseeds}
        className="h-[200px] w-[500px] rounded-full md:h-[350px] group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
        <span className="text-white font-semibold text-center text-xl">Trilogene Seeds E-commerce Website <br/> Click to View</span>
      </div>
    </a>
  </div>
</div>




   







      <div>
  <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-20 items-center text-[#586828]">
    Social Media Management
  </h1>
</div>
<div className="flex flex-col gap-4 md:flex-row justify-center items-center">
  {/* First Image */}
  <div className="mb-4 ml-10 group relative">
    <a href="https://www.instagram.com/quality.roots">
      <img
        src={QualityRoots}
        className="h-[300px] max-w-full rounded-lg md:h-[400px] group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
        <span className="text-white text-center font-semibold text-xl">Quality Roots Instagram <br/> Click to View</span>
      </div>
    </a>
  </div>

  {/* Second Image */}
  <div className="mb-4 group relative">
    <a href="https://www.instagram.com/mgc_social/">
      <img
        src={Mgcsocial}
        className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10 group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
        <span className="text-white font-semibold text-center text-xl">MGC Social Instagram<br/> Click to View</span>
      </div>
    </a>
  </div>

  {/* Third Image */}
  <div className="mb-4 group relative">
    <a href="https://www.facebook.com/urbnleaf/">
      <img
        src={UrbnLeaf1}
        className="h-[200px] w-[500px] rounded-full md:h-[350px] group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full">
        <span className="text-white font-semibold text-center text-xl">URBN Leaf Facebook <br/> Click to View</span>
      </div>
    </a>
  </div>
</div>






      <div className="mb-10">
  <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-10 items-center text-[#586828]">
    Custom Website Designs and Applications
  </h1>
</div>
<div className="flex flex-col gap-4 md:flex-row justify-center items-center">
  {/* First Image */}
  <div className="mb-4 ml-10 group relative">
    <a href="https://candropsproject1.web.app">
      <img
        src={Can}
        className="h-[300px] max-w-full rounded-lg md:h-[400px] group-hover:brightness-75 transition duration-300"
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white font-semibold text-center text-xl">Custom 3D Website Blazing Energy <br/> Click to View</span>
      </div>
    </a>
  </div>

  {/* Second Image */}
  <div className="mb-4 group relative">
  <a href="https://bulgetextapp.firebaseapp.com">
    <img
      src={Smoke}
      className="h-[200px] w-[500px] rounded-full md:h-[350px] group-hover:brightness-75 transition duration-300"
      alt=""
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
      <span className="text-white text-center font-semibold text-xl">When Will We Smoke App <br/> Click to View</span>
    </div>
  </a>
</div>

</div>


      


      <div>
        <Contact />
      </div>
    </main>
  );
}

export default Ourwork;
