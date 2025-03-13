import React from 'react'
import { TiLocationArrow } from "react-icons/ti";
import Button from "../../components/Button";
import NavBar from '../../components/Navbar';
import image1 from '../../assets/Glossed1.png';
import image2 from '../../assets/Glossed2.png';
import image3 from '../../assets/Glossed3.png';
import image4 from '../../assets/MBGuide.png';
import image5 from '../../assets/MGWebsite.png';
import image6 from '../../assets/Liz Braids-5.png'


function UpleafMedia() {
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

export default UpleafMedia