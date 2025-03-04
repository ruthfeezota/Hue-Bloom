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

export const BentoCard = ({ src, title, description, isComingSoon }) => {
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
    <div className="relative size-full" id="ourwork" >
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center"/>
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[#F4F3E1]">
        <div>
          <h1 className="bento-title special-font tracking-wide">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
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
        {/* <p className="min-w-md font-circular-web text-lg !text-[#F4F3E1]">
        [COMING VERY SOON] Dive into our portfolio and discover a range of creative projects. From sleek and user-friendly websites to engaging and eye-catching graphics, we showcase our ability to deliver high-quality, results-driven creative solutions across various platforms.
        </p> */}
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="img/Feauter2.jpg"
          title={
            <>
              Native Poppy
            </>
          }
          description="Redesigned a dispensary website with sleek visuals, easy navigation, and an engaging blog."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/Feauter13.png"
            title={
              <>
                BLAC Detroit
              </>
            }
            description="Launched a creative social media campaign for a candle brand with bold graphics and informative videos."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="img/Feauter8.jpg"
            title={
              <>
                nusexus
              </>
            }
            description="Built an interactive educational platform with strain profiles, personalized recommendations, and community forums."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/Feauter6.png"
            title={
              <>
                Black Future Fund
              </>
            }
            description="Developed vibrant social media designs for a lifestyle brand, featuring eye-catching visuals and unique typography."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-[#F5ACC8] p-5">
            <h1 className="bento-title special-font max-w-64 text-black tracking-wide">
              More coming soon.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt> */}
      </div>
    </div>
  </section>
);

export default Features;
