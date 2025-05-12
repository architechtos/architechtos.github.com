
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-tea-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 text-tea-600">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 19.5C5.5 18 6 15 6 12c0-6 4-10 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22c-4 0-7-2-8.5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.1 2.3 14 6.8l4.5-1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold">LeafyTea</span>
            </Link>
            <p className="mt-4 text-tea-100 text-sm">
              {t("home.about.text").substring(0, 120)}...
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-cream-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-tea-100 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-tea-100 hover:text-white transition-colors">
                  {t("nav.shop")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tea-100 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-tea-100 hover:text-white transition-colors">
                  {t("nav.forum")}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-cream-300">Tea Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=black" className="text-tea-100 hover:text-white transition-colors">
                  Black Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=green" className="text-tea-100 hover:text-white transition-colors">
                  Green Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=herbal" className="text-tea-100 hover:text-white transition-colors">
                  Herbal Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=white" className="text-tea-100 hover:text-white transition-colors">
                  White Tea
                </Link>
              </li>
              <li>
                <Link to="/shop?category=oolong" className="text-tea-100 hover:text-white transition-colors">
                  Oolong Tea
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-cream-300">{t("contact.title")}</h3>
            <address className="not-italic text-tea-100 space-y-2">
              <p>123 Tea Garden Lane</p>
              <p>Tea Valley, GR 12345</p>
              <p>Email: info@leafytea.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-tea-700 text-center text-tea-100">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LeafyTea. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
