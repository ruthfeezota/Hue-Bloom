import { useState } from "react";
import Gallery from "../../components/Gallary";
import AnimatedTitle from "../../components/AnimatedTitle";
import Contact from "../../components/Contact";
import QualityRoots from "../../assets/QualityRoots.png";
import Smoke from "../../assets/Smoke.png";
import Can from "../../assets/canrent.png";
import Button from "../../components/Button";

function Website() {
  return (
    <main className="w-screen h-[800px] bg-[#F4F3E1] ">
      <title>
      Website Page | Texas Cannabis Marketing | CBD & Cultivation Marketing | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing is a leading cannabis marketing agency in Texas specializing in helping Cultivation Equipment Providers, CBD Manufacturers, Testing Labs, Seed Banks, and Genetics Companies achieve their marketing goals. We offer a full suite of services, including SEO, social media marketing, content marketing, and more. Contact us today for a free consultation."
      />
      <meta
        name="keywords"
        content="Hemp Marketing Agency, Hemp Marketing Services, CBD Marketing, Cannabis Marketing, Industrial Hemp Marketing, Hemp Product Marketing, Hemp Branding, Hemp Advertising, Hemp SEO, Hemp Social Media Marketing, Hemp Content Marketing, Hemp Email Marketing, Hemp Google Ads, Hemp Marketing Strategy, Hemp Market Research, Hemp Compliance Marketing, Hemp Marketing Agency Austin, Austin Hemp Marketing, Hemp Marketing Services Austin TX, CBD Marketing Austin, Cannabis Marketing Austin, Hemp Marketing Agency Texas, Texas Hemp Marketing, Hemp Marketing Services Texas, Best Hemp Marketing Agency Austin, Top Rated Hemp Marketing Agency Austin, Hemp Marketing Agency for Startups, Hemp Marketing Agency for E-commerce, Hemp Marketing Agency for CBD Oil, Hemp Marketing Agency for Delta 8, Hemp Marketing Agency for Farmers, Hemp Marketing Agency with Google Ads Expertise, Hemp Marketing Agency specializing in e-commerce, Hemp Marketing Agency specializing in Skincare"
      />

      <div className="relative max-w-2xl mx-auto mt-32">
        <div className="relative z-10">
          <AnimatedTitle
            title="Custom<br/>Websites<br/>"
            containerClass="mt-1 !text-black text-center"
          />
          <div className="px-4 py-6">
            <p className="mb-6 mt-6 text-lg font-semibold">
            Step Into the Future of Web Design
            </p>
             <p className="mb-6">Engage Your Audience with Custom 3D Web Experiences Transform your website into an interactive masterpiece. Hue & Bloom Marketing specializes in custom 3D web design tailored for cannabis brands. Our innovative designs captivate visitors, increase engagement, and reflect the uniqueness of your products.
We’ll optimize your Shopify or e-commerce platform with advanced themes, conversion-focused layouts, and stunning visuals. Let’s make your website unforgettable.
</p>
            <p className="font-bold mb-2">Our 3D Website Design Services Include</p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold block">
                3D Concept & Design:
                </span>
                <span>
                We create detailed 3D models, animations, and interactive elements that align with your brand identity.
                </span>
              </li>
              <li>
                <span className="font-bold block">Custom Development:</span>
                <span>
                We leverage cutting-edge technologies like React, Three.js, and GSAP to build high-performance, custom-coded 3D websites.
                </span>
              </li>
              <li>
                <span className="font-bold block">User Experience (UX) Design:</span>
                <span>
                We prioritize intuitive navigation and engaging interactions to guide users effortlessly through your 3D website.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                Performance Optimization:
                </span>
                <span>
                We optimize your 3D website for speed and performance across all devices, ensuring fast loading times and smooth animations.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                Maintenance & Support:
                </span>
                <span>
                We provide ongoing maintenance and support to ensure your 3D website remains up-to-date and performs optimally.
                </span>
              </li>
            </ul>
            <p className="mt-8 text-base">
              <span className="font-bold">
              Let us elevate your online presence with a truly immersive 3D experience that drives conversions and enhances your brand image.
              </span>{" "}
              Contact us today to learn more about our 3D web design services.
            </p>
          </div>
          ​
        </div>
      </div>

      <div>
        <h1 className="text-center font-bold text-[60px] m-10 items-center">
          Our Projects
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center ">
        <div className="mb-4 ml-10">
          <a href="https://candropsproject1.web.app">
            <img
              src={Can}
              className="h-[300px] max-w-full rounded-lg md:h-[400px]"
              alt=""
            />
          </a>
        </div>

        {/* <div className="mb-4">
          <a href="https://www.instagram.com/mgc_social/">
            <img
              src={Can}
              className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
              alt=""
            />
          </a>
        </div> */}
        <div className="mb-4">
          <a href="https://bulgetextapp.firebaseapp.com">
            <img
              src={Smoke}
              className="h-[200px] w-[500px] rounded-full md:h-[350px]"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center p-2">
        <a href="https://cal.com/hueandbloom" target="_blank">
            <Button
              title="Book A FREE Strategy Call"
              containerClass="mt-10 cursor-pointer bg-yellow-100"
            />
          </a>
        </div>

      <div>
        <Contact />
      </div>
    </main>
  );
}

export default Website;
