
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts, Product } from "../data/products";

const Index = () => {
  const { t, language } = useLanguage();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-tea-700 text-white overflow-hidden leaf-bg">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("home.welcome")}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {t("home.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-tea-500 hover:bg-tea-600 text-white rounded-full px-8 text-lg h-12"
                asChild
              >
                <Link to="/shop">
                  {t("nav.shop")}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 text-lg h-12"
                asChild
              >
                <Link to="/contact">
                  {t("contact.title")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-tea-800 opacity-40" />
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("home.featured")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button 
              className="bg-tea-600 hover:bg-tea-700 rounded-full px-8"
              asChild
            >
              <Link to="/shop">
                View All Products
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t("home.about")}</h2>
              <p className="text-lg mb-6">
                {t("home.about.text")}
              </p>
              <p className="text-lg mb-8">
                {language === 'en' 
                  ? 'We work directly with farmers to ensure sustainable practices and fair trade throughout our supply chain.'
                  : 'Wir arbeiten direkt mit Bauern zusammen, um nachhaltige Praktiken und fairen Handel in unserer gesamten Lieferkette zu gewährleisten.'}
              </p>
              <Button 
                className="bg-tea-600 hover:bg-tea-700 rounded-full px-6"
                asChild
              >
                <Link to="/contact">
                  {t("contact.title")}
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square bg-cream-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2/3 h-2/3 text-tea-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                    <path d="M5 19.5C5.5 18 6 15 6 12c0-6 4-10 10-10"></path>
                    <path d="M12 22c-4 0-7-2-8.5-6"></path>
                    <path d="M15.1 2.3 14 6.8l4.5-1.1"></path>
                    <path d="M12 22c-4 0-7-2-8.5-6"></path>
                    <path d="M9 10a3 3 0 0 0 3 3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-tea-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Join Our Tea Community' : 'Treten Sie unserer Tee-Gemeinschaft bei'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Sign up for our newsletter to receive brewing tips, tea recipes, and exclusive offers.'
              : 'Melden Sie sich für unseren Newsletter an, um Brühtipps, Teerezepte und exklusive Angebote zu erhalten.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={language === 'en' ? 'Your email address' : 'Ihre E-Mail-Adresse'} 
              className="h-12 px-4 rounded-full flex-grow bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-tea-400"
            />
            <Button className="h-12 bg-tea-500 hover:bg-tea-600 rounded-full px-6">
              {language === 'en' ? 'Subscribe' : 'Abonnieren'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
