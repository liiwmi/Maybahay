import React, { useEffect, useState } from 'react';
import images from '../assets/Carousel/carousel.js';
import "../styles/Index.css";

function Carousel() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) return <div>Loading...</div>;


  //!do not remove, will be used for functionality in the future
  const handlePreviousClick = () => {
      setCurrentImageIndex(
          currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
      );
  };

  const handleNextClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        handleNextClick();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

return(
<div className="h-[56vh] md:mt-14">
    <section className="w-full py-12 flex flex-col items-start justify-center ">
        
        <div className="w-5/6 mx-auto lg:max-w-6/8">
          <div className="flex flex-col items-start justify-center mb-4 leading-tight lg:mb-10 ">
            <h2 className="text-dark text-2xl font-semibold md:text-4xl">Project Happy Tails</h2>
            <p className='text-dark/90 text-sm md:text-xl'>Check out our latest projects and join us in our journey!</p>
        </div>
        </div>
        
        
<div className="w-full h-full mx-auto ">
    <div className="relative max-w-5/6 lg:max-w-6/8 mx-auto rounded-2xl overflow-hidden shadow-lg ring-1 ring-dark/5 
    h-[30dvh] md:h-[34dvh]">
    {images.map((image, index) => (
     <div 
      key={image.id || index}
      className={`absolute inset-0 transition-opacity duration-7  00 ease-in-out ${
        currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <img
        src={image.url}
        alt="Carousel slide"
        className="w-full h-full object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-15 pointer-events-none" />

      {/* Image Caption */}
      <div className="absolute bottom-2 left-4 right-6 flex justify-between items-end z-20">
        <p className="text-lg text-m tracking-tight text-white/85 drop-shadow-md">
          {image.caption || "Project Highlight"}
        </p>

        {/* Indicators -> the orange thingy*/}
        <div className="flex gap-2 pb-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === i ? 'bg-primary w-3' : 'bg-secondary w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
</div>

</section>
</div>
 
);
}

export default Carousel;
