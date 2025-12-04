import { useState } from "react";
import { Heart, ShoppingCart, Star, Check, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useToast } from "@/hooks/use-toast";
import { mockReviews } from "@/lib/mockData";
import type { Product } from "@/lib/mockData";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedPosition, setSelectedPosition] = useState(product.embroideryPositions[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor.name,
        embroideryPosition: selectedPosition,
      });
    }
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-4">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card group">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {discount && (
            <Badge className="absolute top-4 left-4 bg-neon-pink text-white border-0 text-sm">
              -{discount}% OFF
            </Badge>
          )}
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`shrink-0 w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? "border-neon-purple"
                  : "border-border hover:border-neon-purple/50"
              }`}
              data-testid={`button-image-${index}`}
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-2">
            {product.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-black mb-2">{product.name}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-black text-neon-cyan">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">SIZE</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full font-medium border transition-colors ${
                    selectedSize === size
                      ? "bg-neon-purple/20 border-neon-purple text-neon-purple"
                      : "border-border hover:border-foreground"
                  }`}
                  data-testid={`button-size-${size.toLowerCase()}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">COLOR</label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                    selectedColor.name === color.name
                      ? "border-neon-cyan scale-110"
                      : "border-border hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  data-testid={`button-color-${color.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {selectedColor.name === color.name && (
                    <Check
                      className={`w-5 h-5 ${
                        color.hex === "#f8f8ff" ? "text-gray-800" : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">EMBROIDERY POSITION</label>
            <div className="flex flex-wrap gap-2">
              {product.embroideryPositions.map((position) => (
                <button
                  key={position}
                  onClick={() => setSelectedPosition(position)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                    selectedPosition === position
                      ? "bg-neon-pink/20 border-neon-pink text-neon-pink"
                      : "border-border hover:border-foreground"
                  }`}
                  data-testid={`button-position-${position.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {position}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">QUANTITY</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  data-testid="button-quantity-minus"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  data-testid="button-quantity-plus"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Badge
                variant={product.stock > 10 ? "secondary" : "destructive"}
                className={
                  product.stock > 10
                    ? "bg-green-500/20 text-green-400 border-0"
                    : "bg-yellow-500/20 text-yellow-400 border-0"
                }
              >
                {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold py-6 rounded-full"
            data-testid="button-add-to-cart"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            ADD TO CART
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleWishlist}
            className={`h-auto aspect-square rounded-full border-2 ${
              inWishlist ? "border-neon-pink text-neon-pink" : "border-border"
            }`}
            data-testid="button-wishlist"
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="w-5 h-5 text-neon-cyan" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-neon-purple" />
            <span>Quality Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RotateCcw className="w-5 h-5 text-neon-pink" />
            <span>Easy Returns</span>
          </div>
        </div>

        <Tabs defaultValue="details" className="pt-4">
          <TabsList className="w-full bg-secondary/50">
            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span>400gsm Premium Cotton</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Embroidery</span>
                  <span>High-density Thread</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fit</span>
                  <span>Oversized / Streetwear</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Care</span>
                  <span>Machine Wash Cold</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4 space-y-4">
            {mockReviews.map((review) => (
              <Card key={review.id} className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">{review.userName}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{review.comment}</p>
                  <span className="text-xs text-muted-foreground mt-2 block">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
