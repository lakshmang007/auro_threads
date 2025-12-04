import { useState } from "react";
import ProductFilters from "../ProductFilters";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function ProductFiltersExample() {
  const [category, setCategory] = useState("All");
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  return (
    <ThemeProvider>
      <div className="w-72">
        <ProductFilters
          selectedCategory={category}
          selectedSizes={sizes}
          selectedColors={colors}
          onCategoryChange={setCategory}
          onSizeChange={setSizes}
          onColorChange={setColors}
          onClearFilters={() => {
            setCategory("All");
            setSizes([]);
            setColors([]);
          }}
        />
      </div>
    </ThemeProvider>
  );
}
