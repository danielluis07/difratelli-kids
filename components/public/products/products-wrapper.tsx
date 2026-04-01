"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useURLSearch } from "@/hooks/use-url-search";
import { products as allProducts, categories } from "@/lib/mock-data";
import type { Product } from "@/lib/mock-data";

import { ProductsToolbar } from "./products-toolbar";
import { ActiveFilters } from "./active-filters";
import { ProductsGrid } from "./products-grid";

function sortProducts(products: Product[], sortBy: string): Product[] {
  switch (sortBy) {
    case "price-asc":
      return [...products].sort((a, b) => a.priceInCents - b.priceInCents);
    case "price-desc":
      return [...products].sort((a, b) => b.priceInCents - a.priceInCents);
    case "newest":
      return [...products].sort(
        (a, b) => Number(b.isNew) - Number(a.isNew),
      );
    default:
      return products;
  }
}

export const ProductsWrapper = () => {
  const searchParams = useSearchParams();
  const { searchInput, setSearchInput, isPending } = useURLSearch();

  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort") || "default",
  );

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    const searchTerm = searchInput.toLowerCase().trim();
    if (searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.category.toLowerCase().includes(searchTerm),
      );
    }

    if (category && category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    return sortProducts(result, sortBy);
  }, [searchInput, category, sortBy]);

  const activeFilters = useMemo(() => {
    const filters: { key: string; label: string; value: string }[] = [];

    if (searchInput.trim()) {
      filters.push({ key: "search", label: "Busca", value: searchInput.trim() });
    }

    if (category && category !== "all") {
      const cat = categories.find((c) => c.slug === category);
      filters.push({
        key: "category",
        label: "Categoria",
        value: cat?.name || category,
      });
    }

    if (sortBy && sortBy !== "default") {
      const sortLabels: Record<string, string> = {
        "price-asc": "Menor preço",
        "price-desc": "Maior preço",
        newest: "Mais recentes",
      };
      filters.push({
        key: "sort",
        label: "Ordenação",
        value: sortLabels[sortBy] || sortBy,
      });
    }

    return filters;
  }, [searchInput, category, sortBy]);

  const handleRemoveFilter = (key: string) => {
    if (key === "search") setSearchInput("");
    if (key === "category") setCategory("all");
    if (key === "sort") setSortBy("default");
  };

  const handleClearAll = () => {
    setSearchInput("");
    setCategory("all");
    setSortBy("default");
  };

  return (
    <div className="flex flex-col gap-6">
      <ProductsToolbar
        searchInput={searchInput}
        onSearchChange={setSearchInput}
        isSearchPending={isPending}
        category={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        resultsCount={filteredProducts.length}
      />

      <ActiveFilters
        filters={activeFilters}
        onRemove={handleRemoveFilter}
        onClearAll={handleClearAll}
      />

      <ProductsGrid products={filteredProducts} />
    </div>
  );
};
