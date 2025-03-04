import { useState } from "react";
import Gallery from "../../components/Gallary";
import AnimatedTitle from "../../components/AnimatedTitle";
import Contact from "../../components/Contact";
import QualityRoots from "../../assets/QualityRoots.png";
import UrbnLeaf1 from "../../assets/UrbnLeaf1.png";
import Mgcsocial from "../../assets/mgcsocial.png";
import Button from "../../components/Button";

function Socialmedia() {
  return (
    <main className="w-screen h-[800px] bg-[#F4F3E1] ">
      <title>
        Social Media Management Page | CBD & Cultivation Marketing |
        Hemp Marketing Agency
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
            title="Social<br/>Media<br/>Management"
            containerClass="mt-1 !text-black text-center"
          />
          <div className="px-4 py-6">
          <p className="mb-4 mt-4 text-lg font-semibold text-center">
          Dominate the Social Scene
            </p>
             <p className="mb-6"><span className="font-bold"> <br/>Turn Followers Into Brand Advocates</span> Social media is where your brand comes to life. At Hue & Bloom Marketing, we create and manage campaigns that spark conversations, build connections, and drive real results.
</p>
            <p className="mb-6 mt-8 text-lg font-semibold">
              Our Social Media Marketing Services Include:
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold block">
                  Social Media Strategy Development:
                </span>
                <span>
                  We'll create a customized strategy that outlines your goals,
                  target audience, and key performance indicators.
                </span>
              </li>
              <li>
                <span className="font-bold block">Content Creation:</span>
                <span>
                  Our team will produce high-quality content, including images,
                  videos, and blog posts, that effectively and consistently
                  captures the attention of your audience.
                </span>
              </li>
              <li>
                <span className="font-bold block">Community Management:</span>
                <span>
                  We'll actively engage with your followers, respond to comments
                  and messages, and foster a positive and engaging online
                  community.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                  Paid Social Advertising:
                </span>
                <span>
                  We'll leverage platforms like Facebook, Instagram, and Google
                  Ads to reach a wider audience and drive robust results.
                </span>
              </li>
              <li>
                <span className="font-bold block">
                  Analytics and Reporting:
                </span>
                <span>
                  We'll track your social media performance and provide regular
                  reports on key metrics to measure your success against
                  organizational targets.
                </span>
              </li>
            </ul>
            <p className="mt-8 text-base">
              <span className="font-bold">
                Let Hue & Bloom Marketing help you unlock the power of social media for
                your cannabis brand.
              </span>{" "}
              Contact us today to learn more about our services.
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
          <a href="https://www.instagram.com/quality.roots">
            <img
              src={QualityRoots}
              className="h-[300px] max-w-full rounded-lg md:h-[400px]"
              alt=""
            />
          </a>
        </div>
        <div className="mb-4">
          <a href="https://www.instagram.com/mgc_social/">
            <img
              src={Mgcsocial}
              className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
              alt=""
            />
          </a>
        </div>
        <div className="mb-4">
          <a href="https://www.facebook.com/urbnleaf/">
            <img
              src={UrbnLeaf1}
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

export default Socialmedia;
