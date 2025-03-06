import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useRef, useState } from "react";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging

    try {
      await addDoc(collection(db, "ContactUsHero"), {
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

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-[#F4F3E1]">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#F4F3E1]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#F4F3E1] px-5 sm:px-10">
          <b>That</b> <b>Converts</b>
        </h1> */}

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-28 px-5 sm:px-10">
            <h1 className="hero-heading text-[#A8C082]">
              <b>
                {" "}
                Hue & Bloom <br></br>Marketing{" "}
              </b>
            </h1>

            <p className="mb-5 mt-10 sm:mt-2 max-w-[400px] sm:max-w-[600px] rounded-md p-2 font-robert-regular text-[#F4F3E1]  bg-black/80 backdrop-blur-md opacity-80 sm:text-[17px] text-[15px]">
              <b>Cultivating Your Digital Legacy</b>: We're dedicated to
              empowering women-owned businesses through strategic
              marketing, and web design.
            </p>
            {/* <a href="https://cal.com/hueandbloom" target="_blank">
            <Button
              id="watch-trailer"
              title="Book Your FREE Strategy Call Today"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-100 flex-center gap-1"
              
            />
            </a> */}
          </div>

          {/* <div className="hidden lg:block absolute mt-2 top-1/2 right-16 transform -translate-y-1/2 bg-white/40 backdrop-blur-md p-5 rounded-lg shadow-lg w-[90%] max-w-sm">
            <h2 className="text-2xl mb-3 text-center font-zentry leading-6">
              Contact Us
            </h2>
            <p className="m-2">Take your business to the next level! </p>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                className="w-full p-2 mb-2 border rounded-full text-sm"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                className="w-full p-2 mb-2 border rounded-full text-sm"
              />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                className="w-full p-2 mb-2 border rounded-xl text-sm h-20"
              ></textarea>
              <a href="/servicespage">
                <Button
                  id="watch-trailer"
                  type="submit"
                  title="Get a Free Consultation"
                  leftIcon={<TiLocationArrow />}
                  containerClass="bg-yellow-100 flex-center gap-1 mt-2 sm:ml-10"
                />
              </a>
            </form>
          </div> */}
        </div>
      </div>

      {/* <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black px-5 sm:px-10">
      <b>That</b><b>converts</b>
      </h1> */}
    </div>
  );
};

export default Hero;
