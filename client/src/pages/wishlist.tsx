import { Link } from "wouter";
import { Heart, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishlistCard from "@/components/WishlistCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWishlist } from "@/contexts/WishlistContext";

export default function Wishlist() {
  const { items } = useWishlist();

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
          Wishlist
        </h1>

        {items.length === 0 ? (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-16">
            <CardContent>
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Save your favorite hoodies for later
              </p>
              <Link href="/shop">
                <Button
                  className="bg-gradient-to-r from-neon-pink to-neon-purple"
                  data-testid="button-explore"
                >
                  Explore Products
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <WishlistCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
