import React from "react";
import Mainimage7 from "../assets/NewMain7.webp";

function HeroNew() {
  return (
    <section className="px-3 bg-[#F4F3E1] h-screen">
      <div className="grid lg:grid-cols-2 items-center h-full">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center px-6">
          <p className="text-4xl font-bold md:text-6xl text-[#F5ACC8] text-center">
            Salon and Spa Growth: Web Design & SEO.
          </p>
          <p className="mt-2 text-sm md:text-[18px] text-center">
            Dominate Google Search. We design and launch your high-performance website, then implement proven SEO strategies to secure top rankings and drive a surge in qualified leads.
          </p>
          <a href="/website">
            <button className="text-md md:text-md bg-[#aa55dd66] hover:bg-green-200 text-black py-2 px-5 mt-6 rounded-full transition duration-300 ease-in-out">
            Get Your Free Website & SEO Audit
            </button>
          </a>
          <a href="/website">
            <button className="text-md md:text-md bg-[#F5ACC8] hover:bg-green-200 text-black py-2 px-5 mt-4 rounded-full transition duration-300 ease-in-out">
              Web Design Packages
            </button>
          </a>
          <a href="/seo">
            <button className="text-md md:text-md bg-green-200 hover:bg-[#aa55dd66] text-black py-2 px-5 mt-4 rounded-full transition duration-300 ease-in-out">
              SEO Packages
            </button>
          </a>
        </div>

        {/* Full Height Image Section */}
        <div className="order-1 lg:order-2 w-full h-full overflow-hidden">
          <img 
            src={Mainimage7} 
            className="w-full h-screen object-cover" 
          />
        </div>
      </div>
    </section>
  );
}

export default HeroNew;
