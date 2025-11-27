// Arquivo: product.model.ts (Interface de Modelo)
export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  installments: string;
  image: string;
  category: string;
  isFreeShipping: boolean;
  rating: number;
}