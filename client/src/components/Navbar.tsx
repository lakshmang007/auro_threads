import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingCart, Heart, User, Menu, X, Sun, Moon, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/contexts/AuthContext";

interface NavbarProps {
  onSearchChange?: (query: string) => void;
}

export default function Navbar({ onSearchChange }: NavbarProps) {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/shop", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-neon-pink group-hover:animate-pulse" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              AURA THREADS
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-medium tracking-wide ${
                    location === link.href
                      ? "text-neon-pink"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            {isAdmin && (
              <Link href="/admin">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-medium tracking-wide ${
                    location === "/admin"
                      ? "text-neon-cyan"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid="nav-link-admin"
                >
                  ADMIN
                </Button>
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center relative max-w-xs flex-1">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search hoodies..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-9 bg-secondary/50 border-border/50 focus:border-neon-purple"
              data-testid="input-search"
            />
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            <Link href="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
                data-testid="button-wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-neon-pink text-white"
                  >
                    {wishlistItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-muted-foreground hover:text-foreground"
                data-testid="button-cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-neon-cyan text-white"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2" data-testid="button-profile">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user?.name}</span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  data-testid="button-logout"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/login" className="hidden md:block">
                <Button variant="default" size="sm" data-testid="button-login">
                  Login
                </Button>
              </Link>
            )}

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search hoodies..."
                      value={searchQuery}
                      onChange={handleSearch}
                      className="pl-9"
                      data-testid="input-search-mobile"
                    />
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start font-medium ${
                            location === link.href ? "text-neon-pink" : ""
                          }`}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                    {isAdmin && (
                      <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start font-medium">
                          ADMIN
                        </Button>
                      </Link>
                    )}
                  </nav>

                  <div className="border-t border-border pt-4">
                    {isAuthenticated ? (
                      <div className="flex flex-col gap-2">
                        <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                          <Button variant="ghost" className="w-full justify-start gap-2">
                            <User className="w-4 h-4" />
                            {user?.name}
                          </Button>
                        </Link>
                        <Button variant="outline" onClick={logout} className="w-full">
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="default" className="w-full">
                          Login
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
