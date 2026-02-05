
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';

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

type SubTab = 'merchandise' | 'rewardToGo' | 'produkHerbal';

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
}

interface ProductsProps {
    onAddToCart: (item: Product) => void;
    onViewDetails: (item: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, onViewDetails }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('rewardToGo');
  
  const subTabs: { id: SubTab, label: string }[] = [
    { id: 'merchandise', label: 'Merchandise' },
    { id: 'rewardToGo', label: "Re'ward To Go" },
    { id: 'produkHerbal', label: 'Produk Herbal' },
  ];
  
  const getCurrentItems = () => {
    if (activeSubTab === 'merchandise') {
        // Flatten all merchandise items for the homepage preview
        return Object.values(takeMeHomeData.merchandise).flat();
    }
    return takeMeHomeData[activeSubTab];
  }

  const displayedItems = getCurrentItems().slice(0, 2);

  const handleViewMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#store';
  };
  
  return (
    <section id="products" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Retail & Ecosystem" title="Take Me Home" />
        <p className="text-center max-w-3xl mx-auto -mt-8 mb-12 text-base text-brand-brown">
            Bawa pulang kebaikan Re'ward. Temukan produk-produk inovatif, merchandise, dan produk herbal pilihan untuk menemani gaya hidup sehat Anda.
        </p>
        <div className="w-full">
            <div className="flex justify-center mb-8 border-b border-brand-orange/30">
            {subTabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id)}
                    className={`px-5 py-2 text-md font-medium transition-colors duration-300 ${
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
            {displayedItems.map((product, index) => (
                <ProductCard key={index} {...product} onAddToCart={onAddToCart} onCardClick={onViewDetails} />
            ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#store" onClick={handleViewMoreClick} className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                Lihat Lebih Lengkap
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
