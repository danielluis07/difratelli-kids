"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserRoundIcon,
} from "lucide-react";

import logoImage from "@/public/images/logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { label: "Inicio", href: "/" },
  { label: "Jeans", href: "/jeans" },
  { label: "Saias", href: "/skirts" },
  { label: "Jaquetas", href: "/jackets" },
  { label: "Shorts", href: "/shorts" },
  { label: "Colecoes", href: "/collections" },
];

const actionItems = [
  { label: "Buscar", href: "/search", icon: SearchIcon },
  { label: "Conta", href: "/account", icon: UserRoundIcon },
  { label: "Favoritos", href: "/wishlist", icon: HeartIcon },
  { label: "Sacola", href: "/bag", icon: ShoppingBagIcon },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 shadow-[0_18px_40px_-34px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)] backdrop-blur-lg supports-backdrop-filter:bg-background/70">
      <div className="border-b border-border/60 bg-linear-to-r from-primary/12 via-background to-accent/18">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 text-center text-[0.68rem] font-semibold tracking-[0.18em] text-foreground/72 uppercase sm:px-6 lg:px-8">
          Nova colecao denim no ar | Frete gratis acima de R$199
        </div>
      </div>

      <div className="mx-auto grid h-17 max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:h-18 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 self-center"
          aria-label="Pagina inicial da Di Fratelli Kids">
          <span className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <Image
              src={logoImage}
              alt="Di Fratelli Kids"
              priority
              sizes="44px"
              className="size-9 object-contain"
            />
          </span>

          <span className="hidden min-[390px]:flex min-[390px]:flex-col min-[390px]:leading-none">
            <span className="text-sm font-semibold tracking-[0.06em] text-foreground uppercase">
              Di Fratelli
            </span>
            <span className="mt-1 text-[0.66rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Denim Infantil
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center lg:flex"
          aria-label="Navegacao principal">
          <ul className="flex items-center gap-1 rounded-full border border-border/70 bg-card/85 p-1 shadow-[0_10px_30px_-24px_color-mix(in_oklab,var(--color-foreground)_40%,transparent)] backdrop-blur-sm">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.09em] text-foreground/72 uppercase transition-all duration-200 hover:bg-primary/12 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            {actionItems.map(({ label, href, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="icon-sm"
                className="rounded-full border border-transparent text-foreground/76 transition-colors hover:border-border/65 hover:bg-card hover:text-foreground">
                <Link href={href} aria-label={label}>
                  <Icon />
                  <span className="sr-only">{label}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:hidden">
            <Button
              asChild
              variant="ghost"
              size="icon-sm"
              className="rounded-full border border-transparent text-foreground/76 hover:border-border/65 hover:bg-card hover:text-foreground">
              <Link href="/search" aria-label="Buscar">
                <SearchIcon />
                <span className="sr-only">Buscar</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon-sm"
              className="rounded-full border border-transparent text-foreground/76 hover:border-border/65 hover:bg-card hover:text-foreground">
              <Link href="/bag" aria-label="Sacola">
                <ShoppingBagIcon />
                <span className="sr-only">Sacola</span>
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full border-border/75 bg-card/80 text-foreground hover:bg-card">
                  <MenuIcon />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
                <SheetHeader className="border-b border-border/65 px-5 py-4">
                  <SheetTitle>Di Fratelli Kids</SheetTitle>
                  <SheetDescription>
                    Explore peças premium em denim para cada aventura.
                  </SheetDescription>
                </SheetHeader>

                <nav
                  className="flex flex-col px-5 py-5"
                  aria-label="Navegacao mobile">
                  <ul className="flex flex-col gap-1">
                    {navigationItems.map((item) => (
                      <li key={item.label}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="flex h-11 items-center rounded-xl border border-transparent px-3 text-sm font-semibold tracking-[0.08em] text-foreground/84 uppercase transition-colors hover:border-border/65 hover:bg-muted/50">
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-border/65 pt-5">
                    <ul className="flex flex-col gap-1.5">
                      {actionItems.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                          <SheetClose asChild>
                            <Link
                              href={href}
                              className="flex h-11 items-center gap-3 rounded-xl border border-transparent px-3 text-sm font-medium text-foreground/84 transition-colors hover:border-border/65 hover:bg-muted/50">
                              <Icon />
                              {label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
