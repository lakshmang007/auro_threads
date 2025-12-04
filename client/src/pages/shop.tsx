import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { SlidersHorizontal, Grid3X3, LayoutGrid } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, sortOptions } from "@/lib/mockData";

export default function Shop() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [gridCols, setGridCols] = useState<2 | 3>(3);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }

    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c.name))
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSizes, selectedColors, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedSizes([]);
    setSelectedColors([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearchChange={setSearchQuery} />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-2">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Shop
            </span>{" "}
            All Hoodies
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters
            selectedCategory={selectedCategory}
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            onCategoryChange={setSelectedCategory}
            onSizeChange={setSelectedSizes}
            onColorChange={setSelectedColors}
            onClearFilters={handleClearFilters}
          />

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] bg-secondary/50" data-testid="select-sort">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="hidden md:flex items-center gap-1 border border-border rounded-md p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className={gridCols === 2 ? "bg-secondary" : ""}
                  onClick={() => setGridCols(2)}
                  data-testid="button-grid-2"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={gridCols === 3 ? "bg-secondary" : ""}
                  onClick={() => setGridCols(3)}
                  data-testid="button-grid-3"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No products found</p>
                <Button onClick={handleClearFilters} data-testid="button-clear-search">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={`grid gap-6 ${
                  gridCols === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
