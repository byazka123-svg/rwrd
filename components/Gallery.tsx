
import React from 'react';
import SectionTitle from './SectionTitle';

const atmosphereImage = 'https://ik.imagekit.io/hrctvvb3m/Screenshot%202026-02-05%20at%2011.08.53.png';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Atmosphere" subtitle="Gallery" />
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <img 
            src={atmosphereImage} 
            alt="A collage of photos showing the atmosphere at Re'ward cafe" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
