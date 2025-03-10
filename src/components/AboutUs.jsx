import React from 'react'
import AnimatedTitle from "./AnimatedTitle";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import image1 from '../assets/17.jpeg'
import image2 from '../assets/20.jpg'
import image3 from '../assets/19.jpg'

function AboutUs() {
  return (
    <section className="overflow-hidden bg-[#F4F3E1  ] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={image1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={image2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="z-10 my-4">
                    <img
                      src={image3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  Why Choose Hue and Bloom
                </span>
                <h2 className="mb-5 font-zentry text-3xl  text-dark dark:text-black sm:text-[40px]/[48px]">
                We understand the unique challenges and triumphs of service based entrepreneurs.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">Our mission is to provide tailored marketing solutions that not only meet your business goals but also reflect the power and beauty of your brand. 
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Founded on the principles of empowerment, creativity, and strategic growth, we're here to be your partner in building a thriving digital presence.
                </p>
                <a href="https://cal.com/hueandbloom" target="_blank">
            <Button
              id="watch-trailer"
              title="Get Started"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-[#a5d6] flex-center gap-1 relative"
              
            />
            </a> 
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs