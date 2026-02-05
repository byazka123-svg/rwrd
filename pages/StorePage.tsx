
import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import RedrinkModal from '../components/RedrinkModal';

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
        { name: "Re'ward Signature Mug", description: 'An elegant ceramic mug featuring our logo.', image: 'https://ik.imagekit.io/hrctvvb3m/unnamed%20(9).jpg', price: 'Rp 125.000' },
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
    },
    {
        url: 'https://picsum.photos/1200/800?image=223',
        title: "Paket Sehat Re'drink Mingguan",
        subtitle: "Mulai hari Anda dengan energi dan nutrisi terbaik. Pesan paket mingguan sekarang dan rasakan bedanya!"
    }
];

const categories = [
  {
    id: '#store-redrink',
    label: "Re'drink",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '#store-merchandise',
    label: 'Merchandise',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    ),
  },
  {
    id: '#store-reward-to-go',
    label: "Re'ward To Go",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
  },
  {
    id: '#store-herbal',
    label: 'Produk Herbal',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 6v4m-2-2h4M19 3v4m-2-2h4" />
        </svg>
    )
  },
];

type MerchSubTab = keyof typeof takeMeHomeData.merchandise;

const merchSubTabs: { id: MerchSubTab, label: string }[] = [
    { id: 'drinkware', label: 'Drinkware' },
    { id: 'tasApparel', label: 'Tas & Apparel' },
    { id: 'aksesoris', label: 'Aksesoris' },
    { id: 'stationery', label: 'Stationery' },
    { id: 'homeLiving', label: 'Home & Living' },
];

interface StorePageProps {
    onAddToCart: (item: Product) => void;
}

const StorePage: React.FC<StorePageProps> = ({ onAddToCart }) => {
  const [visibleRedrink, setVisibleRedrink] = useState(4);
  const [visibleMerchandise, setVisibleMerchandise] = useState(4);
  const [visibleRewardToGo, setVisibleRewardToGo] = useState(4);
  const [visibleHerbal, setVisibleHerbal] = useState(4);

  const [activeMerchSubTab, setActiveMerchSubTab] = useState<MerchSubTab>('drinkware');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

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


  const currentMerchItems = takeMeHomeData.merchandise[activeMerchSubTab];

  return (
    <main>
      <Slider slides={storeSlides} />
      <RedrinkModal
        isOpen={!!modalProduct}
        product={modalProduct}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />

      <section id="store-page" className="py-12 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          {/* Category Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
                {categories.map((category) => (
                <a 
                    key={category.id} 
                    href={category.id}
                    className="flex-shrink-0 flex flex-row items-center justify-center text-center px-5 py-2 bg-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    {category.icon}
                    <span className="ml-2 text-sm font-bold text-brand-green group-hover:text-brand-orange transition-colors duration-300">{category.label}</span>
                </a>
                ))}
            </div>
          </div>
          
          {/* Re'drink Section */}
          <div id="store-redrink" className="py-16 border-t border-brand-orange/30 scroll-mt-24">
            <h3 className="text-3xl font-bold font-serif text-brand-green mb-8 text-center">Paket Sehat Re'drink</h3>
            <div className="grid grid-cols-2 gap-6">
              {fullJsrData.slice(0, visibleRedrink).map((item, index) => (
                  <MenuItemCard key={`redrink-${index}`} {...item} onAddToCart={handleOpenModal} />
              ))}
            </div>
            {visibleRedrink < fullJsrData.length && (
              <div className="text-center mt-12">
                  <button 
                    onClick={() => setVisibleRedrink(fullJsrData.length)}
                    className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                    Tampilkan Lebih Banyak Produk
                  </button>
              </div>
            )}
          </div>

          {/* Merchandise Section */}
          <div id="store-merchandise" className="py-16 border-t border-brand-orange/30 scroll-mt-24">
            <h3 className="text-3xl font-bold font-serif text-brand-green mb-8 text-center">Merchandise</h3>
             <div className="flex flex-wrap justify-center gap-2 mb-10">
                {merchSubTabs.map(tab => (
                   <button
                     key={tab.id}
                     onClick={() => setActiveMerchSubTab(tab.id)}
                     className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                       activeMerchSubTab === tab.id
                         ? 'bg-brand-green text-white shadow'
                         : 'bg-white text-brand-brown hover:bg-brand-orange/20'
                     }`}
                   >
                     {tab.label}
                   </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              {currentMerchItems.slice(0, visibleMerchandise).map((product, index) => (
                <ProductCard key={`merch-${index}`} {...product} onAddToCart={onAddToCart} />
              ))}
            </div>
            {visibleMerchandise < currentMerchItems.length && (
              <div className="text-center mt-12">
                  <button 
                    onClick={() => setVisibleMerchandise(currentMerchItems.length)}
                    className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                    Tampilkan Lebih Banyak Produk
                  </button>
              </div>
            )}
          </div>

           {/* Product Innovation Section */}
          <div id="store-reward-to-go" className="py-16 border-t border-brand-orange/30 scroll-mt-24">
            <h3 className="text-3xl font-bold font-serif text-brand-green mb-8 text-center">Re'ward To Go</h3>
            <div className="grid grid-cols-2 gap-6">
              {takeMeHomeData.rewardToGo.slice(0, visibleRewardToGo).map((product, index) => (
                <ProductCard key={`promo-${index}`} {...product} onAddToCart={onAddToCart} />
              ))}
            </div>
            {visibleRewardToGo < takeMeHomeData.rewardToGo.length && (
              <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleRewardToGo(takeMeHomeData.rewardToGo.length)}
                    className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                    Tampilkan Lebih Banyak Produk
                  </button>
              </div>
            )}
          </div>

           {/* Herbal Products Section */}
          <div id="store-herbal" className="py-16 border-t border-b border-brand-orange/30 scroll-mt-24">
            <h3 className="text-3xl font-bold font-serif text-brand-green mb-8 text-center">Produk Herbal</h3>
            <div className="grid grid-cols-2 gap-6">
              {takeMeHomeData.produkHerbal.slice(0, visibleHerbal).map((product, index) => (
                <ProductCard key={`herbal-${index}`} {...product} onAddToCart={onAddToCart} />
              ))}
            </div>
            {visibleHerbal < takeMeHomeData.produkHerbal.length && (
              <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleHerbal(takeMeHomeData.produkHerbal.length)}
                    className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                    Tampilkan Lebih Banyak Produk
                  </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
};

export default StorePage;
