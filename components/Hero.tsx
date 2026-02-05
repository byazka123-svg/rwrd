
import React from 'react';

const Hero: React.FC = () => {
  const handleShopNowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.hash = '#store'; // Programmatically change the hash to trigger the router
  };

  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_bnx97nbnx97nbnx9.png')" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green/95 to-brand-green/50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-6">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold font-serif tracking-tight text-brand-offwhite" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
            Hadiahi Dirimu dengan Sehat & Nikmat
          </h1>
          <p className="mt-4 text-base text-brand-offwhite max-w-prose leading-relaxed mx-auto">
            Re'ward adalah tempat di mana self-reward bertemu dengan self-love, menyajikan pilihan tulus yang menyehatkan jiwa dan raga.
          </p>
          <div className="mt-8 flex flex-col items-center justify-start gap-4">
            <a href="#about" className="w-full text-center bg-brand-orange text-brand-offwhite font-bold py-3 px-8 rounded-full text-base hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg">
              Explore Now
            </a>
            <a 
              href="#store" 
              onClick={handleShopNowClick}
              className="w-full text-center bg-transparent border-2 border-brand-offwhite text-brand-offwhite font-bold py-3 px-8 rounded-full text-base hover:bg-brand-offwhite hover:text-brand-green transition-colors shadow-lg">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
