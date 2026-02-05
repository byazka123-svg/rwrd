
import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Philosophy" subtitle="Welcome to Re'ward" />
        <div className="flex flex-col items-center gap-12">
          <div>
            <img 
              src="https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_9nun1l9nun1l9nun.png" 
              alt="Cozy cafe interior with natural light" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="text-lg text-brand-brown leading-relaxed">
            <p className="mb-4">
              Di <span className="font-bold text-brand-green">Re'ward by Dr. Zaidul Akbar</span>, kami membangun brand di atas fondasi Thibbun Nabawi (Kesehatan Islam) yang ilmiah, memadukan kearifan lokal dengan ilmu kedokteran modern.
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
