import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import AlmaLogo from './AlmaLogo';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-leaf/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <AlmaLogo className="text-gold" size="large" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAboutPage ? (
              <>
                <Link to="/" className="text-navy hover:text-gold transition-colors font-medium">Home</Link>
                <a href="#story" className="text-navy hover:text-gold transition-colors font-medium">Our Story</a>
                <a href="#team" className="text-navy hover:text-gold transition-colors font-medium">Team</a>
                <a href="#vision" className="text-navy hover:text-gold transition-colors font-medium">Vision</a>
              </>
            ) : (
              <>
                <a href="#product" className="text-navy hover:text-gold transition-colors font-medium">Benefits</a>
                <a href="#ingredients" className="text-navy hover:text-gold transition-colors font-medium">Ingredients</a>
                <a href="#reviews" className="text-navy hover:text-gold transition-colors font-medium">Reviews</a>
                <Link to="/about" className="text-navy hover:text-gold transition-colors font-medium">About</Link>
              </>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            {isAboutPage ? (
              <Link to="/" className="bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Digestive Support - 30% Off
              </Link>
            ) : (
              <button className="bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Shop Digestive Support - 30% Off
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-navy hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-t border-ocean/10">
          <div className="px-4 py-4 space-y-4">
            {isAboutPage ? (
              <>
                <Link to="/" className="block text-navy hover:text-gold transition-colors font-medium">Home</Link>
                <a href="#story" className="block text-navy hover:text-gold transition-colors font-medium">Our Story</a>
                <a href="#team" className="block text-navy hover:text-gold transition-colors font-medium">Team</a>
                <a href="#vision" className="block text-navy hover:text-gold transition-colors font-medium">Vision</a>
                <Link to="/" className="w-full bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-colors font-bold mt-4 block text-center">
                  Shop Digestive Support - 30% Off
                </Link>
              </>
            ) : (
              <>
                <a href="#product" className="block text-navy hover:text-gold transition-colors font-medium">Benefits</a>
                <a href="#ingredients" className="block text-navy hover:text-gold transition-colors font-medium">Ingredients</a>
                <a href="#reviews" className="block text-navy hover:text-gold transition-colors font-medium">Reviews</a>
                <Link to="/about" className="block text-navy hover:text-gold transition-colors font-medium">About</Link>
                <button className="w-full bg-ocean text-white px-6 py-3 rounded-full hover:bg-ocean/90 transition-colors font-bold mt-4">
                  Shop Digestive Support - 30% Off
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}