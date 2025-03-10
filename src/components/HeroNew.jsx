import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandGuide from "../assets/BrandGuide.png";
import BrandGuide2 from "../assets/BrandGuide1.png";
import BrandGuide3 from "../assets/BrandGuide2.png";
import BrandGuide4 from "../assets/BrandGuide3.png";

function HeroNew() {
  const images = [BrandGuide, BrandGuide2, BrandGuide3, BrandGuide4];
  
  const [index, setIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-3 py-4 mt-20 bg-[#F4F3E1  ] lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-[#F5ACC8] font-zentry">25% OFF</p>
          <p className="text-4xl font-bold md:text-8xl font-zentry bg-green-200 p-1 text-center">All SEO Packages</p>
          <p className="mt-2 text-sm md:text-[18px]">
          Skyrocket Your Rankings: Rank Higher, Get More Traffic.
          </p>
          <a href="/store">
          <button className="text-lg md:text-xl bg-green-200 text-black py-2 px-5 mt-8 hover:bg-zinc-100 rounded-full transition duration-300 ease-in-out font-zentry">
            Shop Now
          </button>
          </a>
        </div>

        {/* Image Section with Auto-Rotating Carousel */}
        <div className="order-1 lg:order-2 flex flex-col items-center mr-10">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              className="w-h-[63vh] object-cover rounded-md shadow-lg" 
              src={images[index]}
              alt="Main"
              transition={{ duration: 20 }}
            />
          </AnimatePresence>

          {/* Image Thumbnails */}
          {/* <div className="mt-5 flex space-x-3">
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                className={`w-24 h-24 object-cover rounded-md cursor-pointer ${
                  index === i ? "border-2 border-black" : "opacity-50"
                }`}
                onClick={() => setIndex(i)}
                animate={{ opacity: index === i ? 1 : 0.5, scale: index === i ? 1.1 : 1 }}
                transition={{ duration: 10 }}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroNew;
