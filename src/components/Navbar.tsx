
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartMenu from "./CartMenu";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-tea-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 text-tea-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-leaf-sway">
                  <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 19.5C5.5 18 6 15 6 12c0-6 4-10 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22c-4 0-7-2-8.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.1 2.3 14 6.8l4.5-1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold">LeafyTea</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="hover:text-cream-100 transition-colors">
              {t("nav.home")}
            </Link>
            <Link to="/shop" className="hover:text-cream-100 transition-colors">
              {t("nav.shop")}
            </Link>
            <Link to="/contact" className="hover:text-cream-100 transition-colors">
              {t("nav.contact")}
            </Link>
            <Link to="/forum" className="hover:text-cream-100 transition-colors">
              {t("nav.forum")}
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-tea-700 hover:bg-tea-800 transition-colors"
            >
              {language === 'en' ? 'DE' : 'EN'}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <Button 
                  variant="ghost" 
                  className="rounded-full w-8 h-8 p-0 bg-tea-700 hover:bg-tea-800 text-white"
                >
                  <User size={16} />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    <div className="font-medium truncate">{user.name}</div>
                    <div className="truncate text-gray-500">{user.email}</div>
                  </div>
                  <hr />
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t("nav.logout")}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  className="rounded-full w-8 h-8 p-0 bg-tea-700 hover:bg-tea-800 text-white"
                >
                  <User size={16} />
                </Button>
              </Link>
            )}

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="rounded-full w-8 h-8 p-0 bg-tea-700 hover:bg-tea-800 text-white relative"
                >
                  <ShoppingCart size={16} />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartMenu />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                className="rounded-full w-8 h-8 p-0 bg-tea-700 hover:bg-tea-800 text-white"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-2 space-y-2">
            <Link 
              to="/" 
              className="block py-2 hover:text-cream-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link 
              to="/shop" 
              className="block py-2 hover:text-cream-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.shop")}
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-cream-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Link 
              to="/forum" 
              className="block py-2 hover:text-cream-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.forum")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
