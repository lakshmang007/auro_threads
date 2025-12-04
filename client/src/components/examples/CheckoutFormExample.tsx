import CheckoutForm from "../CheckoutForm";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";

export default function CheckoutFormExample() {
  return (
    <ThemeProvider>
      <CartProvider>
        <CheckoutForm />
      </CartProvider>
    </ThemeProvider>
  );
}
