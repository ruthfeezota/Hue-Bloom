import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";
import RunClub from "../assets/RunClub.jpg";
import texasoriginalteam from "../assets/texasoriginalteam.png";
import PropImg from "../assets/PropQuestion.png";
import DylayPhoto from "../assets/DylanPhoto.png";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [interest, setInterest] = useState("");
  const [state, setState] = useState("");
  const [typeBusiness, setTypeBusiness] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging

    try {
      await addDoc(collection(db, "contactus"), {
        name,
        email,
        message,
        companyName,
        interest,
        state,
        typeBusiness,
        phoneNumber,
        budget,
        timestamp: new Date(),
      });
      alert("Your message has been submitted 👍");
      setName("");
      setEmail("");
      setCompanyName("");
      setInterest("");
      setState("");
      setTypeBusiness("");
      setPhoneNumber("");
      setMessage("");
      setBudget("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );

  return (
    <main>
      {" "}
      <title>
        Contact Us Page | Texas Marketing | CBD & Cultivation Marketing
        | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing: Empowering women-owned businesses with creative web design, SEO, and social media strategies. Join our community and watch your business thrive."
      />
      <meta
        name="keywords"
        content="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin, Website design for small business, Custom website design, E-commerce website design, Responsive web design, Website development Austin, Website redesign, Website maintenance, Website builders for small business, Web design for women owned business, Wordpress website design, Squarespace website design, Shopify website design, Affordable web design, Professional web design, SEO Austin, Small business SEO, Local SEO services, SEO optimization, SEO strategy, SEO consulting, SEO for women owned business, Increase website traffic, Improve search rankings, Keyword research, On-page SEO, Off-page SEO, Technical SEO, SEO audits, SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs,

"
      />
      <section className="text-black body-font relative py-24">
        <div className="container px-2 mx-auto">
          <div className="flex flex-col text-center w-full mb-6">
            <div className="relative z-10" id="contact">
              <AnimatedTitle
                title="Con<b>tact</b>&ensp;us"
                containerClass="mt-5 !text-black text-center"
              />
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 font-robert-regular">
              <span className="font-bold">
                Ready to Elevate Your Brand? <br />
              </span>{" "}
              Need creative web design, content, or marketing expertise? Upleaf
              Media has helped 200+ women-owned businesses launch and thrive.
            </p>
          </div>

          <ul className="space-y-1 text-center font-robert-regular mb-10">
            <li>
              <span className="font-bold block">
                We specialize in comprehensive marketing solutions, including:
              </span>
              <span>
                Branding strategies to differentiate in a crowded market.
              </span>
            </li>
            <li>
              <span>
                Optimized marketing infrastructure to improve scalability.
              </span>
            </li>
            <li>
              <span>
                Data-driven growth frameworks that deliver results.....
              </span>
            </li>
          </ul>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="p-2 w-1/2">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-black font-robert-regular"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* <div className="p-2 w-1/2">
                <label
                  htmlFor="CompanyName"
                  className="leading-7 text-sm text-black font-robert-regular">
                  Company Name
                </label>
                <input
                  type="companyName"
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="your business name"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div> */}

              <div className="p-2 w-1/2">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-black font-robert-regular"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your business email address"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* <div className="p-2 w-1/2">
                <label
                  htmlFor="interest"
                  className="leading-7 text-sm text-black font-robert-regular">
                  What Are You Interested In?
                </label>
                <input
                  type="interest"
                  id="interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="web design, graphic design, social media"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div> */}

              {/* <div className="p-2 w-1/2">
                <label
                  htmlFor="state"
                  className="leading-7 text-sm text-black font-robert-regular">
                  State of Business
                </label>
                <input
                  type="state"
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="your business state"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div> */}

              {/* <div className="p-2 w-1/2">
                <label
                  htmlFor="typeBusiness"
                  className="leading-7 text-sm text-black font-robert-regular">
                  What Type Of Business Do You Run?
                </label>
                <input
                  type="typeBusiness"
                  id="typeBusiness"
                  name="typeBusiness"
                  value={typeBusiness}
                  onChange={(e) => setTypeBusiness(e.target.value)}
                  placeholder="dispensary, producer, manufacture, clothing, b2b"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div> */}

              <div className="p-2 w-1/2">
                <label
                  htmlFor="phoneNumber"
                  className="leading-7 text-sm text-black font-robert-regular"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1-555-555-555"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              {/* 
              <div className="p-2 w-1/2">
                <label
                  htmlFor="budget"
                  className="leading-7 text-sm text-black font-robert-regular">
                 Monthly Marketin Budget
                </label>
                <input
                  type="budget"
                  id="budget"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="monthly amount spend on marketing"
                  className="w-full bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div> */}

              <div className="p-2 w-full">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-black font-robert-regular"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="your message..."
                  className="w-full bg-white rounded-3xl focus:border-indigo-500 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>

              <div className="p-2 w-full">
                {/* Button updated with type="submit" */}
                <button
                  type="submit"
                  className="mt-2 cursor-pointer bg-yellow-100 text-black rounded-full py-2 px-6 font-general text-xs uppercase"
                >
                  Contact Us
                </button>
              </div>
            </form>



            {/* <div className="flex text-[15px] mb-10 mt-10">
              <p>810 Barton Springs Drive Austin TX, 78704</p>
              <p className="ml-10">(830) 822-1337</p>
              <p className="ml-10">info@hueandbloom.com</p>
            </div> */}

            

            <div className="mt-10">
            <h1 className="pb-6 text-xl font-semibold text-black">Your success is our priority—how can we help today?</h1>
<div className="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6">

  <img
    src={DylayPhoto}
    alt="Founder 1"
    className="w-20 h-20 rounded-full object-cover border border-gray-200"
  />
  <div>
    <h3 className="text-md font-semibold text-black mt-3">Dylan Harkins</h3>
    <h5 className="text-[13px]">Lead Digital Marketer</h5>
    <div className="flex space-x-4">
    <a
        href="mailto:info@hueandbloom.com"
        className="text-[#A0B857] hover:underline text-[14px]"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/dylan-h-03690217a/"
        className="text-[#A0B857] hover:underline text-[14px]"
      >
        Live Chat
      </a>
      <a
        href="tel:+1(830)822-1337"
        className="text-[#A0B857] hover:underline text-[14px]"
      >
        Cell
      </a>
      
    </div>
  </div>
  </div>
</div>
          </div>
        </div>
      </section>
      <section className="py-1">
        <div className="my-20 min-h-96 w-screen  px-10">
          <div className="relative rounded-3xl bg-black py-24 text-blue-50 sm:overflow-hidden">
          <div className="hidden sm:block absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
  <ImageClipBox
    src="/img/swordman-partial.webp"
    clipClass="absolute md:scale-125"
    alt="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin"
  />
  <ImageClipBox
    src="/img/swordman.webp"
    clipClass="sword-man-clip-path md:scale-125"
    alt="Texas SEO Marketing, SEO Marketing Services Texas, Best SEO Marketing Agency Austin, Top Rated SEO Marketing Agency Austin"
  />
</div>
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
              <ImageClipBox
                src="/img/swordman-partial.webp"
                clipClass="absolute md:scale-125"
                alt="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin"
              />
              <ImageClipBox
                src="/img/swordman.webp"
                clipClass="sword-man-clip-path md:scale-125"
                alt="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin,"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              <AnimatedTitle
                title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> He<b>m</b>p t<b>o</b>gether."
                className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
              />
              <a href="https://cal.com/hueandbloom" target="_blank">
                <Button
                  title="Book A FREE Strategy Call"
                  containerClass="mt-10 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
