import React, { useState, useEffect } from 'react';
import salonownter from '../assets/hairb.webp'
import salonownter1 from '../assets/Lash owner.jpg'
import salonownter2 from '../assets/hairbraider3.jpeg'

const reviews = [
  {
    text: "Hue and Bloom delivered exceptional results for my mobile salon. Within just two months, we achieved #1 search engine rankings, significantly increased appointment bookings, and I saw a direct sales boost from their email marketing strategies.",
    name: "Elizabeth M.",
    title: "Mobile Hair Braid Salon Owner",
    image: salonownter
  },
  {
    text: "Hue and Bloom transformed 'Luxe Lashes by Sarah's' online look. Sarah saw a big boost in new clients thanks to their website and Google My Business work. Highly recommend!",
    name: "Sarah Miller",
    title: "Luxe Lashes by Sarah",
    image: salonownter1
  },
  {
    text: "At 'Radiant Rejuvenation,' Michael and my team were blown away by Hue and Bloom! Their email and SEO strategy increased our client inquiries and revenue. We got top-notch results!",
    name: "Michael Chen",
    title: "Radiant Rejuvenation Owner",
    image: salonownter2
  }
];

function Ranking() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-auto mt-1 mb-4">
      <div className="w-full max-w-4xl p-6 rounded-lg text-center">
      <p className="text-4xl font-bold md:text-6xl font-null p-1 text-center mt-10 text-[#a5d6]">What our customers say</p>
        <h2 className="text-xl font-regular text-blue-gray-900 mb-4 ">{reviews[index].text}</h2>
        <img src={reviews[index].image} alt={reviews[index].name} className="w-16 h-16 rounded-full object-cover mx-auto mt-8" />
        <h6 className="mt-2 font-semibold">{reviews[index].name}</h6>
        <p className="text-gray-700 text-sm">{reviews[index].title}</p>
        <div className="flex justify-center mt-2">
          {Array.from({ length: reviews.length }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 mx-1 rounded-full ${i === index ? 'bg-yellow-700' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ranking;
