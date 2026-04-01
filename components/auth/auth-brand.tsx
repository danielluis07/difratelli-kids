"use client";

import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/images/logo.png";

export const AuthBrand = () => {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
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

      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-[0.06em] text-foreground uppercase">
          Di Fratelli
        </span>
        <span className="mt-1 text-[0.66rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          Denim Infantil
        </span>
      </span>
    </Link>
  );
};
