import ProductCard from "../ProductCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { products } from "@/lib/mockData";

export default function ProductCardExample() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="max-w-sm">
            <ProductCard product={products[0]} />
          </div>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
