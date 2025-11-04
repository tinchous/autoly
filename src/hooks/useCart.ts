import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  qty: number;
}

interface CartStore {
  items: CartItem[];
  add: (product: any) => void;
  remove: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
  getQty: (id: number) => number;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product) => {
        const { items } = get();
        const existing = items.find(item => item.id === product.id);
        
        if (existing) {
          set({
            items: items.map(item =>
              item.id === product.id 
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          });
        } else {
          set({ items: [...items, { ...product, qty: 1 }] });
        }
      },
      remove: (id) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== id) });
      },
      updateQty: (id, qty) => {
        const { items } = get();
        if (qty <= 0) {
          get().remove(id);
          return;
        }
        set({
          items: items.map(item =>
            item.id === id ? { ...item, qty } : item
          )
        });
      },
      clear: () => set({ items: [] }),
      getQty: (id) => get().items.find(item => item.id === id)?.qty || 0,
      get total() {
        return get().items.reduce((sum, item) => sum + (item.precio * item.qty), 0);
      }
    }),
    {
      name: 'autoly-cart',
      storage: createJSONStorage(() => {
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {}
        };
      }),
    }
  )
);
