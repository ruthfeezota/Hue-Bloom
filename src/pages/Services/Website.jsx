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
    <main className="w-screen h-[800px] bg-[#F4F3E1  ] ">
      <title>
      Website Page | Texas web design Marketing | CBD & Cultivation Marketing | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing is a leading web design marketing agency in Texas specializing in helping Cultivation Equipment Providers, CBD Manufacturers, Testing Labs, Seed Banks, and Genetics Companies achieve their marketing goals. We offer a full suite of services, including SEO, social media marketing, content marketing, and more. Contact us today for a free consultation."
      />
      <meta
        name="keywords"
        content="SEO Marketing Agency, SEO Marketing Services, CBD Marketing, web design Marketing, Industrial SEO Marketing, SEO Product Marketing, SEO Branding, SEO Advertising, SEO SEO, SEO Social Media Marketing, SEO Content Marketing, SEO Email Marketing, SEO Google Ads, SEO Marketing Strategy, SEO Market Research, SEO Compliance Marketing, SEO Marketing Agency Austin, Austin SEO Marketing, SEO Marketing Services Austin TX, CBD Marketing Austin, web design Marketing Austin, SEO Marketing Agency Texas, Texas SEO Marketing, SEO Marketing Services Texas, Best SEO Marketing Agency Austin, Top Rated SEO Marketing Agency Austin, SEO Marketing Agency for Startups, SEO Marketing Agency for E-commerce, SEO Marketing Agency for CBD Oil, SEO Marketing Agency for Delta 8, SEO Marketing Agency for Farmers, SEO Marketing Agency with Google Ads Expertise, SEO Marketing Agency specializing in e-commerce, SEO Marketing Agency specializing in Skincare"
      />

      <div className="relative max-w-2xl mx-auto mt-32">
        <div className="relative z-10">
          <AnimatedTitle
            title="Custom<br/>Web Designs<br/>"
            containerClass="mt-1 !text-black text-center"
          />
          <div className="px-4 py-6">
            <p className="mb-6 mt-6 text-lg font-semibold">
            Step Into the Future of Web Design
            </p>
             <p className="mb-6">Engage Your Audience with Custom Web Experiences. Transform your website into an interactive and engaging online presence. Hue & Bloom Marketing specializes in creating custom web designs tailored to women-owned businesses in Austin and beyond. Our innovative designs captivate visitors, increase engagement, and reflect the unique essence of your brand. We'll optimize your website, whether it's on Shopify, WordPress, or another platform, with modern themes, conversion-focused layouts, and stunning visuals. Let's make your website a powerful tool for your business's growth.
</p>
            <p className="font-bold mb-2">Our Custom Web Design Services Include:</p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold block">
                Custom Concept & Design:
                </span>
                <span>
                We craft unique website designs that align perfectly with your brand identity and business goals.
                </span>
              </li>
              <li>
                <span className="font-bold block">Website Development:</span>
                <span>
                We build high-performance, user-friendly websites using the latest web technologies.
                </span>
              </li>
              <li>
                <span className="font-bold block">User Experience (UX) Design:</span>
                <span>
                We prioritize intuitive navigation and engaging interactions to guide users seamlessly through your website.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                E-commerce Optimization:
                </span>
                <span>
                We optimize your online store for conversions, creating a smooth and enjoyable shopping experience.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                Maintenance & Support:
                </span>
                <span>
                We provide ongoing maintenance and support to keep your website up-to-date and performing optimally.
                </span>
              </li>
            </ul>
            <p className="mt-8 text-base">
              <span className="font-bold">
              Let us elevate your online presence with a custom web design that drives results and enhances your brand image. Contact us today to learn more about our web design services and how we can help your women-owned business thrive.
              </span>{" "}
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
