import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">$</span>
            </div>
            <span className="font-bold text-lg text-gray-900">TourSriLankaDeals.com</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link to="/destination/1" className="text-gray-700 hover:text-gray-900 font-medium">Destinations</Link>
            <Link to="/news" className="text-gray-700 hover:text-gray-900 font-medium">News</Link>
            <Link to="/weather" className="text-gray-700 hover:text-gray-900 font-medium">Weather</Link>
            <Link to="/exchange-rates" className="text-gray-700 hover:text-gray-900 font-medium">Exchange Rates</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-gray-900 font-medium">Home</Link>
          <Link to="/destination/1" className="block text-gray-700 hover:text-gray-900 font-medium">Destinations</Link>
          <Link to="/news" className="block text-gray-700 hover:text-gray-900 font-medium">News</Link>
          <Link to="/weather" className="block text-gray-700 hover:text-gray-900 font-medium">Weather</Link>
          <Link to="/exchange-rates" className="block text-gray-700 hover:text-gray-900 font-medium">Exchange Rates</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
