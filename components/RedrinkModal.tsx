
import React, { useState, useEffect } from 'react';

interface Product {
  name: string;
  description: string;
  image: string;
  price?: string;
  packages?: { [key: string]: string };
}

interface RedrinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (item: Product) => void;
}

const RedrinkModal: React.FC<RedrinkModalProps> = ({ isOpen, onClose, product, onAddToCart }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  useEffect(() => {
    if (product?.packages) {
      setSelectedPackage(Object.keys(product.packages)[0]);
    }
  }, [product]);

  if (!isOpen || !product || !product.packages) return null;

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      name: `${product.name} (${selectedPackage})`,
      price: product.packages?.[selectedPackage],
      packages: undefined,
    };
    onAddToCart(itemToAdd);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-brand-offwhite rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md relative animate-fade-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-brown hover:text-brand-orange transition-colors"
          aria-label="Close package selection"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
            <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-lg mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-serif text-brand-green">{product.name}</h2>
            <p className="text-brand-brown mt-2">{product.description}</p>
        </div>

        <div className="mt-6">
            <h3 className="font-bold text-brand-green mb-3 text-center">Pilih Paket:</h3>
            <div className="space-y-2">
                {Object.entries(product.packages).map(([pkgName, pkgPrice]) => (
                    <button
                        key={pkgName}
                        onClick={() => setSelectedPackage(pkgName)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                            selectedPackage === pkgName 
                            ? 'bg-brand-orange/20 border-brand-orange shadow-inner' 
                            : 'bg-white border-gray-200 hover:border-brand-orange/50'
                        }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-brand-brown">{pkgName}</span>
                            <span className="font-bold text-brand-green">{pkgPrice}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleAddToCart}
            className="w-full text-center bg-brand-green text-brand-offwhite font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
          >
            Tambahkan ke Keranjang - {product.packages[selectedPackage]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedrinkModal;
