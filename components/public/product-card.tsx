import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/mock-data";
import { cn, centsToReais } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const hasDiscount = !!product.compareAtPriceInCents;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.compareAtPriceInCents! - product.priceInCents) /
          product.compareAtPriceInCents!) *
          100,
      )
    : 0;

  return (
    <Link
      href={`/produto/${product.slug}`}
      className={cn("group flex h-full flex-col", className)}>
      <div className="relative isolate aspect-3/4 overflow-hidden rounded-2xl border border-border/70 bg-muted/40">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/20 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="border border-white/30 bg-primary/90 text-primary-foreground backdrop-blur-sm">
              Novo
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="border border-white/30 bg-accent/90 text-accent-foreground backdrop-blur-sm">
              -{discountPercent}%
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3.5">
        <h3 className="line-clamp-2 min-h-11 text-sm leading-snug font-medium text-foreground/90 transition-colors duration-200 group-hover:text-primary sm:text-[0.94rem]">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight text-foreground">
            {centsToReais(product.priceInCents)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              {centsToReais(product.compareAtPriceInCents!)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            Ver detalhes
          </Button>
        </div>
      </div>
    </Link>
  );
};
