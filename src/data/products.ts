export type Product = {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  mas_vendidos: boolean;
};

export const PRODUCTS: Product[] = [
  { id: 2, nombre: "HAMBURGUESAS BURGY X 3", precio: 45, categoria: "ALMACEN", mas_vendidos: false },
  { id: 3, nombre: "QUESO RALLADO SUELTO 40G", precio: 45, categoria: "FIAMBRERIA", mas_vendidos: false },
  { id: 24, nombre: "CERVEZA PATRICIA 1 L", precio: 180, categoria: "BEBIDAS ALCOHOLICAS", mas_vendidos: true },
  { id: 40, nombre: "CROQUETAS DE PAPA", precio: 45, categoria: "ROTISERIA", mas_vendidos: true },
  // … LOS 200 QUE TENÉS → PEGÁ EL RESTO ACA
];
