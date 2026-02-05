
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const ServiceIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-brand-orange text-white rounded-full p-4 mb-6 inline-block">
        {children}
    </div>
);

const servicesData = {
  meetingRoom: {
    title: 'Meeting Room Booking',
    description: 'Book our private, fully-equipped meeting rooms for your business needs. Ideal for presentations, team discussions, and client meetings. Catering options available.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    features: ['High-speed Wi-Fi', 'Projector & Screen', 'Whiteboard & Markers', 'Complimentary Infused Water']
  },
  workshop: {
    title: 'Workshop & Class Spaces',
    description: 'Our versatile spaces are perfect for hosting creative workshops, wellness classes, or educational seminars. We provide a serene and inspiring atmosphere for learning and growth.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    features: ['Flexible Seating Arrangements', 'Audio System', 'Natural Lighting', 'Healthy Snack & Drink Packages']
  },
  wedding: {
    title: 'Wedding Packages',
    description: 'Celebrate your special day with us. We offer intimate wedding packages with a focus on healthy, delicious cuisine and elegant, natural decor. Let us create a memorable experience for you.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    features: ['Customized Menu Planning', 'Venue Decoration', 'Dedicated Event Coordinator', 'Capacity for up to 50 guests']
  },
  event: {
    title: 'Event Packages',
    description: 'From corporate gatherings to private celebrations, our event packages are designed to impress. Enjoy our beautiful venue, exceptional service, and wholesome catering.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    features: ['Corporate & Private Events', 'Bulk Order Catering', 'Tailored Drink & Food Stations', 'Full-service Staff']
  }
};
type SubTab = keyof typeof servicesData;

const ServiceDetailCard: React.FC<{ service: typeof servicesData[SubTab] }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-4xl mx-auto">
        <ServiceIcon>{service.icon}</ServiceIcon>
        <h3 className="text-3xl font-bold text-brand-green font-serif mb-4">{service.title}</h3>
        <p className="text-brand-brown leading-relaxed mb-6">{service.description}</p>
        <ul className="text-left space-y-2">
            {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-brand-brown">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Services: React.FC = () => {
    const [activeSubTab, setActiveSubTab] = useState<SubTab>('meetingRoom');
  
    const subTabs: { id: SubTab, label: string }[] = [
      { id: 'meetingRoom', label: 'Meeting Rooms' },
      { id: 'workshop', label: 'Workshop/Class' },
      { id: 'wedding', label: 'Wedding Packages' },
      { id: 'event', label: 'Event Packages' },
    ];
  
    const currentService = servicesData[activeSubTab];

    return (
      <section id="services" className="py-20 md:py-32 bg-brand-offwhite">
          <div className="container mx-auto px-6">
              <SectionTitle title="Events & Spaces" subtitle="High-Value Services" />
              <div className="flex flex-wrap justify-center mb-10 border-b border-brand-orange/30">
                {subTabs.map(tab => (
                   <button
                     key={tab.id}
                     onClick={() => setActiveSubTab(tab.id)}
                     className={`px-5 py-2 text-md font-medium transition-colors duration-300 whitespace-nowrap ${
                       activeSubTab === tab.id
                         ? 'text-brand-orange border-b-2 border-brand-orange'
                         : 'text-brand-brown hover:text-brand-orange'
                     }`}
                   >
                     {tab.label}
                   </button>
                ))}
              </div>
              <div className="mt-8">
                  <ServiceDetailCard service={currentService} />
              </div>
              <div className="text-center mt-12">
                <a 
                  href="https://wa.me/6281398898131" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                  Inquire Now
                </a>
              </div>
          </div>
      </section>
    );
};
export default Services;
