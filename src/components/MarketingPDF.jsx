import React from 'react';
import image1 from '../assets/4.png'
import image2 from '../assets/3.png'
import Button from "../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import EmailSubmitComponent from './EmailSubmitComponent';


function MarketingPDF() {


  const onButtonClick = () => {
    const pdfUrl = "MarketingGuide.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MarketingGuide.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-[#F4F3E1  ]'>
      
      {/* First Section with 4 Equal Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 mt-24 p-4 " id="section-1">
        {/* Image Section */}
        <div className=" sm:h-[350px] md:h-[300px] flex justify-center items-center">
          <img
            src={image2}
            className="h-[400px] object-cover rounded-md"
            alt=" SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs, Women owned business marketing agency, Support women owned businesses, Business coaching for women, Resources for women entrepreneurs, Women in business, Women's business network, Female entrepreneurs, Women owned small businesses, Business grants for women, Austin marketing agency for women, Marketing companies near me, Small business services Austin"
          />
        </div>
        
        {/* Text and Button Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-[500px]">
          <h1 className="sm:text-[28px] md:text-[40px] mb-4 text-[40px] font-zentry">
            Download Our <span className="text-[#a5d6]">Free</span> 2025 Marketing Cheat Sheet
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-5 px-4 md:px-0">
            Subscribe to our newsletter for this free download.
          </p>
          {/* <button
            onClick={onButtonClick}
            className="bg-[#A8C082] p-3 text-white rounded-full text-[14px] sm:text-[15px] md:text-[16px] mt-5 w-[200px] sm:w-[220px] md:w-[240px] mx-auto"
          >
            Download Guide
          </button> */}
          <EmailSubmitComponent/>
        </div>

        {/* Image Section (Second Block) */}
      </div>

      {/* Second Section with 4 Equal Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 mt-24 p-4" id="section-2">
        {/* Text and Button Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="sm:text-[28px] md:text-[40px] mb-4 text-[40px] font-zentry">
            Get Our <span className="text-[#a5d6]">Free</span> Marketing Guide!
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-5 px-4 md:px-0 max-w-[500px]">
            Subscribe to our newsletter to receive The Complete Guide to Marketing Your Business in 2025.
          </p>
          {/* <button
            onClick={onButtonClick}
            className="bg-[#A8C082] p-3 text-white rounded-full text-[14px] sm:text-[15px] md:text-[16px] mt-5 w-[200px] sm:w-[220px] md:w-[240px] mx-auto"
          >
            Download Guide
          </button> */}
            {/* <Button
              id="watch-trailer"
              title="Download Guide"
              onClick={onButtonClick}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-100 flex-center gap-1"
            /> */}
            <EmailSubmitComponent/>
            
        </div>
        {/* Image Section (Second Block) */}
        <div className="sm:h-[350px] md:h-[300px] flex justify-center items-center">
          <img
            src={image1}
            className="h-[400px] object-cover rounded-md"
            alt="Local SEO Austin, Austin web design services, Austin social media marketing, Marketing for Austin businesses, Women business owners Austin, Austin small business support, Austin marketing consultants, Brand development, Brand strategy, Email marketing, Online advertising, Lead generation, Conversion optimization, Marketing analytics, Digital branding, Content strategy, Marketing packages for small business, Affordable web design for women-owned businesses Austin, SEO services for small businesses owned by women, Social media marketing for female entrepreneurs nationwide, How to market a women-owned business online, Best marketing agency for women-led startups, Web design and SEO for local Austin businesses, Content creation services for women entrepreneurs, Increase website traffic for women-owned e-commerce, Graphic design for social media women businesses, Marketing strategy consultation for women business owners"
          />
        </div>
      </div>

     
    </div>
  );
}




export default MarketingPDF;
