
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Minus, Plus } from "lucide-react";
import { getProductById, Product } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
    }
    setIsLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name[language],
        price: product.price,
        image: product.image
      }, quantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-10 w-2/3 bg-gray-200 rounded mx-auto mb-6"></div>
          <div className="h-80 bg-gray-200 rounded mb-6"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded mx-auto mb-4"></div>
          <div className="h-6 w-1/4 bg-gray-200 rounded mx-auto mb-6"></div>
          <div className="h-20 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-1/3 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-6">
          {language === 'en' 
            ? 'Product not found' 
            : 'Produkt nicht gefunden'}
        </h1>
        <Link to="/shop" className="text-tea-600 hover:underline flex items-center justify-center">
          <ArrowLeft size={16} className="mr-2" />
          {language === 'en' 
            ? 'Return to shop' 
            : 'Zurück zum Shop'}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link to="/shop" className="text-tea-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          {language === 'en' 
            ? 'Back to shop' 
            : 'Zurück zum Shop'}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-cream-50 rounded-lg p-6 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name[language]} 
            className="max-w-full max-h-96 object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name[language]}</h1>
          
          <div className="text-2xl font-semibold text-tea-700 mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="mb-8">
            <p className="text-lg leading-relaxed mb-4">
              {product.description[language]}
            </p>
            <div className="mt-4 inline-block px-3 py-1 bg-tea-100 text-tea-800 rounded-full text-sm font-medium">
              {language === 'en' 
                ? product.category.charAt(0).toUpperCase() + product.category.slice(1) + ' Tea'
                : (product.category === 'black' ? 'Schwarzer' : 
                   product.category === 'green' ? 'Grüner' : 
                   product.category === 'white' ? 'Weißer' : 
                   product.category === 'oolong' ? 'Oolong' : 'Kräuter') + '-Tee'}
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              {t("product.quantity")}
            </label>
            <div className="flex items-center">
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                onClick={decreaseQuantity}
              >
                <Minus size={16} />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button 
                type="button" 
                variant="outline" 
                size="icon"
                onClick={increaseQuantity}
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>
          
          <Button 
            className="w-full bg-tea-600 hover:bg-tea-700 h-12 text-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} className="mr-2" />
            {t("product.addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
