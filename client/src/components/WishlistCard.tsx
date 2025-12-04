import { Link } from "wouter";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useWishlist, type WishlistItem } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/lib/mockData";

interface WishlistCardProps {
  item: WishlistItem;
}

export default function WishlistCard({ item }: WishlistCardProps) {
  const { addItem: addToCart } = useCart();
  const { removeItem } = useWishlist();
  const { toast } = useToast();

  const product = products.find((p) => p.id === item.id);

  const handleMoveToCart = () => {
    if (product) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: product.sizes[0],
        color: product.colors[0].name,
        embroideryPosition: product.embroideryPositions[0],
      });
      removeItem(item.id);
      toast({
        title: "Moved to cart",
        description: `${item.name} has been moved to your cart.`,
      });
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
    toast({
      title: "Removed from wishlist",
      description: `${item.name} has been removed from your wishlist.`,
    });
  };

  return (
    <Card
      className="group overflow-visible bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-pink/50 transition-colors"
      data-testid={`card-wishlist-${item.id}`}
    >
      <Link href={`/product/${item.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-md">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <div className="w-8 h-8 rounded-full bg-neon-pink/20 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-4 h-4 text-neon-pink fill-current" />
            </div>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/product/${item.id}`}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-neon-pink transition-colors">
            {item.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
        <p className="text-xl font-black text-neon-cyan mb-4">${item.price.toFixed(2)}</p>

        <div className="flex gap-2">
          <Button
            onClick={handleMoveToCart}
            className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold"
            data-testid={`button-move-to-cart-${item.id}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Move to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive hover:border-destructive"
            data-testid={`button-remove-wishlist-${item.id}`}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
