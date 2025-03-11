import React from "react";
import Mainimage7 from "../assets/NewMain7.webp";
import Mainimage from "../assets/NewMain.jpg"
import Mainimage1 from "../assets/NewMain1.webp"
import Mainimage2 from "../assets/NewMain2.webp"
import Mainimage3 from "../assets/NewMain3.jpg"
import Mainimage4 from "../assets/NewMain4.webp"
import Mainimage5 from "../assets/NewMain5.webp"
import Mainimage6 from "../assets/NewMain6.webp"
import Mainimage8 from "../assets/NewMain8.jpg"
import Mainimage9 from "../assets/NewMain9.jpg"
import Mainimage10 from "../assets/NewMain10.jpg"
import Mainimage11 from "../assets/NewMain11.jpg"

function HeroNew() {
  return (
    <section className="px-3 bg-[#F4F3E1] h-screen">
      <div className="grid lg:grid-cols-2 items-center h-full">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center px-6">
          <p className="text-4xl font-bold md:text-6xl text-[#F5ACC8] text-center">Service Business Growth: Websites & SEO.</p>
          {/* <p className="text-4xl font-bold md:text-8xl font-zentry bg-green-200 p-1 text-center">
            Marketing Agency
          </p> */}
          <p className="mt-2 text-sm md:text-[18px] text-center">
          Dominate Google Search. We design and launch your high-performance website, then implement proven SEO strategies to secure top rankings and drive a surge in qualified leads.
          </p>
          <a href="/website">
            <button className="text-md md:text-md bg-[#aa55dd66] hover:bg-green-200 text-black py-2 px-5 mt-6 rounded-full transition duration-300 ease-in-out ">
            Web Design Packages
            </button>
          </a>
          {/* <img src={Mainimage}  className="w-20 mt-10"/> */}
          <a href="/seo">
          <button className="text-md md:text-md bg-green-200 hover:bg-[#aa55dd66] text-black py-2 px-5 mt-4 rounded-full transition duration-300 ease-in-out ">
          SEO Packages
            </button>
          </a>
        </div>

        {/* Full Height Image Section */}
        <div className="order-1 lg:order-2 w-full h-full">
          <img src={Mainimage7} className="w-full h-[600px] md:h-[700px] object-cover" />
          
        </div>
      </div>
    </section>
  );
}
export default HeroNew;
