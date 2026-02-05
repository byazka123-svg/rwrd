
import React, { useState } from 'react';
import MenuItemCard from './MenuItemCard';
import SectionTitle from './SectionTitle';

const menuData = {
  minuman: [
    { name: 'Purple Spark', description: 'A vibrant mix of butterfly pea flower, lemon, and soda for a magical fizz.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 42.000' },
    { name: 'Apple Mind', description: 'Crisp apple juice infused with mint and a hint of ginger to sharpen your focus.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' },
    { name: 'Citrus Lift', description: 'Uplifting blend of orange, lime, and turmeric for a zesty energy boost.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 40.000' },
    { name: 'Matcha Rempah Latte', description: 'Earthy matcha combined with warming spices like cinnamon and cardamom.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 48.000' },
    { name: 'Berry Calm Fizz', description: 'A calming concoction of mixed berries and chamomile, lightly carbonated.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' },
    { name: 'Coconut Spice Cooler', description: 'Creamy coconut water with a hint of nutmeg and star anise, served chilled.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 47.000' }
  ],
  makanan: [
    { name: 'Mie Goreng Habbats', description: 'Stir-fried noodles with habbatussauda, fresh vegetables, and your choice of protein.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 65.000' },
    { name: 'Mie Kuah', description: 'Hearty noodle soup with a rich herbal broth, mushrooms, and leafy greens.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 65.000' },
    { name: 'Rice Bowl Chicken Teriyaki', description: 'Grilled chicken in a healthy teriyaki glaze, served over brown rice with steamed broccoli.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 75.000' },
    { name: 'Rice Bowl Fish Curry', description: 'Tender white fish in a fragrant coconut curry sauce, served with brown rice.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 78.000' },
    { name: 'Mushroom Soup', description: 'Creamy and rich soup made from a blend of wild mushrooms, finished with herbs.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 55.000' },
    { name: 'Miso Ginger Soup', description: 'A light and savory soup with miso paste, fresh ginger, tofu, and seaweed.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 50.000' }
  ],
  dessert: [
    { name: 'Mini Spinach & Feta Quiche', description: 'Savory bite-sized quiches with a whole-wheat crust.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(13).jpg', price: 'Rp 35.000' },
    { name: 'Sweet Potato Fries with Yogurt Dip', description: 'Baked, not fried. Served with a refreshing herb and yogurt dip.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(13).jpg', price: 'Rp 40.000' },
    { name: 'Avocado Omelette Toast', description: 'A fluffy omelette with creamy avocado served on toasted sourdough.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(13).jpg', price: 'Rp 60.000' },
    { name: 'Chicken Mushroom Pizza', description: 'Personal pizza on a thin cauliflower crust with a light tomato sauce.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(13).jpg', price: 'Rp 68.000' },
    { name: 'Kurma Ball', description: 'Energy balls made from dates, nuts, and coconut. Naturally sweet and satisfying.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(13).jpg', price: 'Rp 30.000' }
  ]
};

type SubTab = keyof typeof menuData;

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
}
  
interface MenuProps {
    onAddToCart: (item: Product) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('minuman');
  
  const subTabs: { id: SubTab, label: string }[] = [
    { id: 'minuman', label: 'Minuman' },
    { id: 'makanan', label: 'Makanan' },
    { id: 'dessert', label: 'Dessert/Snack' },
  ];
  
  const currentItems = menuData[activeSubTab];
  const displayedItems = currentItems.slice(0, 2);

  const handleViewMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#fnb-menu';
  };

  return (
    <section id="menu" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Daily Consumption" title="F&B Menu" />
        <p className="text-center max-w-3xl mx-auto -mt-8 mb-12 text-lg text-brand-brown">
            Nikmati hidangan dan minuman sehat yang dibuat dari bahan-bahan alami terbaik, diracik untuk menenangkan jiwa dan raga Anda.
        </p>
        <div className="flex flex-col items-center gap-12">
          {/* Image Column */}
          <div className="w-full">
            <img src="https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_1ng0rs1ng0rs1ng0.png" alt="Healthy Drinks at Re'ward Cafe" className="rounded-lg shadow-2xl w-full h-auto object-cover" style={{aspectRatio: '4/3'}}/>
          </div>
          
          {/* Content Column */}
          <div className="w-full">
            <div className="flex justify-center mb-8 border-b border-brand-orange/30 overflow-x-auto">
              {subTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`px-5 py-2 text-md font-medium transition-colors duration-300 flex-shrink-0 ${
                    activeSubTab === tab.id
                      ? 'text-brand-orange border-b-2 border-brand-orange'
                      : 'text-brand-brown hover:text-brand-orange'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {displayedItems.map((item, index) => (
                <MenuItemCard key={index} {...item} />
              ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#fnb-menu" onClick={handleViewMoreClick} className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                  Lihat Lebih Lengkap
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
