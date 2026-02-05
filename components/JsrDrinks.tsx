
import React, { useState } from 'react';
import MenuItemCard from './MenuItemCard';
import SectionTitle from './SectionTitle';
import RedrinkModal from './RedrinkModal';

const jsrData = [
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
];

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
    packages?: { [key: string]: string };
}

interface JsrDrinksProps {
    onAddToCart: (item: Product) => void;
}

const JsrDrinks: React.FC<JsrDrinksProps> = ({ onAddToCart }) => {
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

  const handleViewMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#store';
  };

  return (
    <>
      <section id="jsr-drinks" className="py-20 md:py-32 bg-brand-offwhite overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Signature Health Drinks" title="Re'drink" />
          <p className="text-center max-w-3xl mx-auto -mt-8 mb-12 text-lg text-brand-brown">
            Minuman fungsional harian yang diformulasikan secara khusus oleh Dr. Zaidul Akbar untuk mendukung kesehatan dan vitalitas Anda. Setiap paket dirancang untuk tujuan spesifik, menemani perjalanan sehat Anda setiap hari.
          </p>
          <div className="grid grid-cols-2 gap-6">
              {jsrData.map((item, index) => (
                  <MenuItemCard key={index} {...item} onAddToCart={handleOpenModal} />
              ))}
          </div>
          <div className="text-center mt-12">
              <a href="#store" onClick={handleViewMoreClick} className="border-2 border-brand-orange text-brand-orange font-bold py-2 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                Lihat Lebih Lengkap
              </a>
          </div>
        </div>
      </section>
      <RedrinkModal
        isOpen={!!modalProduct}
        product={modalProduct}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default JsrDrinks;
