import { useState } from "react";
import { Link } from "wouter";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/mockData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0].name,
      embroideryPosition: product.embroideryPositions[0],
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
      });
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/product/${product.id}`}>
      <Card
        className="group relative overflow-visible bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:border-neon-purple/50 cursor-pointer hover-elevate"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-md">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <Badge className="bg-neon-purple text-white border-0">
                FEATURED
              </Badge>
            )}
            {discount && (
              <Badge className="bg-neon-pink text-white border-0">
                -{discount}%
              </Badge>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-0">
                LOW STOCK
              </Badge>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleWishlist}
            className={`absolute top-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 ${
              inWishlist ? "text-neon-pink" : "text-white"
            } hover:bg-white/20`}
            data-testid={`button-wishlist-${product.id}`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </Button>

          <div
            className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-neon-pink hover:bg-neon-pink/90 text-white font-bold"
              data-testid={`button-add-cart-${product.id}`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              ADD TO CART
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30"
              data-testid={`button-quick-view-${product.id}`}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg leading-tight group-hover:text-neon-pink transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.category}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-neon-cyan">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
          </div>

          <div className="flex gap-1 mt-3">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color.name}
                className="w-5 h-5 rounded-full border-2 border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground self-center ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
