
import React from 'react';

interface OrderSuccessNotificationProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const OrderSuccessNotification: React.FC<OrderSuccessNotificationProps> = ({ isOpen, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-brand-offwhite rounded-lg shadow-2xl p-8 w-full max-w-sm relative animate-fade-in flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h2 className="text-2xl font-bold font-serif text-brand-green mb-2">
            Pesanan Terkirim!
        </h2>
        <p className="text-brand-brown mb-6">
            Silakan lanjutkan untuk konfirmasi pesanan Anda melalui WhatsApp.
        </p>
        <button
          onClick={onConfirm}
          className="w-full text-center bg-brand-green text-brand-offwhite font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.354 1.654zm.789-2.012c.112.011.227.016.34.016.273 0 .547-.031.815-.092l.528-.103.357.433c1.525 1.841 3.582 2.833 5.765 2.833 5.46 0 9.908-4.448 9.908-9.908 0-2.618-1.017-5.072-2.831-6.886-1.814-1.812-4.269-2.829-6.887-2.829-5.459 0-9.906 4.447-9.906 9.907 0 2.088.632 4.098 1.745 5.77l.524.799-.342.524c-.244.375-.477.767-.697 1.181l.011.001z"/></svg>
          Konfirmasi via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessNotification;
