import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaMailchimp, FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import Google from "../assets/Google-Review-Logo-2.png"
import Design from "../assets/Verfifed_Agency.avif";
import Clutch from "../assets/Clutch.png"

const socialLinks = [
  { href: "https://linkedin.com/company/hueandbloom", icon: <FaLinkedin /> },
  { href: "https://https://www.instagram.com/hueandbloom/", icon: <FaInstagram/> },
  { href: "https://https://www.facebook.com/profile.php?id=61567215560399", icon: <FaFacebook /> },
  { href: "https://www.youtube.com/@hueandbloom", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white bottom-0 z-10 fixed">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Woaom LLC DBA Hue & Bloom Marketing 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
       
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          info@hueandbloom.com
        </a>
        <a
          href="https://maps.app.goo.gl/W6Y5uUfwEZDQT1Sr9"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          <img src={Google} className="w-20"/>
        </a>
        <a
          href="https://www.designrush.com/agency/digital-marketing"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          <img src={Design} className="w-20"/>
        </a>
        <a
          href="https://clutch.co"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          <img src={Clutch} className="w-20"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
