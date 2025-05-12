
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name[language],
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 bg-cream-50">
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="w-full h-full object-contain p-4"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-block bg-tea-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-lg mb-2">{product.name[language]}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {product.description[language].length > 100
            ? `${product.description[language].substring(0, 100)}...`
            : product.description[language]
          }
        </p>
        
        <div className="flex space-x-2 mt-auto">
          <Button 
            size="sm" 
            className="flex-1 bg-tea-600 hover:bg-tea-700"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-1" />
            {t("product.addToCart")}
          </Button>
          
          <Button 
            size="sm" 
            variant="outline" 
            className="flex items-center"
            asChild
          >
            <Link to={`/product/${product.id}`}>
              <Eye size={16} className="mr-1" />
              {t("product.details")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
