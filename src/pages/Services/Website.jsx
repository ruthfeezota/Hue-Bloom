import React from 'react';
import { TiLocationArrow } from "react-icons/ti";
import Button from "../../components/Button";
import image1 from '../../assets/Web1.png';
import image2 from '../../assets/Web2.png';
import image3 from '../../assets/Web3.png';
import Testimony from '../../components/Testimony';
import Contact from '../../components/Contact';

function Website() {
  return (
    <section className="overflow-hidden bg-[#F4F3E1] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <h1 className='flex items-center justify-center m-10 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl'>Salon and Spa Websites That Convert</h1>
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4 p-1">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                <a href='https://urbanevolutionsalon.com/'>
                  <img src={image1} alt="Custom Web Design" className="w-full rounded-md" />
                  </a>
                </div>
                <div className="py-3 sm:py-4">
                <a href='https://www.mrnaturalz.com/'>
                  <img src={image2} alt="Mobile-Optimized Websites" className="w-full rounded-md" />
                  </a>
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="z-10 my-4">
                <a href='https://harlemnaturalhairsalon.com/'>
                  <img src={image3} alt="SEO-Friendly Web Design" className="w-full rounded-md" />
                  </a>
                </div>
              </div>
            </div>
            <h3 className='text-purple-500'>Our Happy Customers</h3>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="mb-4 block text-xl font-semibold text-primary text-purple-500">Launch Your Website in 2-4 Weeks</span>
              <h2 className="mb-5 font-zentry text-3xl text-dark dark:text-black sm:text-[40px]/[48px]">
                Professional Web Design for Any Platform
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-black">
                Whether you need a site on GoDaddy, Square, Wix, WordPress, or a fully custom-coded website, we deliver stunning, high-performing websites that rank on Google and drive results.
              </p>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold block">Optimized for SEO & Speed:</span>
                  <span>Our websites load fast and are designed to rank on Google.</span>
                </li>
                <li>
                  <span className="font-bold block">Mobile-Friendly & User-Focused:</span>
                  <span>Perfectly responsive on all devices to maximize engagement.</span>
                </li>
                <li>
                  <span className="font-bold block">Custom Design That Reflects Your Brand:</span>
                  <span>Tailored layouts and visuals to make your business stand out.</span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="/web-design-packages">
                  <Button
                    id="view-web-design-packages"
                    title="Get Your Website Started"
                    leftIcon={<TiLocationArrow />}
                    containerClass="bg-red-200 flex items-center gap-2 rounded-lg px-4 py-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimony/>

      <div className="mx-auto max-w-4xl text-center mt-10">
  <h2 className="text-base font-semibold text-purple-500">Web Design Packages</h2>
  <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
    Beautiful, High-Performing Websites in Just 2-4 Weeks
  </p>
</div>
<p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
  We craft custom websites that look great, load fast, and help you grow. Choose a plan that fits your needs, and we’ll bring your vision to life.
</p>
<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
  {[
    {
      id: 'tier-starter',
      title: 'Starter Website',
      price: '$599',
      description: "Perfect for small businesses needing a professional online presence quickly.",
      features: [
        'Custom WordPress, Wix, or Square Design',
        'Up to 5 Pages',
        'Mobile-Friendly & Fast Loading',
        'SEO-Optimized Structure',
        'Basic Contact Form',
        'Launch in 2-4 Weeks',
      ],
      buttonText: 'Get Started',
      buttonClass: 'text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300',
      textClass: 'text-gray-900',
      bgClass: 'bg-white/60',
    },
    {
      id: 'tier-premium',
      title: 'Premium Website',
      price: '$999',
      description: 'For businesses that need a custom, high-performing site with advanced features.',
      features: [
        'Custom WordPress, Wix, or Hand-Coded Design',
        'Up to 10 Pages + Blog Setup',
        'Conversion-Optimized Layout',
        'Advanced SEO & Speed Optimization',
        'E-commerce & Payment Integration',
        'Launch in 2-4 Weeks',
      ],
      buttonText: 'Build My Website',
      buttonClass: 'bg-purple-400 text-white hover:bg-indigo-400',
      textClass: 'text-white',
      bgClass: 'bg-red-200',
    },
  ].map((tier) => (
    <div key={tier.id} className={`relative rounded-3xl p-8 ring-1 shadow-lg ${tier.bgClass} sm:p-10`}>
      <h3 className={`text-base font-semibold ${tier.id === 'tier-starter' ? 'text-indigo-600' : 'text-indigo-400'}`}>
        {tier.title}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`text-5xl font-semibold tracking-tight ${tier.textClass}`}>{tier.price}</span>
      </p>
      <p className={`mt-6 text-base ${tier.textClass === 'text-white' ? 'text-black' : 'text-gray-600'}`}>
        {tier.description}
      </p>
      <ul className="mt-8 space-y-3 text-sm sm:mt-10">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href="/contactus" className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ${tier.buttonClass} sm:mt-10`}>
        {tier.buttonText}
      </a>
    </div>
  ))}
</div>

<Contact/>


      
    </section>
  );
}

export default Website;
