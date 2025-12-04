import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderConfirmation from "@/components/OrderConfirmation";

export default function OrderConfirmationPage() {
  const [, params] = useRoute("/order-confirmation/:orderId");
  const orderId = params?.orderId || "UNKNOWN";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <OrderConfirmation orderId={orderId} />
      </main>
      <Footer />
    </div>
  );
}
