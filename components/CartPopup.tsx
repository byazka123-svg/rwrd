
import React from 'react';
import type { CartItem } from '../App';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemName: string, quantity: number) => void;
  onCheckout: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose, items, onUpdateQuantity, onCheckout }) => {
  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
        const price = item.price ? parseFloat(item.price.replace(/[^0-9]/g, '')) : 0;
        return total + price * item.quantity;
    }, 0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount).replace(/\s?IDR/g, 'Rp ');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-brand-offwhite rounded-lg shadow-2xl p-6 w-full max-w-lg relative animate-fade-in flex flex-col"
        style={{maxHeight: '90vh'}}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-brown hover:text-brand-orange transition-colors"
          aria-label="Close cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold font-serif text-brand-green text-center mb-6">
          My Cart
        </h2>

        <div className="flex-grow overflow-y-auto pr-2 -mr-2">
            {items.length > 0 ? (
                <div className="divide-y divide-brand-orange/20">
                    {items.map(item => (
                        <div key={item.name} className="flex items-center gap-4 py-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                            <div className="flex-grow">
                                <p className="font-bold text-brand-green leading-tight">{item.name}</p>
                                <p className="text-sm text-brand-orange mt-1">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2 text-center flex-shrink-0">
                                <button onClick={() => onUpdateQuantity(item.name, item.quantity - 1)} className="w-7 h-7 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors">-</button>
                                <span className="w-6 text-center font-semibold">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.name, item.quantity + 1)} className="w-7 h-7 rounded-full border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors">+</button>
                            </div>
                             <button onClick={() => onUpdateQuantity(item.name, 0)} className="text-brand-brown/50 hover:text-red-500 transition-colors flex-shrink-0" aria-label={`Remove ${item.name}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                             </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center my-12 text-brand-brown">Keranjang Anda kosong.</p>
            )}
        </div>

        {items.length > 0 && (
            <div className="mt-6 pt-6 border-t border-brand-green/30">
                <div className="flex justify-between items-center text-lg">
                    <span className="text-brand-brown">Subtotal</span>
                    <span className="font-bold text-brand-green">{formatCurrency(calculateSubtotal())}</span>
                </div>
                <p className="text-right text-sm text-brand-brown/80 mt-1">Belum termasuk ongkir</p>
            </div>
        )}

        <div className="flex flex-col gap-4 mt-8">
          <button 
            onClick={onClose}
            className="w-full text-center border-2 border-brand-orange text-brand-orange font-bold py-3 px-6 rounded-full hover:bg-brand-orange hover:text-white transition-colors"
          >
            Lanjut Belanja
          </button>
          <button 
            onClick={onCheckout}
            className="w-full text-center bg-brand-green text-brand-offwhite font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={items.length === 0}
          >
            Langsung Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
