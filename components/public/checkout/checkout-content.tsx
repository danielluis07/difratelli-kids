"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { useCartHasHydrated, useCartItems } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EmptyCart } from "./empty-cart";
import { OrderItems } from "./order-items";
import { ShippingForm } from "./shipping-form";
import { PaymentForm } from "./payment-form";
import { CheckoutSummary } from "./checkout-summary";

export function CheckoutContent() {
  const items = useCartItems();
  const hasHydrated = useCartHasHydrated();
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  if (!hasHydrated) {
    return (
      <div className="flex items-center justify-center py-20 text-sm text-muted-foreground">
        Carregando...
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <Button asChild variant="storefront-ghost" size="sm" className="mb-6">
        <Link href="/products">
          <ArrowLeftIcon data-icon="inline-start" />
          Continuar comprando
        </Link>
      </Button>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left column — Forms */}
        <div className="min-w-0 flex-1 space-y-6">
          <OrderItems />

          <Separator />

          <ShippingForm
            shippingMethod={shippingMethod}
            onShippingMethodChange={setShippingMethod}
          />

          <Separator />

          <PaymentForm
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
        </div>

        {/* Right column — Summary (sticky on desktop) */}
        <div className="w-full shrink-0 lg:w-85">
          <div className="lg:sticky lg:top-24">
            <CheckoutSummary shippingMethod={shippingMethod} />
          </div>
        </div>
      </div>
    </div>
  );
}
