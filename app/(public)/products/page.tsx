import { Suspense } from "react";
import { ProductsWrapper } from "@/components/public/products/products-wrapper";

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-18">
        <div className="relative">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
              Catálogo
            </span>

            <h1 className="mt-4 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Nossos Produtos
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
              Explore nossa coleção completa de jeans infantis com conforto,
              durabilidade e estilo para todas as estações.
            </p>
          </div>

          <div className="mt-10">
            <Suspense>
              <ProductsWrapper />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
