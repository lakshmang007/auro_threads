import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem as CartItemType } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-0">
      <div className="w-24 h-28 rounded-md overflow-hidden bg-card shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-lg truncate" data-testid={`text-item-name-${item.id}`}>
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {item.size} / {item.color}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Embroidery: {item.embroideryPosition}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.id, item.size, item.color)}
            className="shrink-0 text-muted-foreground hover:text-destructive"
            data-testid={`button-remove-${item.id}`}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
              data-testid={`button-decrease-${item.id}`}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
              data-testid={`button-increase-${item.id}`}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <span className="font-bold text-neon-cyan" data-testid={`text-item-price-${item.id}`}>
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
