
import React from 'react';

// Using the same Product type definition from App.tsx
interface Product {
  name: string;
  description: string;
  image: string;
  price?: string;
  packages?: { [key: string]: string };
}

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (item: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

  const handleAddToCartClick = () => {
    onAddToCart(product);
    onClose(); // Close modal after adding to cart
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-brand-offwhite rounded-lg shadow-2xl p-6 w-full max-w-sm relative animate-fade-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-brown hover:text-brand-orange transition-colors z-10"
          aria-label="Close product details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
        
        <div className="text-center">
            <h2 className="text-2xl font-bold font-serif text-brand-green">{product.name}</h2>
            <p className="text-brand-orange font-bold text-xl mt-2">{product.price}</p>
            <p className="text-brand-brown mt-4 text-sm leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-8">
          <button
            onClick={handleAddToCartClick}
            className="w-full text-center bg-brand-green text-brand-offwhite font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
          >
            Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
