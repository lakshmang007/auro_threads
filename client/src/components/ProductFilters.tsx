import { useState } from "react";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { categories, sizes, colorFilters } from "@/lib/mockData";

interface ProductFiltersProps {
  selectedCategory: string;
  selectedSizes: string[];
  selectedColors: string[];
  onCategoryChange: (category: string) => void;
  onSizeChange: (sizes: string[]) => void;
  onColorChange: (colors: string[]) => void;
  onClearFilters: () => void;
}

export default function ProductFilters({
  selectedCategory,
  selectedSizes,
  selectedColors,
  onCategoryChange,
  onSizeChange,
  onColorChange,
  onClearFilters,
}: ProductFiltersProps) {
  const [openSections, setOpenSections] = useState({
    category: true,
    size: true,
    color: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      onSizeChange(selectedSizes.filter((s) => s !== size));
    } else {
      onSizeChange([...selectedSizes, size]);
    }
  };

  const handleColorToggle = (color: string) => {
    if (selectedColors.includes(color)) {
      onColorChange(selectedColors.filter((c) => c !== color));
    } else {
      onColorChange([...selectedColors, color]);
    }
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="w-full text-neon-pink hover:text-neon-pink/80"
          data-testid="button-clear-filters"
        >
          <X className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      )}

      <Collapsible open={openSections.category} onOpenChange={() => toggleSection("category")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-bold text-sm">
          CATEGORY
          {openSections.category ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-neon-purple/20 text-neon-purple font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              data-testid={`filter-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category}
            </button>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.size} onOpenChange={() => toggleSection("size")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-bold text-sm">
          SIZE
          {openSections.size ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selectedSizes.includes(size)
                    ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
                data-testid={`filter-size-${size.toLowerCase()}`}
              >
                {size}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openSections.color} onOpenChange={() => toggleSection("color")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 font-bold text-sm">
          COLOR
          {openSections.color ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-3">
            {colorFilters.map((color) => (
              <div key={color.name} className="flex items-center gap-3">
                <Checkbox
                  id={`color-${color.name}`}
                  checked={selectedColors.includes(color.name)}
                  onCheckedChange={() => handleColorToggle(color.name)}
                  data-testid={`filter-color-${color.name.toLowerCase()}`}
                />
                <div
                  className="w-5 h-5 rounded-full border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                <Label
                  htmlFor={`color-${color.name}`}
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {color.name}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-6">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <Filter className="w-5 h-5 text-neon-purple" />
            Filters
          </h3>
          <FilterContent />
        </div>
      </div>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2" data-testid="button-mobile-filters">
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 w-5 h-5 rounded-full bg-neon-pink text-white text-xs flex items-center justify-center">
                  {(selectedCategory !== "All" ? 1 : 0) +
                    selectedSizes.length +
                    selectedColors.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-neon-purple" />
                Filters
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
