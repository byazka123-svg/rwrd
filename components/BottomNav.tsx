
import React from 'react';

interface NavItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
    badgeCount?: number;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick, children, badgeCount }) => (
    <button
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200 ${
            isActive ? 'text-brand-orange' : 'text-brand-offwhite hover:text-brand-orange/80'
        }`}
    >
        {badgeCount > 0 && (
            <span className="absolute top-2 right-1/2 translate-x-4 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {badgeCount}
            </span>
        )}
        {children}
        <span className="text-xs font-medium">{label}</span>
    </button>
);


interface BottomNavProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentRoute: string;
  onNavClick: (hash: string) => void;
}


const BottomNav: React.FC<BottomNavProps> = ({ cartItemCount, onCartClick, currentRoute, onNavClick }) => {
    const isHomeActive = currentRoute === '#' || currentRoute === '' || currentRoute === '#home';
    const isMenuActive = currentRoute === '#fnb-menu';
    const isStoreActive = currentRoute.startsWith('#store');
    const isContactActive = currentRoute === '#contact';

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-brand-green shadow-[0_-2px_10px_rgba(0,0,0,0.2)] h-20 flex justify-around items-center z-40">
            <NavItem label="Home" isActive={isHomeActive} onClick={() => onNavClick('#home')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </NavItem>
            <NavItem label="Menu" isActive={isMenuActive} onClick={() => onNavClick('#fnb-menu')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </NavItem>
            <NavItem label="Store" isActive={isStoreActive} onClick={() => onNavClick('#store')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </NavItem>
            <NavItem label="My Cart" isActive={false} onClick={onCartClick} badgeCount={cartItemCount}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </NavItem>
            <NavItem label="Contact" isActive={isContactActive} onClick={() => onNavClick('#contact')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </NavItem>
        </nav>
    );
};

export default BottomNav;
