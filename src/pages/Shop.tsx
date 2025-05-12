
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../components/ProductCard";
import { products, Product } from "../data/products";

const Shop = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Parse the URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [location.search]);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (category !== "all") {
      result = result.filter(product => product.category === category);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name[language].localeCompare(b.name[language]));
        break;
      case "name-desc":
        result.sort((a, b) => b.name[language].localeCompare(a.name[language]));
        break;
      case "featured":
      default:
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
    }
    
    setFilteredProducts(result);
  }, [category, sortBy, language]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        {language === 'en' ? 'Our Tea Collection' : 'Unsere Teekollektion'}
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">
              {language === 'en' ? 'Category' : 'Kategorie'}
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={language === 'en' ? 'Select category' : 'Kategorie auswählen'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === 'en' ? 'All Categories' : 'Alle Kategorien'}
                </SelectItem>
                <SelectItem value="black">
                  {language === 'en' ? 'Black Tea' : 'Schwarzer Tee'}
                </SelectItem>
                <SelectItem value="green">
                  {language === 'en' ? 'Green Tea' : 'Grüner Tee'}
                </SelectItem>
                <SelectItem value="herbal">
                  {language === 'en' ? 'Herbal Tea' : 'Kräutertee'}
                </SelectItem>
                <SelectItem value="white">
                  {language === 'en' ? 'White Tea' : 'Weißer Tee'}
                </SelectItem>
                <SelectItem value="oolong">
                  {language === 'en' ? 'Oolong Tea' : 'Oolong-Tee'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-1 block">
              {language === 'en' ? 'Sort By' : 'Sortieren nach'}
            </label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={language === 'en' ? 'Sort by' : 'Sortieren nach'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">
                  {language === 'en' ? 'Featured' : 'Empfohlen'}
                </SelectItem>
                <SelectItem value="price-low">
                  {language === 'en' ? 'Price: Low to High' : 'Preis: Niedrig zu Hoch'}
                </SelectItem>
                <SelectItem value="price-high">
                  {language === 'en' ? 'Price: High to Low' : 'Preis: Hoch zu Niedrig'}
                </SelectItem>
                <SelectItem value="name-asc">
                  {language === 'en' ? 'Name: A to Z' : 'Name: A bis Z'}
                </SelectItem>
                <SelectItem value="name-desc">
                  {language === 'en' ? 'Name: Z to A' : 'Name: Z bis A'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground self-end">
          {filteredProducts.length} {language === 'en' ? 'products found' : 'Produkte gefunden'}
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">
            {language === 'en' ? 'No products found' : 'Keine Produkte gefunden'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Try changing your filters to find products.' 
              : 'Versuchen Sie, Ihre Filter zu ändern, um Produkte zu finden.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
