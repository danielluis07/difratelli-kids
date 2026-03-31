import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import winterImage from "@/public/images/seasons/winter.png";
import summerImage from "@/public/images/seasons/summer.png";

export const SeasonalCollections = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute -left-10 top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-24 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-border/70 bg-card/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase backdrop-blur-sm">
            Coleções sazonais
          </span>

          <h2 className="mt-4 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
            Vista cada estação com personalidade.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
            Peças que traduzem o espírito de cada época do ano com conforto,
            qualidade e o estilo que define a Difratelli.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Primary — Autumn / Winter */}
          <Link
            href="/colecoes/outono-inverno"
            className="group relative isolate flex min-h-112 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_80px_-42px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-128 lg:col-span-7 lg:min-h-144 xl:min-h-160">
            <Image
              src={winterImage}
              alt="Coleção Outono / Inverno — criança com jaqueta jeans em cenário de outono"
              fill
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 58vw, 100vw"
              className="scale-[1.01] object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/88 via-black/54 via-40% to-black/10" />
            <div className="absolute inset-0 bg-linear-to-t from-black/34 via-transparent to-transparent" />
            <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-white/12 blur-3xl transition-transform duration-500 group-hover:scale-125" />

            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                  Em destaque
                </span>
                <span className="inline-flex rounded-full border border-white/18 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-white/88 uppercase backdrop-blur-md">
                  2025
                </span>
              </div>

              <div className="max-w-md">
                <h3 className="text-3xl leading-none font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
                  Outono / Inverno
                </h3>
                <p className="mt-3 max-w-[36ch] text-sm leading-6 text-white/78 sm:text-[0.96rem]">
                  Camadas quentinhas, texturas ricas e o denim que protege e
                  acompanha as aventuras dos dias mais frios.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-[0_16px_34px_-20px_rgba(0,0,0,0.7)] transition-all duration-250 group-hover:translate-x-1 group-hover:bg-white/92">
                  Explorar coleção
                  <ArrowRightIcon className="size-4 transition-transform duration-250 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Secondary — Spring / Summer */}
          <Link
            href="/colecoes/primavera-verao"
            className="group relative isolate flex min-h-88 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_80px_-42px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-96 lg:col-span-5 lg:min-h-144 xl:min-h-160">
            <Image
              src={summerImage}
              alt="Coleção Primavera / Verão — criança com bermuda jeans em dia ensolarado"
              fill
              sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 42vw, 100vw"
              className="scale-[1.01] object-cover object-[18%_32%] sm:object-[20%_32%] lg:object-[24%_32%] xl:object-[26%_32%] transition-transform duration-500 group-hover:scale-[1.05]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-background/92 via-background/26 via-30% to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[55%] bg-linear-to-l from-background/48 via-background/12 to-transparent" />
            <div className="absolute right-8 top-7 h-28 w-28 rounded-full bg-white/22 blur-3xl transition-transform duration-500 group-hover:scale-125" />

            <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
              <div className="flex justify-start">
                <span className="inline-flex rounded-full border border-white/28 bg-card/62 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.2em] text-foreground uppercase backdrop-blur-md">
                  Em breve
                </span>
              </div>

              <div className="flex justify-end">
                <div className="max-w-sm rounded-[1.6rem] border border-white/35 bg-white/78 p-5 shadow-[0_26px_54px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/84 sm:p-6">
                  <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary/70 uppercase">
                    Sol, cor e movimento
                  </p>
                  <h3 className="mt-3 text-2xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-3xl lg:text-[2rem]">
                    Primavera / Verão
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-sm leading-6 text-foreground/76 sm:text-[0.96rem]">
                    Leveza, cor e liberdade para brincar sob o sol com estilo e
                    conforto.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/16 bg-background/88 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_12px_30px_-20px_color-mix(in_oklab,var(--color-primary)_50%,transparent)] transition-all duration-250 group-hover:border-primary/30 group-hover:bg-background">
                    Antecipar
                    <ArrowRightIcon className="size-4 transition-transform duration-250 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
