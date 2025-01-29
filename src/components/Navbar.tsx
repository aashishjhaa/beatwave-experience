import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-white font-bold text-xl font-poppins">
                Beat<span className="text-primary animate-pulse-light">Hub</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-primary transition-colors duration-200">
              Home
            </a>
            <a href="/explore" className="text-white hover:text-primary transition-colors duration-200">
              Explore Beats
            </a>
            <a href="/contact" className="text-white hover:text-primary transition-colors duration-200">
              Contact Us
            </a>
            <button className="text-white hover:text-primary transition-colors duration-200 relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/explore"
                className="text-white block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
              >
                Explore Beats
              </a>
              <a
                href="/contact"
                className="text-white block px-3 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
              >
                Contact Us
              </a>
              <button className="text-white w-full text-left px-3 py-2 rounded-md hover:bg-primary/10 transition-colors duration-200 flex items-center">
                <ShoppingCart size={20} className="mr-2" />
                Cart {cartCount > 0 && `(${cartCount})`}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};