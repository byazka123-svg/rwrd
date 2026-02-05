
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import JsrDrinks from './components/JsrDrinks';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import ProductsPage from './pages/ProductsPage';
import ReDrinkPage from './pages/ReDrinkPage';
import StorePage from './pages/StorePage';
import CartPopup from './components/CartPopup';
import BottomNav from './components/BottomNav';
import CheckoutForm from './components/CheckoutForm';
import OrderSuccessNotification from './components/OrderSuccessNotification';

// Define product and cart item types
export interface Product {
  name: string;
  description: string;
  image: string;
  price?: string;
  packages?: { [key: string]: string };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CustomerInfo {
    name: string;
    address: string;
    postalCode: string;
    whatsapp: string;
}

const HomePage: React.FC<{ onAddToCart: (item: Product) => void }> = ({ onAddToCart }) => (
  <main>
    <Hero />
    <About />
    <Menu onAddToCart={onAddToCart} />
    <JsrDrinks onAddToCart={onAddToCart} />
    <Products onAddToCart={onAddToCart} />
    <Services />
    <Gallery />
    <Contact />
  </main>
);

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSent, setIsOrderSent] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);


  const handleAddToCart = (itemToAdd: Product) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.name === itemToAdd.name);
        if (existingItem) {
            return prevItems.map(item =>
                item.name === itemToAdd.name ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemName: string, quantity: number) => {
    setCartItems(prevItems => {
        if (quantity <= 0) {
            return prevItems.filter(item => item.name !== itemName);
        }
        return prevItems.map(item =>
            item.name === itemName ? { ...item, quantity } : item
        );
    });
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  
  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = (formData: CustomerInfo) => {
    setCustomerInfo(formData);
    setIsCheckoutOpen(false);
    setIsOrderSent(true);
  };

  const handleWhatsAppConfirm = () => {
    const businessNumber = "6281398898131"; // Your business WhatsApp number

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const subtotal = cartItems.reduce((total, item) => {
        const price = item.price ? parseFloat(item.price.replace(/[^0-9]/g, '')) : 0;
        return total + price * item.quantity;
    }, 0);

    const orderDetails = cartItems.map(item => 
        `- ${item.name} (x${item.quantity}) - ${item.price}`
    ).join('\n');

    const message = `
Halo Re'ward, saya ingin konfirmasi pesanan saya.

*Detail Pemesan:*
Nama: ${customerInfo?.name}
Alamat: ${customerInfo?.address}, ${customerInfo?.postalCode}
No. WA: ${customerInfo?.whatsapp}

*Pesanan:*
${orderDetails}

*Subtotal: ${formatCurrency(subtotal)}*

Mohon informasikan total beserta ongkos kirim. Terima kasih.
    `.trim().replace(/\n\s+/g, '\n');

    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    // Reset state after confirming
    setIsOrderSent(false);
    setCartItems([]);
    setCustomerInfo(null);
    window.location.hash = '#';
  };


  const handleBottomNavClick = (hash: string) => {
    window.location.hash = hash;
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial route
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#fnb-menu':
        return <MenuPage />;
      case '#full-products':
        return <ProductsPage onAddToCart={handleAddToCart} />;
      case '#full-redrink':
        return <ReDrinkPage onAddToCart={handleAddToCart} />;
      case '#store':
        return <StorePage onAddToCart={handleAddToCart} />;
      default:
        // Handles #, #home, #about, etc. by showing the homepage
        return <HomePage onAddToCart={handleAddToCart} />;
    }
  };

  return (
    <div className="bg-brand-offwhite text-brand-brown font-sans pb-20 max-w-md mx-auto shadow-2xl min-h-screen">
      <Header />
      {renderPage()}
      <Footer />
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={handleCloseCart} 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity} 
        onCheckout={handleOpenCheckout}
      />
      <CheckoutForm 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSubmit={handleOrderSubmit}
      />
      <OrderSuccessNotification
        isOpen={isOrderSent}
        onConfirm={handleWhatsAppConfirm}
      />
      <BottomNav
        cartItemCount={totalCartItems}
        onCartClick={handleOpenCart}
        currentRoute={route}
        onNavClick={handleBottomNavClick}
      />
    </div>
  );
};

export default App;
