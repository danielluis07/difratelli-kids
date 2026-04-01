import { CheckoutContent } from "@/components/public/checkout/checkout-content";

export default function CheckoutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Checkout
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Revise seu pedido e finalize a compra.
      </p>

      <div className="mt-8">
        <CheckoutContent />
      </div>
    </div>
  );
}
