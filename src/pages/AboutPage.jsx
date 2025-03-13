import React from "react";
import DylayPhoto from "../assets/DylanPhoto.png";
import RuthPhoto from "../assets/RuthPhoto.jpeg";
import PropImg from "../assets/Happsalonteams1.jpg";
import RunClub from "../assets/Happsalonteams2.jpg";
import texasoriginalteam from "../assets/Happsalonteams3.jpeg";
import Contact from "../components/Contact";
import AnimatedTitle from "../components/AnimatedTitle";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function AboutPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging

    try {
      await addDoc(collection(db, "subscribe"), {
        email,

        timestamp: new Date(),
      });
      alert("Your message has been submitted 👍");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <title>
        About Us Page | Women-owned Marketing | Hue & Bloom Marketing
      </title>
      <meta
        name="description"
        content="Hue & Bloom Marketing: Expert web design, SEO, and social media for women entrepreneurs. Elevate your brand today!"
      />
      <meta
        name="keywords"
        content="Marketing agency Austin, Digital marketing agency Austin, Online marketing services, Small business marketing, Marketing strategy, Marketing consulting, Content marketing, Social media marketing, Local marketing, Marketing services for small business, Women owned business marketing, Marketing for women entrepreneurs, Nationwide marketing agency, Marketing for startups, Brand marketing, Web design Austin, Website design for small business, Custom website design, E-commerce website design, Responsive web design, Website development Austin, Website redesign, Website maintenance, Website builders for small business, Web design for women owned business, Wordpress website design, Squarespace website design, Shopify website design, Affordable web design, Professional web design, SEO Austin, Small business SEO, Local SEO services, SEO optimization, SEO strategy, SEO consulting, SEO for women owned business, Increase website traffic, Improve search rankings, Keyword research, On-page SEO, Off-page SEO, Technical SEO, SEO audits, SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs, Women owned business marketing agency, Support women owned businesses, Business coaching for women, Resources for women entrepreneurs, Women in business,"
      />

      <div className="max-w-7xl mx-auto px-6 py-36">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <AnimatedTitle
            title="Passion. <b>Creativity.</b><br />Innovation.<b></b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <h4 className="p-6 font-bold">About Us</h4>

          <p className="text-md text-black leading-relaxed">
            <span className="font-bold">
              Your women-owned business deserves to shine online. At Hue & Bloom
              Marketing, we're committed to showcasing your unique story and
              driving tangible results. <br />
            </span>{" "}
            Founded in Austin, Texas, Hue & Bloom Marketing began with a
            powerful mission:{" "}
            <span className="font-bold">
              to empower women-owned businesses with cutting-edge digital
              marketing solutions.
            </span>{" "}
            We understand the unique challenges and opportunities within the
            dynamic landscape of female entrepreneurship. With a team of
            passionate experts, we bring a blend of creativity, strategy, and
            technical expertise to every project. From crafting compelling brand
            positioning strategies to optimizing your online presence, we
            provide solutions that scale as your business grows. Whether it's
            developing cohesive brand narratives, designing user-friendly
            websites, or creating strategic content workflows, we're here to
            help you thrive.
          </p>
        </section>

        {/* Founders Section */}
        <section>
          <h2 className="text-3xl font-semibold text-black text-center mb-8">
            Our Crew
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="text-center">
              <img
                src={DylayPhoto}
                alt="Founder 1"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-xl font-bold text-black">Dylanna Harkins</h3>
              <p className="text-black mt-2">
                Dylanna Harkins is a seasoned professional with a diverse
                background in project management and business development. Her
                passion for empowering women entrepreneurs ignited her
                entrepreneurial spirit, leading her to establish Hue & Bloom
                Marketing. Driven by a deep understanding of the challenges
                women face in business, and the needs of their customers,
                Dylanna is dedicated to providing exceptional service and
                fostering growth within this vibrant community.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/dylan-h-03690217a/"
                  className="text-purple-600  hover:underline mx-2"
                >
                  LinkedIn
                </a>
                <a
                  href="info@hueandbloom.com"
                  className="text-purple-600  hover:underline mx-2"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <img
                src={RuthPhoto}
                alt="Founder 2"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-xl font-bold text-black">Ruth Zota</h3>
              <p className="text-black mt-2">
                Ruth Zota is a highly creative programmer with a distinguished
                career in web development and design. Co-founding Hue & Bloom
                Marketing presented an exciting opportunity to channel her
                passion for supporting women-owned businesses and express her
                innovative spirit within a dynamic entrepreneurial venture. She
                loves to create beautiful and functional websites that help
                women succeed.
              </p>
              <div className="mt-4">
                <a
                  href="https://linkedin.com/in/founder2"
                  className="text-purple-600 hover:underline mx-2"
                >
                  LinkedIn
                </a>
                <a
                  href="info@hueandbloom.com"
                  className="text-purple-600  hover:underline mx-2"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-[30px] items-center text-4xl font-bold md:text-6xl font-null p-1 text-center mt-24 text-[#a5d6]">
              Our Happy Clients
            </h1>
          </div>
          <div className="flex flex-col gap-4 md:flex-row justify-center items-center ">
            <div className="mb-4">
              <a href="https://www.instagram.com/mgc_social/">
                <img
                  src={texasoriginalteam}
                  className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
                  alt=""
                />
              </a>
            </div>

            <div className="mb-4">
              <a href="https://www.instagram.com/mgc_social/">
                <img
                  src={PropImg}
                  className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
                  alt=""
                />
              </a>
            </div>

            <div className="mb-4">
              <a href="https://www.instagram.com/mgc_social/">
                <img
                  src={RunClub}
                  className="h-[300px] w-[300px] max-w-full rounded-full md:h-[300px] m-10  "
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto items-center justify-center mt-16">
            <div className="items-center p-2">
              <h1 className="text-[18px]">
                Be the first to know—subscribe to our newsletter now!
              </h1>
            </div>
            <form
              className="flex items-center space-x-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-black font-robert-regular"
                ></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email address"
                  className="w-[300px] bg-white rounded-full focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer bg-yellow-100 text-black rounded-full py-2 px-6 font-general text-xs uppercase"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default AboutPage;
