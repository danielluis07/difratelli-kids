"use client";

import Image from "next/image";
import Link from "next/link";

import { useCartItems } from "@/hooks/use-cart";
import { fabrics } from "@/lib/mock-data";
import { centsToReais } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const getFabricName = (slug: string) =>
  fabrics.find((f) => f.slug === slug)?.name ?? slug;

export function OrderItems() {
  const items = useCartItems();

  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">
        Itens do Pedido ({items.length})
      </h2>

      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 rounded-xl border border-border/70 bg-card/60 p-3"
          >
            <Link
              href={`/products/${item.productSlug}`}
              className="relative block aspect-square size-20 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-muted/40"
            >
              <Image
                src={item.image}
                alt={item.productName}
                fill
                sizes="80px"
                className="object-cover"
              />
            </Link>

            <div className="min-w-0 flex-1">
              <Link
                href={`/products/${item.productSlug}`}
                className="line-clamp-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                {item.productName}
              </Link>

              <div className="mt-1 flex flex-wrap gap-1.5">
                <Badge variant="secondary">Tamanho {item.size}</Badge>
                <Badge variant="secondary">{getFabricName(item.fabric)}</Badge>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">
                  {centsToReais(item.priceInCents * item.quantity)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.quantity}x {centsToReais(item.priceInCents)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
