"use client";

import { ShieldCheckIcon, PackageIcon, RotateCcwIcon } from "lucide-react";
import { toast } from "sonner";

import { useCartItemCount, useCartSubtotal } from "@/hooks/use-cart";
import { centsToReais } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SHIPPING_COSTS: Record<string, number> = {
  standard: 1490,
  express: 2990,
  free: 0,
};

const SHIPPING_LABELS: Record<string, string> = {
  standard: "Padrão (5-7 dias)",
  express: "Expresso (2-3 dias)",
  free: "Grátis (10-15 dias)",
};

interface CheckoutSummaryProps {
  shippingMethod: string;
}

export function CheckoutSummary({ shippingMethod }: CheckoutSummaryProps) {
  const itemCount = useCartItemCount();
  const subtotal = useCartSubtotal();

  const shippingCost = SHIPPING_COSTS[shippingMethod] ?? 0;
  const total = subtotal + shippingCost;

  const handleConfirm = () => {
    toast.info(
      "Este é apenas um projeto de demonstração! Obrigado por explorar a Difratelli Kids",
    );
  };

  return (
    <div className="rounded-2xl border border-border/70 bg-card/80 p-5">
      <h2 className="text-lg font-semibold text-foreground">
        Resumo do Pedido
      </h2>

      <div className="mt-4 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "itens"})
          </span>
          <span className="font-medium text-foreground">
            {centsToReais(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Frete — {SHIPPING_LABELS[shippingMethod]}
          </span>
          <span className="font-medium text-foreground">
            {shippingCost === 0 ? (
              <span className="text-green-600">Grátis</span>
            ) : (
              centsToReais(shippingCost)
            )}
          </span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-foreground">Total</span>
        <span className="text-xl font-bold tracking-tight text-foreground">
          {centsToReais(total)}
        </span>
      </div>

      <Button
        size="pill-lg"
        className="mt-5 w-full"
        onClick={handleConfirm}
        disabled={itemCount === 0}>
        Confirmar Pedido
      </Button>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <ShieldCheckIcon className="size-4 shrink-0" />
          <span>Pagamento 100% seguro</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <PackageIcon className="size-4 shrink-0" />
          <span>Envio rastreado para todo o Brasil</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <RotateCcwIcon className="size-4 shrink-0" />
          <span>Troca fácil em até 30 dias</span>
        </div>
      </div>
    </div>
  );
}
