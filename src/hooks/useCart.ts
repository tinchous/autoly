import { create } from "zustand";

type Product = {
  id: number;
  nombre: string;
  precio: number;
};

type CartItem = Product & { qty: number };

type CartStore = {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  total: number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,

  add: (product) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === product.id);
      const newItems = exists
        ? state.items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state.items, { ...product, qty: 1 }];
      return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
    }),

  remove: (id) =>
    set((state) => {
      const newItems = state.items
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
      return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
    }),

  updateQty: (id, qty) =>
    set((state) => {
      const newItems = qty <= 0
        ? state.items.filter((i) => i.id !== id)
        : state.items.map((i) => (i.id === id ? { ...i, qty } : i));
      return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
    }),

  clear: () => set({ items: [], total: 0 }),
}));
