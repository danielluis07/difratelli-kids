import { PackageSearchIcon } from "lucide-react";
import { ProductCard } from "@/components/public/product-card";
import type { Product } from "@/lib/mock-data";

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 sm:py-28">
        <div className="flex size-20 items-center justify-center rounded-2xl border border-border/50 bg-muted/30">
          <PackageSearchIcon className="size-9 text-muted-foreground/40" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground/80">
          Nenhum produto encontrado
        </h3>
        <p className="mt-2 max-w-xs text-center text-sm text-muted-foreground/70">
          Tente ajustar seus filtros ou buscar por outro termo.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
