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
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover object-[72%_center]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-background via-background/92 via-40% to-background/12 lg:via-background/42 sm:to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background/45 via-transparent to-transparent" />
        <div className="absolute -left-16 top-6 size-56 rounded-full bg-accent/25 blur-3xl sm:size-72" />

        <div className="relative z-10 flex min-h-140 items-end sm:min-h-155 lg:min-h-160 lg:items-center">
          <div className="w-full max-w-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14 xl:px-20">
            <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted-foreground backdrop-blur-sm">
              Colecao denim infantil
            </span>

            <h1 className="mt-5 max-w-[11ch] text-4xl leading-none font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              O jeans que acompanha cada descoberta.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-foreground/78 sm:text-base sm:leading-7">
              Calças, bermudas, saias e casacos com toque macio, modelagem
              confortável e acabamento elegante para vestir a infância com
              estilo todos os dias.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/20">
                <Link href="#colecao">Ver coleção</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-11 rounded-full border border-border/70 bg-card/85 px-6 text-sm font-semibold text-foreground backdrop-blur-sm hover:bg-card">
                <Link href="#novidades">Explorar novidades</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
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
