import { useState } from 'react'
import AnimatedTitle from "./AnimatedTitle";

function Gallery() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  
  const panels = [
    {  image: "/src/assets/12.png" },                    
    {  image: "/src/assets/15.png" },                    
    {  image: "/src/assets/12.png" },          
    {  image: "/src/assets/15.png" },          
    {  image: "/src/assets/12.png" },          
    {  image: "/src/assets/15.png" },          
    {  image: "/src/assets/12.png" },          
    {  image: "/src/assets/15.png" }           
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <main className="w-screen h-screen bg-[#F4F3E1] overflow-hidden mb-20">
 <div className="relative max-w-2xl mx-auto sm:text-center mt-32">
          <div className="relative z-10">
            <AnimatedTitle
              title="Web<b>site</b>s"
              containerClass="mt-1 !text-black text-center"
            />
            <p className='p-2 mb-10'>Websites we have have worked on over the past year.</p>
          </div>
</div>
      <div className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative z-1" 
        style={{
          backgroundImage: `url(${panels[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
      <div className="flex w-full max-w-7xl h-[80vh] gap-2 items-center justify-center z-10">
        {panels.map((panel, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
              h-full rounded-2xl bg-white cursor-pointer
              transition-all duration-500 ease-in-out overflow-hidden
              ${expandedIndex === index ? 'w-[60%]' : 'w-[10%] hover:bg-gray-200'}
              min-w-[40px] block
            `}
          >
            <img src={panel.image} alt="" className='w-full h-full object-cover object-top'/>
          </div>
        ))}
      </div>
      </div>
    </main>

 
  )
}

export default Gallery