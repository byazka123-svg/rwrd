import React, { useState } from 'react';
import type { CustomerInfo } from '../App';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CustomerInfo) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: '',
    address: '',
    postalCode: '',
    whatsapp: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    // FIX: Explicitly convert value to string before trimming to resolve TypeScript error.
    if (Object.values(formData).some(value => String(value).trim() === '')) {
      alert('Mohon lengkapi semua data.');
      return;
    }
    onSubmit(formData);
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
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-brown hover:text-brand-orange transition-colors"
          aria-label="Close checkout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold font-serif text-brand-green text-center mb-6">
          Detail Pengiriman
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-brown mb-1">Nama Lengkap</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-brand-orange/30 rounded-md focus:ring-brand-orange focus:border-brand-orange" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-brand-brown mb-1">Alamat Lengkap</label>
            <textarea name="address" id="address" value={formData.address} onChange={handleChange} required rows={3} className="w-full px-3 py-2 border border-brand-orange/30 rounded-md focus:ring-brand-orange focus:border-brand-orange"></textarea>
          </div>
           <div className="flex gap-4">
            <div className="flex-1">
                <label htmlFor="postalCode" className="block text-sm font-medium text-brand-brown mb-1">Kode Pos</label>
                <input type="text" name="postalCode" id="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full px-3 py-2 border border-brand-orange/30 rounded-md focus:ring-brand-orange focus:border-brand-orange" />
            </div>
             <div className="flex-1">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-brand-brown mb-1">No. WhatsApp</label>
                <input type="tel" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="0812..." className="w-full px-3 py-2 border border-brand-orange/30 rounded-md focus:ring-brand-orange focus:border-brand-orange" />
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full text-center bg-brand-green text-brand-offwhite font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
            >
              Kirim Pesanan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;