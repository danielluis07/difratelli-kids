import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative overflow-hidden pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-24">
      <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-primary/9 blur-3xl" />
      <div className="pointer-events-none absolute right-2 bottom-8 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-card)_88%,var(--color-background)_12%)_0%,var(--color-card)_100%)] p-6 shadow-[0_38px_90px_-56px_color-mix(in_oklab,var(--color-foreground)_52%,transparent)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="pointer-events-none absolute -right-14 -bottom-14 h-44 w-44 rounded-full border border-primary/10" />

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="mt-4 text-3xl leading-none font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                Receba novidades com a mesma atencao dedicada a cada peça.
              </h2>

              <p className="mt-4 max-w-[56ch] text-sm leading-6 text-foreground/72 sm:text-base sm:leading-7">
                Assine para acompanhar lancamentos, selecoes sazonais e
                curadorias exclusivas em denim infantil premium.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <form
                className="flex h-full flex-col justify-between gap-4 rounded-[1.5rem] border border-border/75 bg-background/70 p-4 backdrop-blur-sm sm:p-5"
                action="#"
                method="post">
                <div>
                  <label
                    htmlFor="newsletter-email"
                    className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Seu melhor e-mail
                  </label>

                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <Input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="voce@email.com"
                      required
                      className="h-10 rounded-full border-border/80 bg-card px-4 text-sm sm:flex-1"
                    />

                    <Button
                      type="submit"
                      className="h-10 rounded-full px-5 text-sm font-semibold">
                      Assinar
                      <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                  </div>
                </div>

                <p className="text-xs leading-5 text-muted-foreground sm:text-[0.8rem]">
                  Novos drops, releituras sazonais e vantagens exclusivas para
                  assinantes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
