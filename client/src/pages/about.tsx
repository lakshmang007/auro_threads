import { ArrowLeft, Sparkles, Heart, Zap, Globe } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 mb-4">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium text-neon-purple">OUR STORY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                About Aura Threads
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Where anime passion meets premium streetwear. We create wearable art 
              for the modern otaku community.
            </p>
          </div>

          <div className="prose prose-invert max-w-none mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aura Threads was born from a simple idea: anime fans deserve premium 
                  quality streetwear that expresses their passion. We blend Japanese pop 
                  culture with contemporary fashion, creating unique embroidered pieces 
                  that stand out in any crowd.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Each hoodie is crafted with 400gsm heavyweight cotton and features 
                  hand-finished embroidery details. We don't just print designs - we 
                  embroider stories that last.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-neon-pink" />
                  </div>
                  <h3 className="font-bold mb-2">Made with Love</h3>
                  <p className="text-sm text-muted-foreground">
                    Every stitch is placed with care by our skilled artisans
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="font-bold mb-2">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Only the finest materials for lasting comfort and style
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h3 className="font-bold mb-2">Global Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Shipping worldwide to anime fans everywhere
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to express your anime aura?</h2>
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold px-8 rounded-full"
                data-testid="button-shop-now"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
