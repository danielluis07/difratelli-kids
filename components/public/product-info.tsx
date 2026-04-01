"use client";

import { useMemo, useState } from "react";
import {
  RulerIcon,
  ShirtIcon,
  TruckIcon,
  ShieldCheckIcon,
  PackageIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/hooks/use-cart";
import type { Product, SizeLabel } from "@/lib/mock-data";
import { fabrics as allFabrics } from "@/lib/mock-data";
import { cn, centsToReais } from "@/lib/utils";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState<SizeLabel | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCart();

  const hasDiscount = !!product.compareAtPriceInCents;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.compareAtPriceInCents! - product.priceInCents) /
          product.compareAtPriceInCents!) *
          100,
      )
    : 0;

  // Get available fabrics for the selected size
  const availableFabrics = useMemo(() => {
    if (!selectedSize) return product.fabrics;
    return [
      ...new Set(
        product.variants
          .filter((v) => v.size === selectedSize && v.stock > 0)
          .map((v) => v.fabric),
      ),
    ];
  }, [selectedSize, product.variants, product.fabrics]);

  // Get available sizes for the selected fabric
  const availableSizes = useMemo(() => {
    if (!selectedFabric) return product.sizes;
    return product.variants
      .filter((v) => v.fabric === selectedFabric && v.stock > 0)
      .map((v) => v.size);
  }, [selectedFabric, product.variants, product.sizes]);

  // Get current variant stock
  const currentVariant = useMemo(() => {
    if (!selectedSize || !selectedFabric) return null;
    return product.variants.find(
      (v) => v.size === selectedSize && v.fabric === selectedFabric,
    );
  }, [selectedSize, selectedFabric, product.variants]);

  const getFabricName = (slug: string) => {
    return allFabrics.find((f) => f.slug === slug)?.name ?? slug;
  };

  const effectiveQuantity = currentVariant
    ? Math.min(quantity, currentVariant.stock)
    : quantity;

  const handleSizeSelect = (size: SizeLabel) => {
    setSelectedSize(size);
    // Reset fabric if not available for this size
    if (selectedFabric && !product.variants.some(
      (v) => v.size === size && v.fabric === selectedFabric && v.stock > 0,
    )) {
      setSelectedFabric(null);
    }
  };

  const handleFabricSelect = (fabric: string) => {
    setSelectedFabric(fabric);
    // Reset size if not available for this fabric
    if (selectedSize && !product.variants.some(
      (v) => v.fabric === fabric && v.size === selectedSize && v.stock > 0,
    )) {
      setSelectedSize(null);
    }
  };

  const handleAddToCart = () => {
    if (!currentVariant) {
      return;
    }

    addToCart({
      product,
      variant: currentVariant,
      quantity: effectiveQuantity,
    });
  };

  const selectionHint = !selectedSize && !selectedFabric
    ? "Selecione o tamanho e o tecido para continuar"
    : !selectedSize
      ? "Selecione o tamanho para continuar"
      : !selectedFabric
        ? "Selecione o tecido para continuar"
        : null;

  return (
    <div className="flex flex-col">
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {product.isNew && (
          <Badge className="border border-white/30 bg-primary/90 text-primary-foreground">
            Novo
          </Badge>
        )}
        {hasDiscount && (
          <Badge className="border border-white/30 bg-accent/90 text-accent-foreground">
            -{discountPercent}% OFF
          </Badge>
        )}
      </div>

      {/* Name */}
      <h1 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {product.name}
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {centsToReais(product.priceInCents)}
        </span>
        {hasDiscount && (
          <span className="text-base text-muted-foreground line-through sm:text-lg">
            {centsToReais(product.compareAtPriceInCents!)}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {product.description}
      </p>

      <div className="mt-7 h-px bg-border/70" />

      {/* Size selector */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <RulerIcon className="size-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">
            Tamanho
          </span>
          {selectedSize && (
            <span className="text-sm text-muted-foreground">
              — {selectedSize} anos
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((size) => {
            const isAvailable = availableSizes.includes(size);
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeSelect(size)}
                disabled={!isAvailable}
                className={cn(
                  "flex h-10 w-12 items-center justify-center rounded-xl border-2 text-sm font-semibold transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : isAvailable
                      ? "border-border bg-background text-foreground hover:border-primary/50"
                      : "border-border/40 bg-muted/50 text-muted-foreground/40 line-through",
                )}>
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fabric selector */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <ShirtIcon className="size-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">
            Tecido
          </span>
          {selectedFabric && (
            <span className="text-sm text-muted-foreground">
              — {getFabricName(selectedFabric)}
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.fabrics.map((fabric) => {
            const isAvailable = availableFabrics.includes(fabric);
            const isSelected = selectedFabric === fabric;
            return (
              <button
                key={fabric}
                type="button"
                onClick={() => handleFabricSelect(fabric)}
                disabled={!isAvailable}
                className={cn(
                  "flex h-10 items-center justify-center rounded-xl border-2 px-4 text-sm font-medium transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : isAvailable
                      ? "border-border bg-background text-foreground hover:border-primary/50"
                      : "border-border/40 bg-muted/50 text-muted-foreground/40",
                )}>
                {getFabricName(fabric)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stock indicator */}
      {currentVariant && (
        <div className="mt-4">
          <span
            className={cn(
              "text-xs font-medium",
              currentVariant.stock <= 3
                ? "text-destructive"
                : "text-emerald-600",
            )}>
            {currentVariant.stock <= 3
              ? `Apenas ${currentVariant.stock} em estoque!`
              : `${currentVariant.stock} unidades em estoque`}
          </span>
        </div>
      )}

      <div className="mt-7 h-px bg-border/70" />

      {/* Quantity and Add to cart */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-11 w-fit items-center rounded-xl border border-border">
          <button
            type="button"
            onClick={() =>
              setQuantity((q) =>
                Math.max(
                  1,
                  (currentVariant ? Math.min(q, currentVariant.stock) : q) - 1,
                ),
              )
            }
            className="flex h-full w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            disabled={effectiveQuantity <= 1}>
            <MinusIcon className="size-4" />
          </button>
          <span className="flex w-10 items-center justify-center text-sm font-semibold">
            {effectiveQuantity}
          </span>
          <button
            type="button"
            onClick={() =>
              setQuantity((q) =>
                Math.min(
                  currentVariant?.stock ?? 10,
                  (currentVariant ? Math.min(q, currentVariant.stock) : q) + 1,
                ),
              )
            }
            className="flex h-full w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            disabled={
              !currentVariant || effectiveQuantity >= currentVariant.stock
            }>
            <PlusIcon className="size-4" />
          </button>
        </div>

        <Button
          type="button"
          size="pill-lg"
          className="w-full sm:flex-1"
          disabled={!currentVariant}
          onClick={handleAddToCart}>
          <ShoppingCartIcon data-icon="inline-start" />
          Adicionar ao carrinho
        </Button>
      </div>

      {selectionHint && (
        <p className="mt-2 text-xs text-muted-foreground">
          {selectionHint}
        </p>
      )}

      <div className="mt-7 h-px bg-border/70" />

      {/* Trust badges */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-muted/30 px-3.5 py-3">
          <TruckIcon className="size-5 shrink-0 text-primary" />
          <div>
            <span className="text-xs font-semibold text-foreground">
              Frete grátis
            </span>
            <p className="text-[0.65rem] leading-tight text-muted-foreground">
              Acima de R$ 199
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-muted/30 px-3.5 py-3">
          <ShieldCheckIcon className="size-5 shrink-0 text-primary" />
          <div>
            <span className="text-xs font-semibold text-foreground">
              Compra segura
            </span>
            <p className="text-[0.65rem] leading-tight text-muted-foreground">
              Dados protegidos
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-muted/30 px-3.5 py-3">
          <PackageIcon className="size-5 shrink-0 text-primary" />
          <div>
            <span className="text-xs font-semibold text-foreground">
              Troca fácil
            </span>
            <p className="text-[0.65rem] leading-tight text-muted-foreground">
              Até 30 dias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
