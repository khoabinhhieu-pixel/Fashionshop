import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  tone: number;
  size: string;
  image?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, qty: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, qty = 1) => {
        const items = get().items;
        const existing = items.find(
          (i) => i.id === item.id && i.size === item.size,
        );
        if (existing) {
          set({
            items: items.map((i) =>
              i.id === item.id && i.size === item.size
                ? { ...i, quantity: i.quantity + qty }
                : i,
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: qty }] });
        }
      },
      removeItem: (id, size) =>
        set({
          items: get().items.filter((i) => !(i.id === id && i.size === size)),
        }),
      updateQuantity: (id, size, qty) => {
        if (qty <= 0) {
          set({
            items: get().items.filter((i) => !(i.id === id && i.size === size)),
          });
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === id && i.size === size ? { ...i, quantity: qty } : i,
          ),
        });
      },
      clear: () => set({ items: [] }),
    }),
    { name: "fashion-shop-cart" },
  ),
);

export function useCartCount(): number {
  return useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
}

export function useCartTotal(): number {
  return useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
}
