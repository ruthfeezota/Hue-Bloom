import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="max-h-[650px] w-screen bg-black text-white">
      <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-6 px-5 py-4">
        <div className="relative w-full md:w-auto mt-10">
          <AnimatedTitle
            title="Elevate.<br/>Engage.<br/>Grow."
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container ">
            <div className="story-img-mask">
              <div className="">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/candleset.png"
                  alt="Luxury salon spa branding"
                  className="object-cover"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex-1 justify-center md:justify-end sm:min-w-[450px] mt-28">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-white md:text-start">
              <span className=" font-zentry text-[24px] md:text-[27px] text-black sm:text-[#aa55dd]  ">
                Transform Your Salon or Spa Online
              </span>{" "}
              <br />
              At Hue & Bloom, we specialize in high-converting web design and SEO
              strategies tailored for salons and spas. Based in Austin, Texas, we
              help beauty and wellness brands enhance their digital presence, attract
              more clients, and rank higher on search engines. From sleek website
              designs to local SEO that boosts bookings, we create custom solutions
              that drive real growth.
            </p>
            <a href="https://candropsproject1.web.app/" target="_blank">
              <Button
                id="realm-btn"
                title="See How We Elevate Brands"
                containerClass="mt-5 bg-[#A8C082]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
