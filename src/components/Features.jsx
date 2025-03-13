import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./AnimatedTitle";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, link }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full" id="ourwork">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[#F4F3E1]">
        <div>
          <h1 className="bento-title special-font tracking-wide">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-[#aa55dd66] px-5 py-2 text-xs uppercase text-black"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #F5ACC8, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">View Work</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-12 flex items-center justify-center">
        <AnimatedTitle
          title="Portfolio&nbsp;"
          containerClass="mt-5 !text-[#F4F3E1]"
        />
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] bg-opacity-90 text-white">
        <BentoCard
          src="img/UpleafMain1.webp"
          title="Upleaf Media"
          description="Redesign branding for Upleaf Media which is a cannabis marketing agency. We created a website, completed graphic design and social media designs."
          isComingSoon
          link="https://www.upleafmedia.com/" // Replace with actual URL
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 text-white">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/Glossed2.png"
            title="Glossed Salon"
            description="Launched a creative social media campaign for a hair salon with bold graphics and informative videos."
            isComingSoon
            link="/https://glossedsalonstl.com/"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="img/Feauter2.jpg"
            title="Native Poppy"
            description=" Redesigned a coffee shop website with sleek visuals, easy navigation, and an engaging blog."
            isComingSoon
            link="/https://www.nativepoppy.com"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/mrnaturalz1.png"
            title="Mr. Naturalz"
            description="Developed vibrant social media designs for a lifestyle hair brand, featuring eye-catching visuals and unique typography."
            isComingSoon
            link="https://www.mrnaturalz.com/"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-[#F5ACC8] p-5">
            <h1 className="bento-title special-font max-w-64 text-black tracking-wide">
              More coming soon.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
