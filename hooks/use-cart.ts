"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Product, ProductVariant, SizeLabel } from "@/lib/mock-data";

const CART_STORAGE_KEY = "difratelli-kids-cart";

export interface CartItem {
  id: string;
  productId: string;
  productSlug: string;
  productName: string;
  image: string;
  priceInCents: number;
  compareAtPriceInCents?: number;
  variantId: string;
  size: SizeLabel;
  fabric: string;
  quantity: number;
  stock: number;
}

interface AddToCartInput {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  hasHydrated: boolean;
  addItem: (input: AddToCartInput) => void;
  removeItem: (itemId: string) => void;
  setItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setCartOpen: (open: boolean) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
}

const getCartItemId = (productId: string, variantId: string) =>
  `${productId}:${variantId}`;

const clampQuantity = (quantity: number, stock: number) => {
  if (stock <= 0) {
    return 0;
  }

  return Math.max(1, Math.min(quantity, stock));
};

const buildCartItem = ({
  product,
  variant,
  quantity,
}: AddToCartInput): CartItem => ({
  id: getCartItemId(product.id, variant.id),
  productId: product.id,
  productSlug: product.slug,
  productName: product.name,
  image: product.images[0],
  priceInCents: product.priceInCents,
  compareAtPriceInCents: product.compareAtPriceInCents,
  variantId: variant.id,
  size: variant.size,
  fabric: variant.fabric,
  quantity,
  stock: variant.stock,
});

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isCartOpen: false,
      hasHydrated: false,
      addItem: ({ product, variant, quantity }) =>
        set((state) => {
          const itemId = getCartItemId(product.id, variant.id);
          const requestedQuantity = clampQuantity(quantity, variant.stock);

          if (requestedQuantity === 0) {
            return state;
          }

          const existingItem = state.items.find((item) => item.id === itemId);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      stock: variant.stock,
                      quantity: clampQuantity(
                        item.quantity + requestedQuantity,
                        variant.stock,
                      ),
                    }
                  : item,
              ),
              isCartOpen: true,
            };
          }

          return {
            items: [
              ...state.items,
              buildCartItem({
                product,
                variant,
                quantity: requestedQuantity,
              }),
            ],
            isCartOpen: true,
          };
        }),
      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      setItemQuantity: (itemId, quantity) =>
        set((state) => {
          const currentItem = state.items.find((item) => item.id === itemId);

          if (!currentItem) {
            return state;
          }

          const nextQuantity = clampQuantity(quantity, currentItem.stock);

          if (nextQuantity === 0) {
            return {
              items: state.items.filter((item) => item.id !== itemId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity: nextQuantity } : item,
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      setCartOpen: (open) => set({ isCartOpen: open }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: CART_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export const useCartItems = () => useCartStore((state) => state.items);

export const useCartHasHydrated = () =>
  useCartStore((state) => state.hasHydrated);

export const useCartItemCount = () =>
  useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );

export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.items.reduce(
      (subtotal, item) => subtotal + item.priceInCents * item.quantity,
      0,
    ),
  );

export const useCartOpen = () => useCartStore((state) => state.isCartOpen);

export const useSetCartOpen = () =>
  useCartStore((state) => state.setCartOpen);

export const useOpenCart = () => useCartStore((state) => state.openCart);

export const useAddToCart = () => useCartStore((state) => state.addItem);

export const useRemoveFromCart = () =>
  useCartStore((state) => state.removeItem);

export const useSetCartItemQuantity = () =>
  useCartStore((state) => state.setItemQuantity);

export const useClearCart = () => useCartStore((state) => state.clearCart);
