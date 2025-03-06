import { useState } from 'react'
import AnimatedTitle from "../../components/AnimatedTitle";
import Contact from "../../components/Contact"
import takespruces from "../../assets/takespruce.png";
import trilogeneseeds from "../../assets/trilogeneseeds.png";


function Ecommerce() {
  
  return (
    <main className="w-screen h-[800px] bg-[#f5f5f5] ">
      <title>
      Ecommerce Page | Texas SEO Marketing | CBD & Cultivation Marketing | Hue & Bloom Marketing
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
            title="eCommerce"
            containerClass="mt-1 !text-black text-center"
          />    
<div className="px-4 py-6">
  <p className="mb-6 mt-8 text-lg font-semibold">
  Our E-commerce Management Services Include:
  </p>
  <ul className="space-y-4">
    <li>
      <span className="font-bold block">Platform Setup & Optimization:</span>
      <span>
      We'll ensure your store is set up on the right platform (Shopify, etc.) with a user-friendly interface and optimized for conversions.
      </span>
    </li>
    <li>
      <span className="font-bold block">Product Listing Optimization:</span>
      <span>
      We'll create compelling product descriptions, high-quality images and videos, and optimize your product pages to drive sales.
      </span>
    </li>
    <li>
      <span className="font-bold block">Order Fulfillment & Customer Service:</span>
      <span>
      We'll streamline your order fulfillment process to ensure timely and accurate delivery.
      </span>
    </li>
    <li>
      <span className="font-bold block">Marketing & Promotions:</span>
      <span>
      We'll develop and execute targeted marketing campaigns to attract new customers and retain existing ones.
      </span>
    </li>
    <li>
      <span className="font-bold block">Analytics and Reporting:</span>
      <span>
      We'll track key performance indicators (KPIs) such as website traffic, conversion rates, and customer lifetime value.
      </span>
    </li>
  </ul>
  <p className="mt-8 text-base">
    <span className="font-bold">Let Hue & Bloom Marketing help you build a thriving online web design business.</span> Contact us today to schedule a free consultation.
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
          <a href="https://takespruce.com/">
            <img
              src={takespruces}
              className="h-[300px] max-w-full rounded-lg md:h-[400px]"
              alt=""
            />
          </a>
        </div>

        {/* <div className="mb-4">
          <a href="https://www.instagram.com/mgc_social/">
            <img
              src={Mgcsocial}
              className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
              alt=""
            />
          </a>
        </div> */}
        <div className="mb-4 ml-10">
          <a href="https://trilogeneseeds.com/">
            <img
              src={trilogeneseeds}
              className="h-[200px] w-[500px] rounded-full md:h-[350px]"
              alt=""
            />
          </a>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </main>
  );
}

export default Ecommerce