import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/public/product-card";
import { products } from "@/lib/mock-data";

const featuredProducts = products.filter((p) => p.isFeatured);

export const FeaturedProducts = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
              Em destaque
            </span>

            <h2 className="mt-4 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Favoritos da estação.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
              Peças escolhidas a dedo com conforto, estilo e a qualidade que
              acompanha cada aventura.
            </p>
          </div>

          <Button
            asChild
            variant="storefront-secondary"
            size="pill-sm"
            className="w-fit">
            <Link href="/products">
              Ver todos
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
