import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/images/hero.png";

const highlights = ["Toque macio", "Caimento leve", "Acabamento premium"];

export const Hero = () => {
  return (
    <section className="pb-10 pt-0 lg:pb-14">
      <div className="relative isolate overflow-hidden border-b border-border/70 bg-card shadow-[0_35px_120px_-45px_color-mix(in_oklab,var(--color-primary)_28%,transparent)]">
        <Image
          src={heroImage}
          alt="Crianças vestindo a coleção premium de jeans infantil"
          priority
          fill
          sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, 100vw"
          className="object-cover object-[76%_center] sm:object-[74%_center] lg:object-[72%_center] 2xl:object-[68%_center]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-background via-background/96 via-42% to-background/28 sm:to-background/12 lg:via-background/64 lg:to-transparent xl:via-background/48" />
        <div className="absolute inset-0 bg-linear-to-t from-background/45 via-transparent to-transparent" />
        <div className="absolute -left-16 top-6 size-56 rounded-full bg-accent/25 blur-3xl sm:size-72" />

        <div className="relative z-10 mx-auto flex min-h-136 w-full max-w-7xl items-end px-4 sm:min-h-156 sm:px-6 lg:min-h-168 lg:items-center lg:px-8 xl:min-h-176">
          <div className="w-full max-w-lg py-8 sm:max-w-140 sm:py-10 lg:max-w-xl lg:py-14 xl:max-w-140">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground backdrop-blur-sm">
              Colecao denim infantil
            </span>

            <h1 className="mt-5 max-w-[12ch] text-balance text-[2.65rem] leading-none font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.7rem]">
              O jeans que acompanha cada descoberta.
            </h1>

            <p className="mt-5 max-w-136 text-pretty text-sm leading-6 text-foreground/78 sm:text-base sm:leading-7">
              Calças, bermudas, saias e casacos com toque macio, modelagem
              confortável e acabamento elegante para vestir a infância com
              estilo todos os dias.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="pill-lg"
                className="w-full shadow-lg shadow-primary/20 sm:w-auto">
                <Link href="/products">Ver coleção</Link>
              </Button>

              <Button
                asChild
                size="pill-lg"
                variant="storefront-secondary"
                className="w-full sm:w-auto">
                <Link href="#novidades">Explorar novidades</Link>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8">
              {highlights.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-border/65 bg-card/70 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur-sm sm:text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
