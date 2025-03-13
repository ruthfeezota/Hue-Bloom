import React, { useState } from 'react';
import salonownter1 from '../assets/Lash owner.jpg';
import salonownter2 from '../assets/hairbraider3.jpeg';
import salonownter3 from '../assets/hairb.webp';
import salonownter4 from '../assets/NewMain.jpg';  // Add images accordingly
import salonownter5 from '../assets/NewMain10.jpg';  // Add images accordingly
import salonownter6 from '../assets/NewMain11.jpg';  // Add images accordingly

const testimonials = [
  {
    text: "Hue and Bloom transformed 'Luxe Lashes by Sarah's' online look. Sarah saw a big boost in new clients thanks to their website and Google My Business work. Highly recommend!",
    name: "Sarah Miller",
    title: "Luxe Lashes by Sarah",
    image: salonownter1,
  },
  {
    text: "Hue and Bloom delivered exceptional results for my mobile salon. Within just two months, we achieved #1 search engine rankings, significantly increased appointment bookings, and I saw a direct sales boost from their email marketing strategies.",
    name: "Elizabeth M.",
    title: "Mobile Hair Braid Salon Owner",
    image: salonownter2,
  },
  {
    text: "At 'Radiant Rejuvenation,' Michael and my team were blown away by Hue and Bloom! Their email and SEO strategy increased our client inquiries and revenue. We got top-notch results!",
    name: "Michael Chen",
    title: "Radiant Rejuvenation Owner",
    image: salonownter3,
  },
  {
    text: "I couldn't be happier with the results. Hue and Bloom optimized my online presence, and now my business is getting much more traffic. The SEO services are top-notch!",
    name: "David James",
    title: "CEO/Chairman",
    image: salonownter4,
  },
  {
    text: "Our salon's transformation is incredible thanks to Hue and Bloom! We are now at the top of search results, and clients are constantly telling us how easy it is to find us online.",
    name: "Emily Foster",
    title: "Salon Owner",
    image: salonownter5,
  },
  {
    text: "Hue and Bloom’s attention to detail and strategic approach to SEO has elevated my business. The new website they designed for us has brought in new customers and increased inquiries.",
    name: "Jessica W.",
    title: "Hair Stylist",
    image: salonownter6,
  },
];

function Testimony() {
  const [index, setIndex] = useState(0);

  // Function to handle left arrow click
  const handleLeftClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Function to handle right arrow click
  const handleRightClick = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <section>
        <div className="mx-auto flex flex-col gap-y-6 px-5 py-16 sm:gap-y-10 md:px-10 relative">
          <h2 className="text-4xl font-bold md:text-6xl font-null p-1 text-center text-[#a5d6]">
            Testimonials
          </h2>

          <div className="p-6 text-center justify-center">
            <div className="flex mb-8 justify-center">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" className="mr-3 inline-block w-4 flex-none" />
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" className="mr-3 inline-block w-4 flex-none" />
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" className="mr-3 inline-block w-4 flex-none" />
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" className="mr-3 inline-block w-4 flex-none" />
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg" alt="" className="mr-3 inline-block w-4 flex-none" />
            </div>

            <p className="mb-4 px-10 max-w-xl text-center mx-auto">
              {testimonials[index].text}
            </p>

            <img className="w-16 h-16 rounded-full object-cover mx-auto mt-8" alt="" src={testimonials[index].image} />
            <p className="font-semibold text-lg mt-3">{testimonials[index].name}</p>
            <p className="text-sm text-gray-500">{testimonials[index].title}</p>
          </div>

          {/* Left and Right Arrow buttons */}
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 md:left-5"
            onClick={handleLeftClick}
          >
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1" width="71" height="71" rx="35.5" stroke="#E2E2E2" />
              <g clipPath="url(#clip0_3799_19567)">
                <path d="M44 35.5H31.83L37.42 29.91L36 28.5L28 36.5L36 44.5L37.41 43.09L31.83 37.5H44V35.5Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3799_19567">
                  <rect width="24" height="24" fill="white" transform="translate(24 24.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 md:right-5"
            onClick={handleRightClick}
          >
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="1" width="71" height="71" rx="35.5" stroke="#E2E2E2" />
              <g clipPath="url(#clip0_3799_19610)">
                <path d="M36 28.5L34.59 29.91L40.17 35.5H28V37.5H40.17L34.59 43.09L36 44.5L44 36.5L36 28.5Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_3799_19610">
                  <rect width="24" height="24" fill="white" transform="translate(24 24.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimony;
