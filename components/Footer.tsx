
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-offwhite">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col justify-between items-center text-center">
            <div className="mb-8">
                <a href="#home">
                    <img src="https://ik.imagekit.io/hrctvvb3m/47ae459e-ff44-4e24-843a-6139307c21d6.png" alt="Re'ward Logo" className="h-20 mx-auto" />
                </a>
                <p className="max-w-xs mt-4 opacity-80">"Hadiahi Dirimu dengan Sehat & Nikmat."</p>
            </div>
            
            <div className="flex flex-col gap-8">
                <div>
                    <h4 className="font-bold text-lg mb-4 text-brand-orange">Explore</h4>
                    <ul>
                        <li className="mb-2"><a href="#about" className="hover:text-brand-orange transition-colors">About</a></li>
                        <li className="mb-2"><a href="#menu" className="hover:text-brand-orange transition-colors">F&B Menu</a></li>
                        <li className="mb-2"><a href="#products" className="hover:text-brand-orange transition-colors">Take Me Home</a></li>
                        <li className="mb-2"><a href="#services" className="hover:text-brand-orange transition-colors">Events & Spaces</a></li>
                        <li className="mb-2"><a href="#gallery" className="hover:text-brand-orange transition-colors">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold text-lg mb-4 text-brand-orange">Follow Us</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-brand-orange transition-colors">Instagram</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-brand-orange transition-colors">Facebook</a></li>
                        <li><a href="#" className="hover:text-brand-orange transition-colors">TikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t border-brand-offwhite border-opacity-20 mt-12 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Re'ward by Dr. Zaidul Akbar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
