import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <title>About Hue & Bloom: Texas Marketing Agency</title>
      <meta
        name="description"
        content="Hue & Bloom Marketing: Expert web design, SEO, and social media for women entrepreneurs. Elevate your brand today!"
      />
      <meta
        name="keywords"
        content=" Local SEO Austin, Austin web design services, Austin social media marketing, Marketing for Austin businesses, Women business owners Austin, Austin small business support, Austin marketing consultants, Brand development, Brand strategy, Email marketing, Online advertising, Lead generation, Conversion optimization, Marketing analytics, Digital branding, Content strategy, Marketing packages for small business, Affordable web design for women-owned businesses Austin"
      />

      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="Women's History<br />Month"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext text-[#586828]">
          <p className="font-bold text-[30px]">
            Your brand is a masterpiece. We treat it like one.
          </p>
          <p className="text-black">
            Crafting exceptional products demands both artistry and
            scientific precision. At Hue & Bloom, we share your passion for the industry and are dedicated to showcasing your creations as
            the unique and captivating brands they truly are.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/Coffee.jpeg"
            alt="Social media marketing for female entrepreneurs nationwide, How to market a women-owned business online, Best marketing agency for women-led startups, Web design and SEO for local Austin businesses, Content creation services for women entrepreneurs, Increase website traffic for women-owned e-commerce, Graphic design for social media women businesses, Marketing strategy consultation for women business owners"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
