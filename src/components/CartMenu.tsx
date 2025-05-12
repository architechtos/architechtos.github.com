
import { useLanguage } from "../contexts/LanguageContext";
import { useCart } from "../contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartMenu = () => {
  const { t } = useLanguage();
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col h-full justify-center items-center space-y-4 p-6">
        <ShoppingBag size={64} className="text-muted-foreground" />
        <h3 className="font-medium text-lg">{t("cart.empty")}</h3>
        <Link to="/shop">
          <Button variant="outline">{t("cart.continue")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-4">{t("cart.title")}</h3>
      
      <div className="flex-1 overflow-y-auto space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b border-border pb-4">
            <div className="w-16 h-16 rounded bg-muted overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <div className="flex items-center mt-1">
                <button 
                  className="w-6 h-6 rounded border border-input flex items-center justify-center"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                <button 
                  className="w-6 h-6 rounded border border-input flex items-center justify-center"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="text-right">
              <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
              <button 
                className="text-destructive hover:text-destructive/80 transition-colors mt-1 flex items-center gap-1 text-xs"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 size={14} />
                <span>{t("cart.remove")}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-border mt-4 pt-4 space-y-4">
        <div className="flex justify-between text-lg font-medium">
          <span>{t("cart.total")}</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <Button className="w-full bg-tea-700 hover:bg-tea-800">
          {t("cart.checkout")}
        </Button>
      </div>
    </div>
  );
};

export default CartMenu;
