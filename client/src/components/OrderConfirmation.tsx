import { Link } from "wouter";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface OrderConfirmationProps {
  orderId: string;
}

export default function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-lg bg-card/50 backdrop-blur-sm border-border/50 text-center">
        <CardContent className="pt-12 pb-8 space-y-6">
          <div className="relative">
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div className="absolute inset-0 w-20 h-20 mx-auto bg-green-500/30 rounded-full animate-ping" />
          </div>

          <div>
            <h1 className="text-3xl font-black mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for shopping with Aura Threads
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Order ID</p>
            <p className="text-xl font-mono font-bold text-neon-cyan" data-testid="text-order-id">
              {orderId}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
              <Mail className="w-5 h-5 text-neon-pink shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Confirmation Email</p>
                <p className="text-xs text-muted-foreground">
                  We've sent order details to your email
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20">
              <Package className="w-5 h-5 text-neon-purple shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Shipping Updates</p>
                <p className="text-xs text-muted-foreground">
                  Track your order from your profile
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Link href="/profile">
              <Button
                className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold"
                data-testid="button-view-orders"
              >
                VIEW MY ORDERS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="ghost" className="w-full" data-testid="button-continue-shopping">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
