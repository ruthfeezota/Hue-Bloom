import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "./Button";

const navItems = [
  { label: "About Us", link: "/about" },
  { label: "Our Work", link: "/ourwork" },
  { label: "3d Web Design", link: "/website" },
  { label: "Social Media Management", link: "/socialmedia" },
  { label: "Contact Us", link: "/contactus" },
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 bg-black rounded-md">
          {/* Logo and Services button */}
          <div className="flex items-center gap-7">
            <a href="/">
              <img
                src="/img/logonew4.png"
                alt="Website development Austin, Website redesign, Website maintenance, Website builders for small business, Web design for women owned business, Wordpress website design, Squarespace website design, Shopify website design, Affordable web design, Professional web design, SEO Austin, Small business SEO, Local SEO services, SEO optimization, SEO strategy, SEO consulting, SEO for women owned business"
                className="w-28"
              />
            </a>
            {/* <a href="/servicespage">
              <Button
                id="product-button"
                title="Services"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-yellow-100 md:flex hidden items-center justify-center gap-1"
                link="/servicespage"
              />
            </a> */}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links (Desktop View Only) */}
          <div className="hidden md:flex h-full items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="nav-hover-btn text-white px-4 py-2"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="fixed inset-0 bg-black min-h-[250px] bg-opacity-90 flex flex-col z-50 p-4 md:hidden">
    {/* Logo on the left */}
    <div className="flex items-center justify-between w-full">
      <a href="/">
        <img
          src="/img/logo.png"
          alt=" SEO experts, Social media management Austin, Social media marketing for small business, Social media strategy, Content creation, Social media content, Graphic design for social media, Social media advertising, Instagram marketing, Facebook marketing, Social media for women owned business, Content marketing strategy, Blog content creation, Video content creation, Social media growth, Social media engagement, Marketing for women entrepreneurs, Women owned business marketing agency, Support women owned businesses, Business coaching for women, Resources for women entrepreneurs, Women in business, Women's business network, Female entrepreneurs, Women owned small businesses, Business grants for women, Austin marketing agency for women, Marketing companies near me, Small business services Austin"
          className="w-12"
        />
      </a>
      {/* Close Button */}
      <button
        className="text-white text-2xl"
        onClick={toggleMenu}
      >
        <FaTimes />
      </button>
    </div>

            {/* Menu Links */}
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="nav-hover-btn text-white px-4 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)} // Close menu after click
              >
                {item.label}
              </a>
            ))}

            {/* Audio Toggle Button */}
            <button
              onClick={toggleAudioIndicator}
              className="mt-4 flex items-center space-x-0.5 text-white"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
