import { Link } from "wouter";
import { ArrowRight, Tag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";

interface CartSummaryProps {
  showCheckoutButton?: boolean;
}

export default function CartSummary({ showCheckoutButton = true }: CartSummaryProps) {
  const { subtotal, totalItems } = useCart();
  
  const shippingCost = subtotal >= 100 ? 0 : 9.99;
  const total = subtotal + shippingCost;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 sticky top-24">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input placeholder="Promo code" className="bg-secondary/50" data-testid="input-promo" />
          <Button variant="secondary" data-testid="button-apply-promo">
            <Tag className="w-4 h-4" />
          </Button>
        </div>

        <Separator />

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <Truck className="w-4 h-4" />
              Shipping
            </span>
            <span className="font-medium">
              {shippingCost === 0 ? (
                <span className="text-green-400">FREE</span>
              ) : (
                `$${shippingCost.toFixed(2)}`
              )}
            </span>
          </div>
          {subtotal < 100 && (
            <p className="text-xs text-neon-cyan">
              Add ${(100 - subtotal).toFixed(2)} more for free shipping!
            </p>
          )}
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-neon-cyan" data-testid="text-total">${total.toFixed(2)}</span>
        </div>
      </CardContent>

      {showCheckoutButton && (
        <CardFooter className="flex flex-col gap-3">
          <Link href="/checkout" className="w-full">
            <Button
              className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold py-6 rounded-full"
              disabled={totalItems === 0}
              data-testid="button-checkout"
            >
              CHECKOUT
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/shop" className="w-full">
            <Button variant="ghost" className="w-full" data-testid="button-continue-shopping">
              Continue Shopping
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
