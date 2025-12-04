import WishlistCard from "../WishlistCard";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import pinkHoodie from "@assets/generated_images/pink_hoodie_product_shot.png";

export default function WishlistCardExample() {
  const mockItem = {
    id: "1",
    name: "Sakura Spirit Hoodie",
    price: 89.99,
    image: pinkHoodie,
    category: "Anime Characters",
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="max-w-sm">
            <WishlistCard item={mockItem} />
          </div>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
