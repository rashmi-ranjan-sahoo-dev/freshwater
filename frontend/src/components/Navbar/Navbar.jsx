import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/home' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  return (
    <>
      <nav
           className={`fixed top-0 left-0 right-0 w-full z-50
           pt-[env(safe-area-inset-top)]
           transition-all duration-300
           ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
         >
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center ">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <defs>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M25 5 C15 15, 10 25, 10 32 C10 40, 16 45, 25 45 C34 45, 40 40, 40 32 C40 25, 35 15, 25 5 Z"
                    fill="url(#waterGradient)"
                  />
                </svg>
              </div>
              <span
                className={`text-lg sm:text-xl lg:text-3xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                FreshWater
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-14">
              {navLinks.map((link,i) => (
                <Link
                key={i}
                  to={link.href}
                  className={`text-sm lg:text-md font-medium transition-colors hover:text-blue-500 cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-16">
              <a
                href="tel:0123456789"
                className={`flex items-center gap-2 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Phone className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <span className="text-xs xl:text-sm font-medium whitespace-nowrap">
                  (0) 123456789
                </span>
              </a>

              <div className="relative">
                <button className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <ShoppingCart className="w-4 h-4 xl:w-5 xl:h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>

              <button className="px-4 py-2 xl:px-6 xl:py-3 bg-blue-900 text-white rounded-full text-sm font-medium hover:bg-blue-800 transition-colors whitespace-nowrap">
                ORDER NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <div className="px-3 sm:px-4 pt-2 pb-6 bg-white shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-blue-500 font-medium border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="mt-6 space-y-4">
              <a
                href="tel:0123456789"
                className="flex items-center space-x-3 text-gray-700"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">(0) 123456789</span>
              </a>

              <div className="flex items-center space-x-4">
                <button className="relative w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="flex-1 px-6 py-3 bg-blue-900 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
