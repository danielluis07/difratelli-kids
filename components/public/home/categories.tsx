import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { categories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const categoriesData = [
  {
    slug: "shorts",
    cta: "Descobrir",
    eyebrow: "Denim com movimento",
    className: "lg:col-span-7 before:bg-accent/10",
    imageClassName: "object-cover object-[center_24%]",
    glowClassName: "bg-accent/20",
    badgeClassName: "bg-card/78 text-foreground",
    overlayClassName:
      "from-background/95 via-background/42 via-24% to-background/12",
  },
  {
    slug: "jaquetas",
    cta: "Explorar",
    eyebrow: "Camadas quentinhas",
    className:
      "lg:col-span-5 lg:min-h-[30rem] xl:min-h-[34rem] before:bg-accent/12",
    imageClassName: "object-cover object-center",
    glowClassName: "bg-accent/25",
    badgeClassName: "bg-accent/18 text-foreground",
    overlayClassName:
      "from-background/96 via-background/38 via-32% to-background/12",
  },
  {
    slug: "bermudas",
    cta: "Ver selecao",
    eyebrow: "Leveza para brincar",
    className:
      "lg:col-span-5 lg:min-h-[34rem] xl:min-h-[38rem] before:bg-primary/12",
    imageClassName: "object-cover object-center",
    glowClassName: "bg-primary/20",
    badgeClassName: "bg-card/78 text-foreground",
    overlayClassName:
      "from-background/95 via-background/46 via-32% to-background/16",
  },
  {
    slug: "calcas",
    cta: "Compre agora",
    eyebrow: "Favoritos do dia a dia",
    className:
      "lg:col-span-7 lg:min-h-[34rem] xl:min-h-[38rem] before:bg-primary/10",
    imageClassName: "object-cover object-[center_30%]",
    glowClassName: "bg-primary/24",
    badgeClassName: "bg-primary/14 text-foreground",
    overlayClassName:
      "from-background/95 via-background/32 via-28% to-background/10",
  },
] as const;

const defaultCategoryCardMeta = categoriesData[0];

export const Categories = () => {
  return (
    <section
      id="categorias"
      className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
              Categorias em destaque
            </span>

            <h2 className="mt-4 max-w-[12ch] text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Jeans pensados para cada momento da infância.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
            Escolha entre peças essenciais, camadas aconchegantes e modelos
            leves para brincar, passear e viver a rotina com conforto premium.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {categories.map((category) => {
            const item =
              categoriesData.find((item) => item.slug === category.slug) ??
              defaultCategoryCardMeta;

            return (
              <article
                key={category.id}
                className={cn(
                  "group relative isolate flex min-h-92 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_80px_-42px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] transition-transform duration-300 hover:-translate-y-1",
                  "before:absolute before:inset-x-0 before:top-0 before:h-px before:content-['']",
                  item.className,
                )}>
                <Image
                  src={category.image}
                  alt={`${category.name} em denim infantil`}
                  fill
                  sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                  className={cn(
                    "scale-[1.01] transition-transform duration-500 group-hover:scale-[1.05]",
                    item.imageClassName,
                  )}
                />

                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-t",
                    item.overlayClassName,
                  )}
                />
                <div
                  className={cn(
                    "absolute -right-10 top-5 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125",
                    item.glowClassName,
                  )}
                />

                <div className="relative z-10 flex w-full flex-col justify-between p-5 sm:p-6">
                  <div>
                    <span
                      className={cn(
                        "inline-flex rounded-full border border-white/35 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] uppercase backdrop-blur-md",
                        item.badgeClassName,
                      )}>
                      {item.eyebrow}
                    </span>
                  </div>

                  <div className="max-w-sm">
                    <h3 className="mt-2 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-[2.2rem]">
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-[30ch] text-sm leading-6 text-foreground/76 sm:text-[0.96rem]">
                      {category.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/84 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_30px_-20px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] backdrop-blur-md transition-all duration-250 group-hover:border-primary/35 group-hover:bg-card">
                      {item.cta}
                      <ArrowRightIcon className="size-4 transition-transform duration-250 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
