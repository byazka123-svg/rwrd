
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#fnb-menu', label: 'F&B Menu' },
    { href: '#jsr-drinks', label: "Re'drink" },
    { href: '#products', label: 'Take Me Home' },
    { href: '#services', label: 'Events & Spaces' },
    { href: '#store', label: 'Store' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.hash = href; // Programmatically change the hash to trigger the router
    setIsMenuOpen(false); // Ensure mobile menu closes on navigation
  };


  return (
    <>
      <header className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-brand-green bg-opacity-95 shadow-lg' : 'bg-transparent'}`}>
        <div className="px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center">
            <img src="https://ik.imagekit.io/hrctvvb3m/47ae459e-ff44-4e24-843a-6139307c21d6.png" alt="Re'ward Logo" className="h-12" />
          </a>
          <button 
            className="text-brand-offwhite z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
           >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-brand-green transition-transform duration-300 ease-in-out z-40 pt-32 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="text-2xl font-medium text-brand-offwhite transition-colors hover:text-brand-orange"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
