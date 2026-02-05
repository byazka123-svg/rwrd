
import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import SectionTitle from '../components/SectionTitle';
import RedrinkModal from '../components/RedrinkModal';

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

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
    packages?: { [key: string]: string };
}

interface ReDrinkPageProps {
    onAddToCart: (item: Product) => void;
}

const ReDrinkPage: React.FC<ReDrinkPageProps> = ({ onAddToCart }) => {
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

  return (
    <>
      <main className="pt-24 md:pt-32">
          <section id="full-redrink" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6">
              <SectionTitle title="Our Full Re'drink Selection" subtitle="Signature Health Drinks" />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {fullJsrData.map((item, index) => (
                  <MenuItemCard key={index} {...item} onAddToCart={handleOpenModal} />
              ))}
              </div>
          </div>
          </section>
      </main>
      <RedrinkModal
        isOpen={!!modalProduct}
        product={modalProduct}
        onClose={handleCloseModal}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ReDrinkPage;
