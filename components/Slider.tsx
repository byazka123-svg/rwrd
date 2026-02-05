
import React, { useState, useEffect, useCallback } from 'react';

interface Slide {
  url: string;
  title: string;
  subtitle: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [goToNext, currentIndex]); // Reset timer on manual navigation


  return (
    <div className="h-[60vh] w-full m-auto relative group">
      {/* Slide Content */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-green opacity-60"></div>
        {/* Text */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center container mx-auto px-6 text-brand-offwhite">
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
                {slides[currentIndex].title}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl leading-relaxed">
                {slides[currentIndex].subtitle}
            </p>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
        <svg onClick={goToPrevious} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
        <svg onClick={goToNext} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center py-2 z-20">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer h-3 w-3 rounded-full mx-2 transition-all duration-300 ${currentIndex === slideIndex ? 'bg-brand-orange w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
