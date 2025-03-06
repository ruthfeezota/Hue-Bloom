import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

function Services() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Web Design",
      desc: "We craft immersive, interactive websites that captivate your audience, driving engagement and boosting brand loyalty. Elevate your digital presence with designs that stand out.",
      button: "Learn More",
      link: "/website"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),

      title: "SEO Optization",
      desc: "From targeted campaigns to optimized product listings, we’ll help you grow your business sales and convert casual visitors into loyal customers.",
      button: "Learn More",
      link: "/ecommerce"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Content and Social Media Design",
      desc: "Get visually stunning, attention-grabbing content that increases brand awareness and fosters meaningful engagement across social platforms.",
      button: "Learn More",
      link: "/socialmedia"
    },
  ];
  return (
    <section
      className="py-14 bg-neutral-100 questrial-regular"
      id="services"
      data-aos="fade-up"
    >
      <div
        className="max-w-screen-xl mx-auto px-4  md:px-8"
        data-aos="zoom-in-down"
      >
        <div className="relative max-w-2xl mx-auto sm:text-center mt-4">
          <div className="relative z-10">
            <AnimatedTitle
              title="<b>Services</b>"
              containerClass="mt-5 !text-black text-center"
            />
          </div>
     
          <div
            className="absolute inset-0 max-w-md mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(228 , 173 , 199, 0.9) 4.54%, rgba(228 , 173 , 199, 0.5)  34.2%, rgbargba(228 , 173 , 199, 0.1)  77.55%)",
            }}
          ></div>
        </div>
        <div className="relative mt-12" data-aos="fade-up">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {features.map((item, idx) => (
              <li
                key={idx}
                className=" space-y-3 p-4 border-[#A8C082] duration-150 "
              >
                <div className="text-[#A8C082] pb-3">{item.icon}</div>
                <h4 className="text-[30px] text-black font-zentry">
                  {item.title}
                </h4>
                <p className="text-black text-[18px] font-robert-regular">{item.desc}</p>
               
              </li>

              
            ))}
            <div className="flex items-center justify-center"></div>

            <a href="/servicespage" >
                <Button
              id="watch-trailer"
              title= "Explore Our Services Today"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-green-200 flex-center gap-1 mt-2 sm:ml-10"
            />
            </a>

          </ul>
        </div>
      </div>
      {/* animate-pulse */}
    </section>
  );
}

export default Services;
