
import React from 'react';

interface Product {
    name: string;
    description: string;
    image: string;
    price?: string;
}

interface ProductCardProps extends Product {
  onAddToCart: (item: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={image} alt={name} className="w-full aspect-square object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-base font-bold text-brand-green font-serif">{name}</h4>
        <p className="text-brand-brown mt-2 flex-grow text-xs">{description}</p>
        {price && (
           <div className="mt-4 pt-4 border-t border-brand-orange/20 flex justify-between items-center">
            <p className="text-base font-bold text-brand-green">{price}</p>
            <button 
              onClick={() => onAddToCart({ name, description, image, price })}
              className="bg-brand-orange text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-opacity-90 transition-transform transform hover:scale-110 shadow-md"
              aria-label={`Add ${name} to cart`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;