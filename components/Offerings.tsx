
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Menu from './Menu';
import Products from './Products';
import Services from './Services';

type Tab = 'menu' | 'retail' | 'b2b';

// FIX: Define props for the Offerings component to accept the onAddToCart function
// and a compatible Product type to pass down to child components.
interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
    packages?: { [key: string]: string };
}

interface OfferingsProps {
    onAddToCart: (item: Product) => void;
}

const Offerings: React.FC<OfferingsProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<Tab>('menu');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'menu', label: 'F&B Menu' },
    { id: 'retail', label: 'Take Me Home' },
    { id: 'b2b', label: 'Events & Spaces' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'menu':
        // FIX: Pass onAddToCart prop to Menu component to satisfy its required props.
        return <Menu onAddToCart={onAddToCart} />;
      case 'retail':
        // FIX: Pass onAddToCart prop to Products component to satisfy its required props.
        return <Products onAddToCart={onAddToCart} />;
      case 'b2b':
        return <Services />;
      default:
        return null;
    }
  };

  return (
    <section id="offerings" className="py-20 md:py-32 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <SectionTitle title="Our Offerings" subtitle="Explore What We Do" />
        
        <div className="flex justify-center mb-12 border-b-2 border-brand-green/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-lg font-semibold transition-all duration-300 relative -mb-[2px] ${
                activeTab === tab.id
                  ? 'text-brand-green border-b-2 border-brand-green'
                  : 'text-brand-brown hover:text-brand-green'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="transition-opacity duration-500">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
