import { Link } from "wouter";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiTiktok, SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-neon-pink" />
              <span className="font-bold text-xl bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                AURA THREADS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Premium custom embroidered anime hoodies for the modern otaku. Express your anime aura.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-neon-pink" data-testid="link-instagram">
                <SiInstagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-cyan" data-testid="link-twitter">
                <FaXTwitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-pink" data-testid="link-tiktok">
                <SiTiktok className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-purple" data-testid="link-discord">
                <SiDiscord className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">SHOP</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-neon-pink transition-colors text-sm">
                  All Hoodies
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Anime+Characters" className="text-muted-foreground hover:text-neon-pink transition-colors text-sm">
                  Anime Characters
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Minimal+Line+Art" className="text-muted-foreground hover:text-neon-pink transition-colors text-sm">
                  Minimal Line Art
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Custom+Name" className="text-muted-foreground hover:text-neon-pink transition-colors text-sm">
                  Custom Name
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Streetwear+Text" className="text-muted-foreground hover:text-neon-pink transition-colors text-sm">
                  Streetwear Text
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">SUPPORT</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">NEWSLETTER</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get early access to new drops and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-secondary/50 border-border/50"
                data-testid="input-newsletter"
              />
              <Button className="bg-neon-pink hover:bg-neon-pink/90" data-testid="button-subscribe">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-purple" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <span>+91 7411467931</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Aura Threads. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
