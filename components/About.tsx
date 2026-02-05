
import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-cover bg-center" 
      style={{ backgroundImage: "url('https://ik.imagekit.io/hrctvvb3m/Untitled%20design%20(12).png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-brand-green bg-opacity-75"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Custom SectionTitle for inverted colors */}
        <div className="text-center mb-12">
          <h3 className="text-base text-brand-orange font-bold tracking-wider uppercase">Welcome to Re'ward</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-offwhite mt-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>Our Philosophy</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-base text-brand-offwhite leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            <p className="mb-4">
              Di <span className="font-bold">Re'ward by Dr. Zaidul Akbar</span>, kami membangun brand di atas fondasi Thibbun Nabawi (Kesehatan Islam) yang ilmiah, memadukan kearifan lokal dengan ilmu kedokteran modern.
            </p>
            <p className="mb-4">
               Kami percaya <span className="font-semibold text-brand-orange">self-reward</span> sejati bukanlah kemewahan sesaat, melainkan bentuk kasih sayang pada tubuh (self-love). Kami hadir untuk menjadi jeda dan apresiasi di tengah rutinitas Anda yang padat.
            </p>
            <p>
              Setiap resep diformulasikan langsung oleh Dr. Zaidul Akbar, menggunakan 100% bahan alami, rempah, dan rimpang Nusantara terbaik untuk menciptakan rasa bahagia, tenang, dan sehat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
