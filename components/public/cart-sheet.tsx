"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  Trash2Icon,
} from "lucide-react";

import {
  useCartHasHydrated,
  useCartItemCount,
  useCartItems,
  useCartOpen,
  useCartSubtotal,
  useClearCart,
  useRemoveFromCart,
  useSetCartItemQuantity,
  useSetCartOpen,
} from "@/hooks/use-cart";
import { fabrics } from "@/lib/mock-data";
import { centsToReais } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const getFabricName = (slug: string) =>
  fabrics.find((fabric) => fabric.slug === slug)?.name ?? slug;

export const CartSheet = () => {
  const items = useCartItems();
  const itemCount = useCartItemCount();
  const subtotal = useCartSubtotal();
  const isCartOpen = useCartOpen();
  const hasHydrated = useCartHasHydrated();
  const setCartOpen = useSetCartOpen();
  const setItemQuantity = useSetCartItemQuantity();
  const removeItem = useRemoveFromCart();
  const clearCart = useClearCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full max-w-md gap-0 p-0 sm:max-w-lg">
        <SheetHeader className="border-b border-border/65 px-5 py-4">
          <SheetTitle>Sacola</SheetTitle>
          <SheetDescription>
            {hasHydrated
              ? itemCount > 0
                ? `${itemCount} item${itemCount > 1 ? "s" : ""} na sua sacola`
                : "Sua sacola está vazia no momento."
              : "Carregando sua sacola."}
          </SheetDescription>
        </SheetHeader>

        {!hasHydrated ? (
          <div className="flex flex-1 items-center justify-center px-5 py-12 text-sm text-muted-foreground">
            Carregando itens...
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-border/70 bg-muted/40">
              <ShoppingBagIcon className="size-6 text-muted-foreground" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              Sua sacola está vazia
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Adicione produtos com tamanho e tecido selecionados para montar
              seu pedido.
            </p>
            <SheetClose asChild>
              <Button asChild size="pill" className="mt-6">
                <Link href="/products">Explorar produtos</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-2xl border border-border/70 bg-card/80 p-3">
                    <div className="flex gap-3">
                      <SheetClose asChild>
                        <Link
                          href={`/products/${item.productSlug}`}
                          className="relative block aspect-square size-22 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted/40">
                          <Image
                            src={item.image}
                            alt={item.productName}
                            fill
                            sizes="88px"
                            className="object-cover"
                          />
                        </Link>
                      </SheetClose>

                      <div className="min-w-0 flex-1">
                        <div className="min-w-0">
                          <SheetClose asChild>
                            <Link
                              href={`/products/${item.productSlug}`}
                              className="line-clamp-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                              {item.productName}
                            </Link>
                          </SheetClose>
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            <Badge variant="secondary">
                              Tamanho {item.size}
                            </Badge>
                            <Badge variant="secondary">
                              {getFabricName(item.fabric)}
                            </Badge>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-base font-semibold tracking-tight text-foreground">
                              {centsToReais(item.priceInCents)}
                            </p>
                            {item.compareAtPriceInCents && (
                              <p className="text-xs text-muted-foreground line-through">
                                {centsToReais(item.compareAtPriceInCents)}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex h-10 items-center rounded-full border border-border bg-background/80 px-1">
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                className="rounded-full"
                                onClick={() =>
                                  setItemQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                aria-label={`Diminuir quantidade de ${item.productName}`}>
                                <MinusIcon />
                              </Button>
                              <span className="min-w-7 text-center text-sm font-semibold text-foreground">
                                {item.quantity}
                              </span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon-sm"
                                className="rounded-full"
                                onClick={() =>
                                  setItemQuantity(item.id, item.quantity + 1)
                                }
                                disabled={item.quantity >= item.stock}
                                aria-label={`Aumentar quantidade de ${item.productName}`}>
                                <PlusIcon />
                              </Button>
                            </div>

                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-foreground"
                              onClick={() => removeItem(item.id)}>
                              <Trash2Icon data-icon="inline-start" />
                              Remover
                            </Button>
                          </div>
                        </div>

                        <p className="mt-3 text-xs text-muted-foreground">
                          Estoque disponível para esta variação: {item.stock}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-border/65 bg-background/95 px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Subtotal</p>
                  <p className="text-lg font-semibold tracking-tight text-foreground">
                    {centsToReais(subtotal)}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="pill-sm"
                  onClick={clearCart}>
                  Limpar sacola
                </Button>
              </div>

              <SheetClose asChild>
                <Button asChild size="pill" className="w-full">
                  <Link href="/products">Continuar comprando</Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
