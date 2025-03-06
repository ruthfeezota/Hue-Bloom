import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroNew() {
  const images = [
    "/public/img/BrandGuide.webp",
    "/public/img/BrandGuide2.webp",
    "/public/img/BrandGuide3.webp",
    "/public/img/BrandGuide4.webp",
    
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-3 py-24 mt-20 bg-neutral-100 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-[#F5ACC8] font-zentry">25% OFF</p>
          <p className="text-4xl font-bold md:text-8xl font-zentry">Winter Sale</p>
          <p className="mt-2 text-sm md:text-lg">
            Brand Guides and Business Design Systems
          </p>
          <a href="">
          <button className="text-lg md:text-2xl bg-[#A8C082] text-black py-2 px-5 mt-10 hover:bg-zinc-100 rounded-md transition duration-300 ease-in-out font-zentry ">
            Shop Now
          </button>
          </a>
        </div>

        {/* Image Section with Auto-Rotating Carousel */}
        <div className="order-1 lg:order-2 flex flex-col items-center">
          {/* Main Rotating Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              className="h-[80px] w-[80px] object-cover lg:w-[650px] lg:h-[500px] rounded-md shadow-lg"
              src={images[index]}
              alt="Main"
              transition={{ duration: 10.8 }}
            />
          </AnimatePresence>

          {/* Image Thumbnails */}
          <div className="mt-5 flex space-x-3">
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
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroNew;
