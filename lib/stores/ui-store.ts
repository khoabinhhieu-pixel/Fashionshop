import { create } from "zustand";

type UIState = {
  cartOpen: boolean;
  searchOpen: boolean;
  chatOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openChat: () => void;
  closeChat: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  cartOpen: false,
  searchOpen: false,
  chatOpen: false,
  openCart: () => set({ cartOpen: true, searchOpen: false, chatOpen: false }),
  closeCart: () => set({ cartOpen: false }),
  openSearch: () => set({ searchOpen: true, cartOpen: false, chatOpen: false }),
  closeSearch: () => set({ searchOpen: false }),
  openChat: () => set({ chatOpen: true, cartOpen: false, searchOpen: false }),
  closeChat: () => set({ chatOpen: false }),
}));
