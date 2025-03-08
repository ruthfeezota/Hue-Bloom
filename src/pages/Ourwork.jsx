import React from 'react'
import { TiLocationArrow } from "react-icons/ti";
import Button from "../components/Button";
import NavBar from '../components/Navbar';
import image1 from '../assets/UpleafMediaBrandGuide.png';
import image2 from '../assets/UpleafMediaSocials.png';
import image3 from '../assets/UpleafMediaBrandSocials.png';
import image4 from '../assets/MBGuide.png';
import image5 from '../assets/MGWebsite.png';
import image6 from '../assets/Liz Braids-5.png'


function Ourwork() {
  return (

    <div>
        <NavBar/>
        <section className="overflow-hidden bg-[#F4F3E1  ] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
        <h1 className='flex items-center justify-center m-10 font-zentry text-7xl text-[#F5ACC8]'>Our Work</h1>
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={image1}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={image2}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="z-10 my-4">
                    <img
                      src={image3}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
            
                <span className="mb-4 block text-xl font-semibold text-primary">
                  Upleaf Media
                </span>
                <h2 className="mb-5 font-zentry text-3xl  text-dark dark:text-black sm:text-[40px]/[48px]">
                Comprehensive Rebranding: Website, Graphics, and Social Media for Upleaf Media
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">We were thrilled to partner with Upleaf Media, a leading cannabis marketing agency, to revitalize their brand identity. 
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Our collaboration encompassed a comprehensive redesign, encompassing website development, graphic design, and social media content creation.
                </p>
                <ul className="space-y-4">
              <li>
                <span className="font-bold block">
                Modernized Branding:
                </span>
                <span>
                We crafted a fresh and contemporary brand identity that resonated with Upleaf Media's forward-thinking approach to cannabis marketing.
                </span>
              </li>
              <li>
                <span className="font-bold block">Website Development:</span>
                <span>
                We designed and developed a sleek and user-friendly website that showcased Upleaf Media's expertise and client portfolio.
                </span>
              </li>
              <li>
                <span className="font-bold block">Social Media Content:</span>
                <span>
                We prioritize intuitive navigation and engaging interactions to guide users seamlessly through your website.
                </span>
              </li>
             
            </ul>
                <a href="https://www.upleafmedia.com" target="_blank">
            <Button
              id="watch-trailer"
              title="View Client's Website"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-red-200 flex-center gap-1 relative mt-4"
              
            />
            </a> 
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="overflow-hidden bg-[#F4F3E1  ] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] mb-28">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
            
                <span className="mb-4 block text-lg font-semibold text-primary">
                Majestic Braids - Mobile Hair Braiding
                </span>
                <h2 className="mb-5 font-zentry text-3xl  text-dark dark:text-black sm:text-[40px]/[48px]">
                 Enhanced Digital Presence
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">We were delighted to partner with Majestic Braids - Mobile Hair Braiding to elevate their online presence and connect them with more clients.
                </p>
                <p className="mb-4 text-base text-body-color dark:text-dark-6">
                Our collaboration focused on building a strong digital foundation through website development, Google My Business optimization, and engaging social media content design.
                </p>
                <ul className="space-y-4">
              <li>
                <span className="font-bold block">
                Strengthened Online Visibility:
                </span>
                <span>
                We optimized Majestic Braids' digital footprint to enhance their visibility and attract local customers.
                </span>
              </li>
              <li>
                <span className="font-bold block">Website Development:</span>
                <span>
                We designed and developed a user-friendly website that showcases their braiding expertise and mobile services, making it easy for clients to book appointments.
                </span>
              </li>
              <li>
                <span className="font-bold block">Google My Business Optimization:</span>
                <span>
                We optimized their Google My Business profile to improve local search rankings and drive customer inquiries.
                </span>
              </li>
              <li>
                <span className="font-bold block">Social Media Content Design:</span>
                <span>
                We created visually appealing and engaging social media content that highlights their braiding styles and promotes their services, helping build a strong online community.
                </span>
              </li>
             
            </ul>
                <a href="https://cal.com/hueandbloom" target="_blank">
            <Button
              id="watch-trailer"
              title="View Client's Website"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-red-200 flex-center gap-1 relative mt-4"
              
            />
            </a> 
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={image4}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={image5}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="z-10 my-4">
                    <img
                      src={image6}
                      alt=""
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
   
      </div>
  )
}

export default Ourwork



// import { useState } from "react";
// import AnimatedTitle from "../components/AnimatedTitle";
// import Contact from "../components/Contact";
// import QualityRoots from "../assets/QualityRoots.png";
// import UrbnLeaf1 from "../assets/UrbnLeaf1.png";
// import Mgcsocial from "../assets/mgcsocial.png";
// import takespruces from "../assets/takespruce.png";
// import trilogeneseeds from "../assets/trilogeneseeds.png";
// import Smoke from "../assets/Smoke.png";
// import Can from "../assets/canrent.png";

// function Ourwork() {
//   return (
//     <main className="w-screen flex-grow bg-[#F4F3E1  ] ">
//       <title>
//         Our Work Page | CBD & Cultivation Marketing | SEO Marketing Agency
//       </title>
//       <meta
//         name="description"
//         content="Based in Austin, Hue & Bloom Marketing serves women entrepreneurs across the US. We specialize in web design, SEO, and social media to help you bloom online."
//       />
//       <meta
//         name="keywords"
//         content=" Women owned business marketing agency, Support women owned businesses, Business coaching for women, Resources for women entrepreneurs, Women in business, Women's business network, Female entrepreneurs, Women owned small businesses, Business grants for women, Austin marketing agency for women, Marketing companies near me, Small business services Austin, Local SEO Austin, Austin web design services, Austin social media marketing, Marketing for Austin businesses, Women business owners Austin, Austin small business support, Austin marketing consultants, Brand development, Brand strategy, Email marketing, Online advertising, Lead generation, Conversion optimization, Marketing analytics, Digital branding, Content strategy, Marketing packages for small business, Affordable web design for women-owned businesses Austin, SEO services for small businesses owned by women, Social media marketing for female entrepreneurs nationwide, How to market a women-owned business online, Best marketing agency for women-led startups, Web design and SEO for local Austin businesses, Content creation services for women entrepreneurs, Increase website traffic for women-owned e-commerce, Graphic design for social media women businesses, Marketing strategy consultation for women business owners.
// "
//       />

//       <div className="relative max-w-2xl mx-auto mt-32">
//         <div className="relative z-10">
//           <AnimatedTitle
//             title="Our<br/>Work<br/>"
//             containerClass="mt-1 !text-black text-center"
//           />
//           <div className="px-4 py-6 text-center">
//             <p className="mb-6 mt-8 font-semibold text-2xl ">
//             Hue & Bloom Marketing: Your Digital Growth Partner for Women-Owned Businesses
//             </p>
//             <p className="mt-8 text-base">
//             At Hue & Bloom Marketing, we're passionate about empowering women entrepreneurs with impactful online strategies. We specialize in crafting custom web designs, strategic SEO, and compelling content that elevates your brand and drives real results.

// We understand the unique needs of women-owned businesses and provide comprehensive services tailored to help you thrive in the digital landscape. From creating beautiful, user-friendly websites to optimizing your online presence for search engines, we ensure your message resonates with your target audience and attracts your ideal customers.
//             </p>
//           </div>
//           ​
//         </div>
//       </div>




//       <div className="mt-10">
//   <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-20 items-center text-[#A8C082]">
//     Web Design
//   </h1>
// </div>
// <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
//   {/* First Image */}
//   <div className="mb-4 ml-10 group relative">
//     <a href="https://takespruce.com/">
//       <img
//         src={takespruces}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
//         <span className="text-white font-semibold text-center text-xl">Take Spruce E-commerce Website <br/> Click to View</span>
//       </div>
//     </a>
//   </div>

//   {/* Second Image */}
//   <div className="mb-4 ml-10 group relative">
//     <a href="https://trilogeneseeds.com/">
//       <img
//         src={trilogeneseeds}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
//         <span className="text-white font-semibold text-center text-xl">Trilogene Seeds E-commerce Website <br/> Click to View</span>
//       </div>
//     </a>
//   </div>
// </div>




   







//       <div>
//   <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-20 items-center text-[#A8C082]">
//     SEO (Search Engine Optimization)
//   </h1>
// </div>
// <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
//   {/* First Image */}
//   <div className="mb-4 ml-10 group relative">
//     <a href="https://www.instagram.com/quality.roots">
//       <img
//         src={QualityRoots}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
//         <span className="text-white text-center font-semibold text-xl">Quality Roots Instagram <br/> Click to View</span>
//       </div>
//     </a>
//   </div>

//   {/* Second Image */}
//   <div className="mb-4 group relative">
//     <a href="https://www.instagram.com/mgc_social/">
//       <img
//         src={Mgcsocial}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] m-10 group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
//         <span className="text-white font-semibold text-center text-xl">MGC Social Instagram<br/> Click to View</span>
//       </div>
//     </a>
//   </div>

//   {/* Third Image */}
//   <div className="mb-4 group relative">
//     <a href="https://www.facebook.com/urbnleaf/">
//       <img
//         src={UrbnLeaf1}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
//         <span className="text-white font-semibold text-center text-xl">URBN Leaf Facebook <br/> Click to View</span>
//       </div>
//     </a>
//   </div>
// </div>






//       <div className="mb-10">
//   <h1 className="text-center font-bold text-5xl tracking-wide font-zentry m-10 items-center text-[#A8C082]">
//     Content and Social Media Design
//   </h1>
// </div>
// <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
//   {/* First Image */}
//   <div className="mb-4 ml-10 group relative">
//     <a href="https://candropsproject1.web.app">
//       <img
//         src={Can}
//         className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//         alt=""
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
//         <span className="text-white font-semibold text-center text-xl">Custom 3D Website Blazing Energy <br/> Click to View</span>
//       </div>
//     </a>
//   </div>

//   {/* Second Image */}
//   <div className="mb-4 group relative">
//   <a href="https://bulgetextapp.firebaseapp.com">
//     <img
//       src={Smoke}
//       className="h-[300px] max-w-full rounded-lg md:h-[300px] group-hover:brightness-75 transition duration-300"
//       alt=""
//     />
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
//       <span className="text-white text-center font-semibold text-xl">When Will We Smoke App <br/> Click to View</span>
//     </div>
//   </a>
// </div>

// </div>


      


//       <div>
//         <Contact />
//       </div>
//     </main>
//   );
// }

// export default Ourwork;
