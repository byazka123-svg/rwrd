
import React from 'react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="Contact & Location" />
        <div className="flex flex-col gap-12">
          <div className="w-full">
            <h3 className="text-2xl font-bold font-serif text-brand-green mb-4">Visit Us</h3>
            <p className="text-brand-brown mb-2">Jalan Sehat Selalu No. 123</p>
            <p className="text-brand-brown mb-4">Jakarta, Indonesia</p>
            
            <h3 className="text-2xl font-bold font-serif text-brand-green mb-4 mt-8">Opening Hours</h3>
            <p className="text-brand-brown">Monday - Sunday</p>
            <p className="text-brand-brown">08:00 AM - 10:00 PM</p>

             <h3 className="text-2xl font-bold font-serif text-brand-green mb-4 mt-8">Reservations & Inquiries</h3>
            <p className="text-brand-brown">
                <strong>Phone:</strong>{' '}
                <a 
                    href="https://wa.me/6281398898131" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-green hover:text-brand-orange underline transition-colors inline-flex items-center gap-2"
                >
                    081398898131
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm.789-2.012c.112.011.227.016.34.016.273 0 .547-.031.815-.092l.528-.103.357.433c1.525 1.841 3.582 2.833 5.765 2.833 5.46 0 9.908-4.448 9.908-9.908 0-2.618-1.017-5.072-2.831-6.886-1.814-1.812-4.269-2.829-6.887-2.829-5.459 0-9.906 4.447-9.906 9.907 0 2.088.632 4.098 1.745 5.77l.524.799-.342.524c-.244.375-.477.767-.697 1.181l.011.001z"/></svg>
                </a>
            </p>
            <p className="text-brand-brown"><strong>Email:</strong> hello@re-ward.com</p>
          </div>
          <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden">
             {/* Map Placeholder */}
             <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map Area</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
