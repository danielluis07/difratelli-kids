import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/images/logo.png";

const shopLinks = [
  { label: "Jeans", href: "/jeans" },
  { label: "Saias", href: "/skirts" },
  { label: "Jaquetas", href: "/jackets" },
  { label: "Shorts", href: "/shorts" },
  { label: "Colecoes", href: "/collections" },
];

const companyLinks = [
  { label: "Sobre", href: "/about" },
  { label: "Novidades", href: "/new-arrivals" },
  { label: "Mais Vendidos", href: "/best-sellers" },
  { label: "Contato", href: "/contact" },
];

const supportLinks = [
  { label: "Perguntas Frequentes", href: "/faq" },
  { label: "Entrega", href: "/shipping" },
  { label: "Trocas e Devolucoes", href: "/returns" },
  { label: "Guia de Tamanhos", href: "/size-guide" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

const footerGroups = [
  { title: "Loja", links: shopLinks },
  { title: "Empresa", links: companyLinks },
  { title: "Suporte", links: supportLinks },
  { title: "Social", links: socialLinks },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-border/75 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-card)_84%,var(--color-background)_16%)_0%,var(--color-background)_100%)] text-foreground lg:mt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/65 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-radial-[120%_100%_at_50%_-15%] from-primary/14 via-accent/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div className="lg:pr-8">
            <Link
              href="/"
              aria-label="Pagina inicial da Di Fratelli Kids"
              className="group inline-flex items-center gap-3">
              <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_18px_32px_-28px_color-mix(in_oklab,var(--color-foreground)_60%,transparent)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <Image
                  src={logoImage}
                  alt="Di Fratelli Kids"
                  sizes="48px"
                  className="size-9 object-contain"
                />
              </span>

              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-[0.06em] uppercase">
                  Di Fratelli
                </span>
                <span className="mt-1 text-[0.68rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  Denim Infantil Premium
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-foreground/74">
              Criado para brincar, explorar e viver momentos especiais. Denim
              infantil premium com conforto macio, acabamento impecavel e estilo
              atemporal.
            </p>

            <div className="mt-6 rounded-2xl border border-border/70 bg-card/70 p-4 backdrop-blur-sm">
              <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Atendimento
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-foreground/78">
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:support@difratellikids.com"
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground">
                    support@difratellikids.com
                  </a>
                </p>
                <p>Telefone: +55 (11) 4002-2024</p>
                <p>Seg-Sex, 9h-18h</p>
              </div>
            </div>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-[0.72rem] font-semibold tracking-[0.14em] text-foreground/88 uppercase">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-foreground/72 transition-colors duration-200 hover:text-foreground">
                      <span className="h-px w-0 bg-primary/70 transition-all duration-250 group-hover:w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 border-t border-border/70 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-[0.8rem]">
            <p>
              Copyright {currentYear} Di Fratelli Kids. Todos os direitos
              reservados.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-foreground/90">
                Politica de Privacidade
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-foreground/90">
                Termos de Uso
              </Link>
              <span>Feito no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
