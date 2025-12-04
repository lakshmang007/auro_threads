import { Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/mockData";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-4">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-medium text-neon-purple">TRENDING NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Featured
            </span>{" "}
            Drops
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our most popular anime-inspired hoodies, handpicked for the true otaku.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
