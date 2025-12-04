import ProductDetail from "../ProductDetail";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { products } from "@/lib/mockData";

export default function ProductDetailExample() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductDetail product={products[0]} />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
