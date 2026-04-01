import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { ProductsCarousel } from "@/components/public/products-carousel";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/mock-data";

const bestSellers = products.slice(0, 5);

export const BestSellers = () => {
  return (
    <section
      id="mais-vendidos"
      className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-18 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
              Mais Vendidos
            </span>

            <h2 className="mt-4 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Os queridinhos de quem já comprou.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
              Peças aprovadas por muitas famílias: caimento confortável, toque
              macio e acabamento premium para acompanhar cada aventura.
            </p>
          </div>

          <Button
            asChild
            variant="storefront-secondary"
            size="pill-sm"
            className="w-fit">
            <Link href="/products">
              Ver mais vendidos
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <div className="mt-10">
          <ProductsCarousel products={bestSellers} />
        </div>
      </div>
    </section>
  );
};
