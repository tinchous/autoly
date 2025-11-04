import { create } from "zustand";

type CartItem = { id: number; nombre: string; precio: number; qty: number };

export const useCart = create((set) => ({
  items: [],
  add: (product: any) => set((state: any) => {
    const exists = state.items.find((i: any) => i.id === product.id);
    if (exists) return { items: state.items.map((i: any) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i) };
    return { items: [...state.items, { ...product, qty: 1 }] };
  }),
  remove: (id: number) => set((state: any) => ({
    items: state.items.flatMap((i: any) => i.id === id && i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : i.id === id ? [] : [i])
  })),
  updateQty: (id: number, qty: number) => set((state: any) => ({
    items: qty <= 0 ? state.items.filter((i: any) => i.id !== id) : state.items.map((i: any) => i.id === id ? { ...i, qty } : i)
  })),
  clear: () => set({ items: [] }),
  total: () => set((state: any) => state.items.reduce((t: number, i: any) => t + i.precio * i.qty, 0)),
}));
