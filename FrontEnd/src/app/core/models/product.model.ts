// --- Arquivo: Modelo de Dados (Interface TypeScript) ---
export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number; // Preço "De" (opcional)
  installments: string;
  image: string;
  category: string;
  isFreeShipping: boolean;
  rating: number;
}