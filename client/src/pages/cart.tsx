import { Link } from "wouter";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link href="/shop">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Button>
        </Link>

        <h1 className="text-4xl font-black mb-8">
          <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            Your
          </span>{" "}
          Cart
        </h1>

        {items.length === 0 ? (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-16">
            <CardContent>
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any items yet
              </p>
              <Link href="/shop">
                <Button
                  className="bg-gradient-to-r from-neon-pink to-neon-purple"
                  data-testid="button-start-shopping"
                >
                  Start Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  {items.map((item) => (
                    <CartItem
                      key={`${item.id}-${item.size}-${item.color}`}
                      item={item}
                    />
                  ))}
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
