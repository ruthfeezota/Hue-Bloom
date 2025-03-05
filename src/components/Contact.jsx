import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { db } from "../firebase";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging

    try {
      await addDoc(collection(db, "contactus"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });

      alert("Your message has been submitted 👍");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error: ${error.message}`);
    }
  };
  return (
    <div className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-3xl bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
            alt="SEO Marketing Agency, SEO Marketing Services, CBD Marketing, web design Marketing, Industrial SEO Marketing, SEO Product Marketing, SEO Branding, SEO Advertising, SEO SEO, SEO Social Media Marketing, SEO Content Marketing, SEO Email Marketing, SEO Google Ads, SEO Marketing Strategy, SEO Market Research, SEO Compliance Marketing
"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            alt="SEO Marketing Agency for Startups, SEO Marketing Agency for E-commerce, SEO Marketing Agency for CBD Oil, SEO Marketing Agency for Delta 8, SEO Marketing Agency for Farmers, SEO Marketing Agency with Google Ads Expertise, SEO Marketing Agency specializing in e-commerce, SEO Marketing Agency specializing in Skincare
"
          />
        </div>

        <div className="hidden sm:block absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
  <ImageClipBox
    src="/img/swordman-partial.webp"
    clipClass="absolute md:scale-125"
    alt="SEO Marketing Agency Austin, Austin SEO Marketing, SEO Marketing Services Austin TX, CBD Marketing Austin, web design Marketing Austin, SEO Marketing Agency Texas, Texas SEO"
  />
  <ImageClipBox
    src="/img/swordman.webp"
    clipClass="sword-man-clip-path md:scale-125"
    alt="Texas SEO Marketing, SEO Marketing Services Texas, Best SEO Marketing Agency Austin, Top Rated SEO Marketing Agency Austin"
  />
</div>


        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s build the new era of SEO together."
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

      <section className="text-black body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <div className="relative z-10" id="contact">
              <AnimatedTitle
                title="Contact&ensp;us"
                containerClass="mt-5 !text-black text-center"
              />
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 font-robert-regular">
              Need creative web design or content design help? We have helped
              200+ women-owned businesses launch and thrive!
            </p>
          </div>
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
              <div className="p-2 w-full flex items-center justify-center mb-10">
                {/* Button updated with type="submit" */}
                <button
                  type="submit"
                  className="mt-2 cursor-pointer rounded-full bg-yellow-100 px-7 py-3 font-general text-xs uppercase text-[12px]"
                >
                  Contact Us
                </button>
              </div>
            </form>

            <div className="flex text-[15px] mb-10">
              <p>810 Barton Springs Drive Austin TX, 78704</p>
              <p className="ml-10">(830) 822-1337</p>
              <p className="ml-10">info@hueandbloom.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
