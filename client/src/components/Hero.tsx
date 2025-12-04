import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronRight } from "lucide-react";
import heroBackground from "@assets/generated_images/vaporwave_anime_hero_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-neon-pink/20 blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-neon-cyan/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-neon-purple/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-neon-pink" />
          <span className="text-sm font-medium text-white/90">Premium Embroidered Streetwear</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Wear Your
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            Anime Aura
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Express your inner otaku with premium custom embroidered hoodies. 
          From iconic characters to minimalist designs, find your perfect anime aesthetic.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/shop">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300"
              data-testid="button-shop-hoodies"
            >
              SHOP HOODIES
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/shop?category=Custom+Name">
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-lg px-8 py-6 rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 backdrop-blur-sm"
              data-testid="button-create-style"
            >
              CREATE YOUR STYLE
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">50K+</div>
            <div className="text-sm text-white/60">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">100%</div>
            <div className="text-sm text-white/60">Premium Cotton</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-white mb-1">48H</div>
            <div className="text-sm text-white/60">Fast Shipping</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
