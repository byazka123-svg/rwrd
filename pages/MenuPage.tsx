
import React, { useState, useEffect, useRef } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import SectionTitle from '../components/SectionTitle';
import Slider from '../components/Slider';

const menuSlides = [
    {
        url: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_b6b55eb6b55eb6b5.png?updatedAt=1721284534963',
        title: "Nourish Your Body",
        subtitle: "Discover our range of delicious and healthy meals, crafted from the freshest natural ingredients."
    },
    {
        url: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_1ng0rs1ng0rs1ng0.png',
        title: "Sip on Wellness",
        subtitle: "Experience our signature herbal infusions and lattes, designed to soothe and rejuvenate."
    },
    {
        url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto-format&fit=crop',
        title: "Guilt-Free Indulgence",
        subtitle: "Treat yourself to our delightful desserts, made with natural sweeteners and wholesome ingredients."
    }
];

const menuData = {
    minuman: {
      signatureSeries: [
          { name: 'Matcha Rempah Latte', description: 'Earthy matcha combined with warming spices like cinnamon and cardamom.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 48.000' },
          { name: 'Kopi Rempah Nusantara', description: 'Rich arabica coffee infused with traditional Indonesian spices for a bold, aromatic experience.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' }
      ],
      healingSeries: [
          { name: 'Citrus Lift', description: 'Uplifting blend of orange, lime, and turmeric for a zesty energy boost.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 40.000' },
          { name: 'Golden Turmeric Elixir', description: 'A soothing and anti-inflammatory blend of fresh turmeric, ginger, and black pepper.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 42.000' }
      ],
      womenWellness: [
          { name: 'Rose Petal Infusion', description: 'A delicate and calming tea made with dried rose petals, known to aid menstrual comfort.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 38.000' },
          { name: 'Feminine Balance Tea', description: 'A herbal blend designed to support hormonal balance and overall feminine health.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 40.000' }
      ],
      menWellness: [
          { name: 'Stamina Booster Brew', description: 'A powerful concoction of red ginger, ginseng, and pasak bumi to enhance vitality.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' },
          { name: 'Ginger Power Shot', description: 'A concentrated shot of ginger and galangal to invigorate the body and mind.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 35.000' }
      ],
      refreshSeries: [
          { name: 'Purple Spark', description: 'A vibrant mix of butterfly pea flower, lemon, and soda for a magical fizz.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 42.000' },
          { name: 'Apple Mind', description: 'Crisp apple juice infused with mint and a hint of ginger to sharpen your focus.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' },
          { name: 'Berry Calm Fizz', description: 'A calming concoction of mixed berries and chamomile, lightly carbonated.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 45.000' },
          { name: 'Coconut Spice Cooler', description: 'Creamy coconut water with a hint of nutmeg and star anise, served chilled.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 47.000' }
      ],
      selfRewardSpecials: [
          { name: 'Chocolate Avocado Mousse Shake', description: 'A decadent and creamy shake made with avocado, raw cacao, and a touch of honey.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 55.000' },
          { name: 'Creamy Cashew & Date Smoothie', description: 'A naturally sweet smoothie that feels like a dessert but is packed with nutrients.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(11).jpg', price: 'Rp 52.000' }
      ]
    },
    makanan: [
      { name: 'Mie Goreng Habbats', description: 'Stir-fried noodles with habbatussauda, fresh vegetables, and your choice of protein.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 65.000' },
      { name: 'Mie Kuah', description: 'Hearty noodle soup with a rich herbal broth, mushrooms, and leafy greens.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 65.000' },
      { name: 'Rice Bowl Chicken Teriyaki', description: 'Grilled chicken in a healthy teriyaki glaze, served over brown rice with steamed broccoli.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 75.000' },
      { name: 'Rice Bowl Fish Curry', description: 'Tender white fish in a fragrant coconut curry sauce, served with brown rice.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 78.000' },
      { name: 'Mushroom Soup', description: 'Creamy and rich soup from a blend of wild mushrooms, finished with herbs.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(12).jpg', price: 'Rp 55.000' },
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

const formatSubCategoryLabel = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
}

interface MenuPageProps {
    onViewDetails: (item: Product) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onViewDetails }) => {
  const [activeCategory, setActiveCategory] = useState<string>('minuman');
  const [activeMinumanSubTab, setActiveMinumanSubTab] = useState<string>('signatureSeries');

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const subCategoryLinkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);


  // Effect for scrollspy
  useEffect(() => {
    if (observerRef.current) {
        observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const [type, category, subCategory] = id.split('-');
            
            if (type === 'category') {
               setActiveCategory(category);
            } else if (type === 'subcategory') {
               setActiveCategory(category);
               setActiveMinumanSubTab(subCategory);
            }
          }
        });
      },
      {
        rootMargin: `-200px 0px -50% 0px`,
        threshold: 0,
      }
    );

    const currentRefs = sectionRefs.current;
    Object.keys(currentRefs).forEach((key) => {
      const ref = currentRefs[key];
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
        observerRef.current?.disconnect();
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
    };
  }, []);

  // Effect for auto-scrolling sub-category navigation
  useEffect(() => {
    const activeLink = subCategoryLinkRefs.current[activeMinumanSubTab];
    if (activeLink) {
        activeLink.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    }
  }, [activeMinumanSubTab]);
  
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault();
    isClickScrolling.current = true;
    setActiveCategory(categoryId);

    const targetElement = document.getElementById(`category-${categoryId}`);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
        isClickScrolling.current = false;
    }, 1000);
  };

  const handleSubCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, subCategoryId: string) => {
      e.preventDefault();
      isClickScrolling.current = true;
      setActiveMinumanSubTab(subCategoryId);

      const targetElement = document.getElementById(`subcategory-minuman-${subCategoryId}`);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
  };

  const subTabs = [
    { 
      id: 'minuman', 
      label: 'Minuman', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { 
      id: 'makanan', 
      label: 'Makanan', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h16" /></svg>
    },
    { 
      id: 'dessert', 
      label: 'Dessert', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
    }
  ];

  const minumanSubTabs = Object.keys(menuData.minuman).map(key => ({
    id: key,
    label: formatSubCategoryLabel(key)
  }));

  return (
    <main>
      <Slider slides={menuSlides} />
      
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="flex justify-center border-b border-brand-orange/30 bg-white">
          {subTabs.map(tab => (
            <a
              href={`#category-${tab.id}`}
              key={tab.id}
              onMouseDown={(e) => handleCategoryClick(e, tab.id)}
              className={`px-5 py-3 text-md font-medium transition-colors duration-300 flex-shrink-0 flex items-center justify-center ${
                activeCategory === tab.id
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-brand-brown hover:text-brand-orange'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </a>
          ))}
        </div>
        
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeCategory === 'minuman' ? 'max-h-40' : 'max-h-0'}`}>
            <div className="flex overflow-x-auto gap-2 p-3 hide-scrollbar bg-white/95 backdrop-blur-sm">
                {minumanSubTabs.map(tab => (
                  <a
                    href={`#subcategory-minuman-${tab.id}`}
                    key={tab.id}
                    ref={el => subCategoryLinkRefs.current[tab.id] = el}
                    onMouseDown={(e) => handleSubCategoryClick(e, tab.id)}
                    className={`flex-shrink-0 px-5 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    activeMinumanSubTab === tab.id
                      ? 'bg-brand-green text-white shadow'
                      : 'bg-brand-offwhite text-brand-brown hover:bg-brand-orange/20 border border-brand-orange/20 shadow-sm'
                    }`}
                  >
                    {tab.label}
                  </a>
                ))}
            </div>
        </div>
      </div>
      
      <section id="full-menu-content" className="bg-white">
        <div className="container mx-auto px-6">
          <div id="category-minuman" ref={el => sectionRefs.current['category-minuman'] = el} className="pt-16">
            <SectionTitle title="Minuman" subtitle="Our Beverages" />
            {Object.entries(menuData.minuman).map(([subCategory, items]) => (
              <div key={subCategory} id={`subcategory-minuman-${subCategory}`} ref={el => sectionRefs.current[`subcategory-minuman-${subCategory}`] = el} className="mb-12">
                <h3 className="text-2xl font-bold font-serif text-brand-green mb-6 border-l-4 border-brand-orange pl-4">
                  {formatSubCategoryLabel(subCategory)}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <MenuItemCard key={`${subCategory}-${index}`} {...item} onCardClick={onViewDetails} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div id="category-makanan" ref={el => sectionRefs.current['category-makanan'] = el} className="pt-16">
            <SectionTitle title="Makanan" subtitle="Main Courses" />
            <div className="grid grid-cols-2 gap-6">
              {menuData.makanan.map((item, index) => (
                <MenuItemCard key={`makanan-${index}`} {...item} onCardClick={onViewDetails} />
              ))}
            </div>
          </div>
          
          <div id="category-dessert" ref={el => sectionRefs.current['category-dessert'] = el} className="pt-16 pb-12">
            <SectionTitle title="Dessert & Snack" subtitle="Sweet & Savory" />
            <div className="grid grid-cols-2 gap-6">
              {menuData.dessert.map((item, index) => (
                <MenuItemCard key={`dessert-${index}`} {...item} onCardClick={onViewDetails} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
