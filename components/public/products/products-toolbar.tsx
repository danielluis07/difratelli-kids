"use client";

import { SearchIcon, Loader2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/mock-data";

interface ProductsToolbarProps {
  searchInput: string;
  onSearchChange: (value: string) => void;
  isSearchPending: boolean;
  category: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  resultsCount: number;
}

export const ProductsToolbar = ({
  searchInput,
  onSearchChange,
  isSearchPending,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  resultsCount,
}: ProductsToolbarProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60" />
          {isSearchPending ? (
            <Loader2Icon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-primary/60" />
          ) : null}
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchInput}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 rounded-xl pl-9 pr-9 ml-1"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger className="h-10 gap-2 rounded-xl border-border/70 bg-card/60 px-3.5 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/90">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.slug} value={cat.slug}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="h-10 gap-2 rounded-xl border-border/70 bg-card/60 px-3.5 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/90">
              <SelectValue placeholder="Ordenar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Relevância</SelectItem>
              <SelectItem value="price-asc">Menor preço</SelectItem>
              <SelectItem value="price-desc">Maior preço</SelectItem>
              <SelectItem value="newest">Mais recentes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-sm text-muted-foreground/70">
        {resultsCount === 0
          ? "Nenhum produto encontrado"
          : resultsCount === 1
            ? "1 produto encontrado"
            : `${resultsCount} produtos encontrados`}
      </p>
    </div>
  );
};
