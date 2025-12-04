import CartSummary from "../CartSummary";
import { CartProvider } from "@/contexts/CartContext";

export default function CartSummaryExample() {
  return (
    <CartProvider>
      <div className="max-w-sm">
        <CartSummary />
      </div>
    </CartProvider>
  );
}
