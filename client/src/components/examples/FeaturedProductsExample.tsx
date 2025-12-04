import FeaturedProducts from "../FeaturedProducts";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { products } from "@/lib/mockData";

export default function FeaturedProductsExample() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <FeaturedProducts products={products} />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
