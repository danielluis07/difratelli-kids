"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="flex size-20 items-center justify-center rounded-full border border-border/70 bg-muted/40">
        <ShoppingBagIcon className="size-8 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-xl font-semibold text-foreground">
        Sua sacola está vazia
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Adicione produtos à sua sacola antes de prosseguir para o checkout.
      </p>
      <Button asChild size="pill" className="mt-6">
        <Link href="/products">Explorar produtos</Link>
      </Button>
    </div>
  );
}
