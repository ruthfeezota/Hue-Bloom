import React from 'react';
import { TiLocationArrow } from "react-icons/ti";
import Button from "../components/Button";
import image1 from '../assets/BrandGuide.png';
import image2 from '../assets/BrandGuide1.png';
import image3 from '../assets/BrandGuide3.png';


function SEO() {
  return (
    <section className="overflow-hidden bg-[#F4F3E1] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
     <div className="container mx-auto">
  <h1 className='flex items-center justify-center m-10 font-zentry text-7xl text-black'>Dominate Google Rankings</h1>
  <div className="-mx-4 flex flex-wrap items-center justify-between">
    <div className="w-full px-4 lg:w-6/12">
      <div className="-mx-3 flex items-center sm:-mx-4">
        <div className="w-full px-3 sm:px-4 xl:w-1/2">
          <div className="py-3 sm:py-4">
            <img src={image1} alt="SEO Optimization Process" className="h-[200px] rounded-md" />
          </div>
          <div className="py-3 sm:py-4">
            <img src={image2} alt="Google Rankings Growth" className="h-[200px] rounded-md" />
          </div>
        </div>
        <div className="w-full px-3 sm:px-4 xl:w-1/2">
          <div className="z-10 my-4">
            <img src={image3} alt="SEO Strategy in Action" className="h-[200px] rounded-md" />
          </div>
        </div>
        
      </div>
      <h3 className='text-purple-500'>Our Happy Customers</h3>
    </div>

    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
      <div className="mt-10 lg:mt-0">
        <span className="mb-4 block text-xl font-semibold text-primary text-purple-500">SEO That Delivers Real Results</span>
        <h2 className="mb-5 font-zentry text-3xl text-dark dark:text-black sm:text-[40px]/[48px]">
          Get Found, Get Clicks, Get Customers
        </h2>
        <p className="mb-5 text-base text-body-color dark:text-black">
          Your customers are searching for you—make sure they find you first. Our expert SEO strategies help small businesses rise to the top of Google rankings and turn clicks into conversions.
        </p>
        <ul className="space-y-4">
          <li>
            <span className="font-bold block">Higher Rankings, More Traffic:</span>
            <span>We optimize your website to rank for high-intent keywords that attract your ideal customers.</span>
          </li>
          <li>
            <span className="font-bold block">Google Business Profile Optimization:</span>
            <span>Stand out in local searches and increase visibility in your area.</span>
          </li>
          <li>
            <span className="font-bold block">Ongoing SEO Strategy:</span>
            <span>We continuously refine and adapt your SEO to keep you ahead of competitors.</span>
          </li>
        </ul>
        <div className="mt-4">
          <a href="/seo-packages">
            <Button
              id="view-seo-packages"
              title="Boost Your Rankings Today"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-red-200 flex items-center gap-2 rounded-lg px-4 py-2"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="relative isolate bg-[#F4F3E1] px-6 py-24 sm:py-32 lg:px-8">
    <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
      <div
        className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-pink-300 to-indigo-400 opacity-30"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}>
        </div>
    </div>



    <div className="mx-auto max-w-4xl text-center">
  <h2 className="text-base font-semibold text-purple-500">SEO Packages</h2>
  <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
    Rank Higher, Get More Customers, Grow Your Business
  </p>
</div>
<p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
  Choose the SEO plan that fits your goals and start seeing real results. More traffic, more leads, and higher rankings—guaranteed.
</p>
<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
  {[
    {
      id: 'tier-smallbiz',
      title: 'SEO Essentials',
      price: '$399',
      description: "Perfect for small businesses wanting to improve visibility and attract local customers.",
      features: [
        'Targeted Keyword Optimization',
        'On-Page SEO Enhancements',
        'Google Business Profile Optimization',
        'Comprehensive SEO Audit',
        'Monthly Performance Reports',
      ],
      buttonText: 'Start Growing Now',
      buttonClass: 'text-indigo-600 ring-1 ring-indigo-200 hover:ring-indigo-300',
      textClass: 'text-gray-900',
      bgClass: 'bg-white/60',
    },
    {
      id: 'tier-enterprise',
      title: 'SEO Growth',
      price: '$599',
      description: 'For businesses ready to dominate search results and drive consistent organic growth.',
      features: [
        'Everything in SEO Essentials',
        'Competitor Analysis & Strategy',
        'Content Marketing & Blogging',
        'Backlink Building for Authority',
        'Ongoing Optimization & Adjustments',
      ],
      buttonText: 'Get More Traffic Now',
      buttonClass: 'bg-purple-400 text-white hover:bg-indigo-400',
      textClass: 'text-white',
      bgClass: 'bg-red-200',
    },
  ].map((tier) => (
    <div key={tier.id} className={`relative rounded-3xl p-8 ring-1 shadow-lg ${tier.bgClass} sm:p-10`}>
      <h3 className={`text-base font-semibold ${tier.id === 'tier-smallbiz' ? 'text-indigo-600' : 'text-indigo-400'}`}>
        {tier.title}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`text-5xl font-semibold tracking-tight ${tier.textClass}`}>{tier.price}</span>
        <span className="text-base text-gray-400">/month</span>
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
</div>
</div>


    </section>
  );
}

export default SEO;
