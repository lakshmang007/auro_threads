import CartItem from "../CartItem";
import { CartProvider } from "@/contexts/CartContext";
import blackHoodie from "@assets/generated_images/black_hoodie_product_shot.png";

export default function CartItemExample() {
  const mockItem = {
    id: "1",
    name: "Sakura Spirit Hoodie",
    price: 89.99,
    image: blackHoodie,
    size: "M",
    color: "Sakura Pink",
    embroideryPosition: "Front Center",
    quantity: 2,
  };

  return (
    <CartProvider>
      <div className="max-w-md">
        <CartItem item={mockItem} />
      </div>
    </CartProvider>
  );
}
