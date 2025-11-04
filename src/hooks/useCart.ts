import { create } from "zustand";

type Product = { id: number; nombre: string; precio: number };
type CartItem = Product & { qty: number };

type CartStore = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  total: number;
  getQty: (id: number) => number;   // ← LA LÍNEA MÁGICA
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,

  add: (p) => set((s) => {
    const exists = s.items.find(i => i.id === p.id);
    const newItems = exists
      ? s.items.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      : [...s.items, { ...p, qty: 1 }];
    return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
  }),

  remove: (id) => set((s) => {
    const newItems = s.items
      .map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
      .filter(i => i.qty > 0);
    return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
  }),

  updateQty: (id, qty) => set((s) => {
    const newItems = qty <= 0
      ? s.items.filter(i => i.id !== id)
      : s.items.map(i => i.id === id ? { ...i, qty } : i);
    return { items: newItems, total: newItems.reduce((t, i) => t + i.precio * i.qty, 0) };
  }),

  clear: () => set({ items: [], total: 0 }),

  getQty: (id) => get().items.find(i => i.id === id)?.qty || 0,   // ← IMPLEMENTACIÓN
}));
