
import React, { useState, useEffect, useRef } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import RedrinkModal from '../components/RedrinkModal';
import SectionTitle from '../components/SectionTitle';

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
    packages?: { [key: string]: string };
}

// Data from ReDrinkPage
const fullJsrData = [
  { 
      name: 'Paket Detoks Lemak', 
      description: 'Bantu proses detoksifikasi tubuh dan pembakaran lemak dengan ramuan herbal pilihan.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_115l2q115l2q115l.png', 
      packages: { '3 Hari': 'Rp 125.000', '7 Hari': 'Rp 260.000', '1 Bulan': 'Rp 980.000' } 
  },
  { 
      name: 'Paket Glowing', 
      description: 'Nutrisi kulit dari dalam untuk wajah yang lebih cerah, sehat, dan bercahaya alami.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_wa80b8wa80b8wa80.png', 
      packages: { '3 Hari': 'Rp 130.000', '7 Hari': 'Rp 275.000', '1 Bulan': 'Rp 1.050.000' } 
  },
  { 
      name: 'Paket Imun Booster', 
      description: 'Tingkatkan daya tahan tubuh Anda melawan penyakit dengan kombinasi rimpang terbaik.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_wo9g66wo9g66wo9g.png', 
      packages: { '3 Hari': 'Rp 120.000', '7 Hari': 'Rp 250.000', '1 Bulan': 'Rp 950.000' } 
  },
  { 
      name: 'Paket Lambung Ceria', 
      description: 'Menenangkan dan menyehatkan lambung dengan ramuan alami yang lembut dan efektif.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_t4n67gt4n67gt4n6.png', 
      packages: { '3 Hari': 'Rp 135.000', '7 Hari': 'Rp 280.000', '1 Bulan': 'Rp 1.100.000' } 
  },
  { 
      name: 'Paket Sport Booster', 
      description: 'Tingkatkan stamina dan percepat pemulihan setelah berolahraga dengan minuman energi alami.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_ubckzzubckzzubck.png', 
      packages: { '3 Hari': 'Rp 140.000', '7 Hari': 'Rp 290.000', '1 Bulan': 'Rp 1.150.000' } 
  },
  { 
      name: 'Paket Promil Wanita', 
      description: 'Dukung program kehamilan dengan nutrisi lengkap untuk kesuburan dan kesehatan reproduksi.', 
      image: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_h3g55gh3g55gh3g5.png', 
      packages: { '3 Hari': 'Rp 150.000', '7 Hari': 'Rp 320.000', '1 Bulan': 'Rp 1.250.000' } 
  },
];


// Data from ProductsPage with sub-categories for merchandise
const takeMeHomeData = {
  merchandise: {
    drinkware: [
        { name: "Re'ward Signature Mug", description: 'An elegant ceramic mug featuring our logo. Perfect for your daily ritual.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(9).jpg', price: 'Rp 125.000' },
        { name: "Glass Tumbler with Bamboo Lid", description: 'Eco-friendly glass tumbler for your hot or cold beverages.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(10).jpg', price: 'Rp 145.000' },
    ],
    tasApparel: [
        { name: 'Organic Cotton Tote Bag', description: 'Carry your essentials in style with our eco-friendly branded tote bag.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(8).jpg', price: 'Rp 150.000' },
        { name: "Re'ward T-Shirt", description: 'Comfortable and stylish t-shirt made from premium cotton.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(7).jpg', price: 'Rp 180.000' },
    ],
    aksesoris: [
        { name: 'Enamel Pin Set', description: 'A set of cute enamel pins to decorate your bag or jacket.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(6).jpg', price: 'Rp 85.000' },
    ],
    stationery: [
        { name: 'Wellness Journal', description: 'A beautifully designed journal to track your wellness journey.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(5).jpg', price: 'Rp 95.000' },
    ],
    homeLiving: [
        { name: 'Scented Soy Candle', description: 'Relaxing scented candle made from natural soy wax.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(4).jpg', price: 'Rp 115.000' },
    ]
  },
  rewardToGo: [
    { name: 'Wedhang To Go - Rempah Sachet', description: 'Create our signature drinks at home. Premium mix of dried herbs and spices.', image: 'https://ik.imagekit.io/hrctvvb3m/3.png', price: 'Rp 85.000' },
    { name: 'Wedhang To Go - Golden Latte', description: 'Just add hot water or milk for an instant, nourishing turmeric latte.', image: 'https://ik.imagekit.io/hrctvvb3m/3.png', price: 'Rp 75.000' },
    { name: 'Wedhang To Go - Immunity Boost', description: 'A weekly supply of our special herbal blend to strengthen your immunity.', image: 'https://ik.imagekit.io/hrctvvb3m/3.png', price: 'Rp 120.000' },
  ],
  produkHerbal: [
    { name: 'Madu Gold JSR', description: 'Madu murni pilihan dengan formula JSR untuk vitalitas optimal.', image: 'https://ik.imagekit.io/hrctvvb3m/id-11134207-7ra0h-mdl6qp63pn04ef.webp', price: 'Rp 150.000' },
    { name: 'Madu Hexabrain', description: 'Tingkatkan konsentrasi dan daya ingat dengan madu herbal khusus.', image: 'https://ik.imagekit.io/hrctvvb3m/id-11134207-7rask-m5kumcqjzdkyb0.webp', price: 'Rp 165.000' },
    { name: 'Madu Multiflora', description: 'Kebaikan nektar beragam bunga dalam sebotol madu murni, kaya nutrisi.', image: 'https://ik.imagekit.io/hrctvvb3m/id-11134207-7ras8-m5kumcq02zyae3.webp', price: 'Rp 120.000' },
    { name: 'VCO Kapsul', description: 'Minyak kelapa murni dalam kapsul praktis untuk metabolisme & kesehatan kulit.', image: 'https://ik.imagekit.io/hrctvvb3m/id-11134207-7r98t-loc2mwvdn4sca3.webp', price: 'Rp 95.000' },
    { name: 'Habbat KAPSUL', description: 'Ekstrak Habbatussauda (Jintan Hitam) untuk imunitas dan stamina harian.', image: 'https://ik.imagekit.io/hrctvvb3m/id-11134207-81ztd-mez4t9myatxpc8.webp', price: 'Rp 85.000' },
    { name: 'Fixme', description: 'Suplemen herbal untuk membantu meredakan nyeri sendi dan menjaga kesehatan tulang.', image: 'https://ik.imagekit.io/hrctvvb3m/sg-11134201-7rdvl-m0ch3bufnr6t53.webp', price: 'Rp 110.000' },
  ]
};

const storeSlides = [
    {
        url: 'https://ik.imagekit.io/hrctvvb3m/Screenshot%202026-02-05%20at%2008.10.48.png',
        title: "Bawa Pulang Kebaikan Re'ward",
        subtitle: "Jelajahi koleksi produk sehat pilihan kami, dari paket Re'drink harian hingga merchandise eksklusif."
    },
    {
        url: 'https://ik.imagekit.io/hrctvvb3m/Gemini_Generated_Image_z46j1vz46j1vz46j.png?updatedAt=1721284534898',
        title: "Baru! Rempah Sachet Praktis",
        subtitle: "Nikmati racikan khas Re'ward kapan saja, di mana saja. Ciptakan minuman sehatmu sendiri di rumah."
    }
];

const formatSubCategoryLabel = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

interface StorePageProps {
    onAddToCart: (item: Product) => void;
    onViewDetails: (item: Product) => void;
}

const StorePage: React.FC<StorePageProps> = ({ onAddToCart, onViewDetails }) => {
  const [activeCategory, setActiveCategory] = useState('redrink');
  const [activeMerchSubTab, setActiveMerchSubTab] = useState('drinkware');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const subCategoryLinkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const mainTabs = [
    { 
      id: 'redrink', 
      label: "Re'drink", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    },
    { 
      id: 'merchandise', 
      label: 'Merchandise', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    },
    { 
      id: 'rewardToGo', 
      label: "Re'ward To Go", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
    },
    { 
      id: 'produkHerbal', 
      label: 'Produk Herbal', 
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.355 0 2.707-.157 4-.452M12 21c-1.355 0-2.707-.157-4-.452M3 15a9.004 9.004 0 0018 0" /></svg>
    },
  ];

  const merchSubTabs = Object.keys(takeMeHomeData.merchandise).map(key => ({
    id: key,
    label: formatSubCategoryLabel(key),
  }));

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

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
               setActiveMerchSubTab(subCategory);
            }
          }
        });
      },
      { rootMargin: `-200px 0px -50% 0px`, threshold: 0 }
    );

    const currentRefs = sectionRefs.current;
    Object.keys(currentRefs).forEach((key) => {
      const ref = currentRefs[key];
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
        observerRef.current?.disconnect();
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
    };
  }, []);

  useEffect(() => {
    const activeLink = subCategoryLinkRefs.current[activeMerchSubTab];
    if (activeLink) {
        activeLink.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    }
  }, [activeMerchSubTab]);

  const handleOpenModal = (product: Product) => {
    if (product.packages) {
      setModalProduct(product);
    } else {
      onAddToCart(product);
    }
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };
  
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
      setActiveMerchSubTab(subCategoryId);
      
      const targetElement = document.getElementById(`subcategory-merchandise-${subCategoryId}`);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
  };

  return (
    <main>
      <Slider slides={storeSlides} />
      <RedrinkModal
        isOpen={!!modalProduct}
        product={modalProduct}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />
      
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="flex flex-wrap justify-center border-b border-brand-orange/30 bg-white">
          {mainTabs.map(tab => (
            <a
              href={`#category-${tab.id}`}
              key={tab.id}
              onMouseDown={(e) => handleCategoryClick(e, tab.id)}
              onClick={(e) => e.preventDefault()}
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
        
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeCategory === 'merchandise' ? 'max-h-40' : 'max-h-0'}`}>
            <div className="flex overflow-x-auto gap-2 p-3 hide-scrollbar bg-white/95 backdrop-blur-sm">
                {merchSubTabs.map(tab => (
                  <a
                    href={`#subcategory-merchandise-${tab.id}`}
                    key={tab.id}
                    ref={el => subCategoryLinkRefs.current[tab.id] = el}
                    onMouseDown={(e) => handleSubCategoryClick(e, tab.id)}
                    onClick={(e) => e.preventDefault()}
                    className={`flex-shrink-0 px-5 py-3 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    activeMerchSubTab === tab.id
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

      <section id="full-store-content" className="bg-white">
        <div className="container mx-auto px-6">
          <div id="category-redrink" ref={el => sectionRefs.current['category-redrink'] = el} className="pt-16">
            <SectionTitle title="Re'drink" subtitle="Paket Sehat Harian" />
            <div className="grid grid-cols-2 gap-6">
              {fullJsrData.map((item, index) => (
                  <MenuItemCard key={`redrink-${index}`} {...item} onAddToCart={handleOpenModal} onCardClick={handleOpenModal} />
              ))}
            </div>
          </div>
          
          <div id="category-merchandise" ref={el => sectionRefs.current['category-merchandise'] = el} className="pt-16">
            <SectionTitle title="Merchandise" subtitle="Gaya Hidup Sehat" />
            {Object.entries(takeMeHomeData.merchandise).map(([subCategory, items]) => (
              <div key={subCategory} id={`subcategory-merchandise-${subCategory}`} ref={el => sectionRefs.current[`subcategory-merchandise-${subCategory}`] = el} className="mb-12">
                <h3 className="text-2xl font-bold font-serif text-brand-green mb-6 border-l-4 border-brand-orange pl-4">
                  {formatSubCategoryLabel(subCategory)}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <ProductCard key={`merch-${subCategory}-${index}`} {...item} onAddToCart={onAddToCart} onCardClick={onViewDetails} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div id="category-rewardToGo" ref={el => sectionRefs.current['category-rewardToGo'] = el} className="pt-16">
            <SectionTitle title="Re'ward To Go" subtitle="Kebaikan Instan" />
            <div className="grid grid-cols-2 gap-6">
              {takeMeHomeData.rewardToGo.map((item, index) => (
                <ProductCard key={`togo-${index}`} {...item} onAddToCart={onAddToCart} onCardClick={onViewDetails} />
              ))}
            </div>
          </div>

          <div id="category-produkHerbal" ref={el => sectionRefs.current['category-produkHerbal'] = el} className="pt-16 pb-12">
            <SectionTitle title="Produk Herbal" subtitle="Solusi Alami" />
            <div className="grid grid-cols-2 gap-6">
              {takeMeHomeData.produkHerbal.map((item, index) => (
                <ProductCard key={`herbal-${index}`} {...item} onAddToCart={onAddToCart} onCardClick={onViewDetails} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StorePage;
