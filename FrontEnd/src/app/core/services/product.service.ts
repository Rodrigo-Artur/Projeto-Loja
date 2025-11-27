// --- Arquivo: Serviço de Produtos (Lógica de Dados) ---
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Mock de dados para simular o backend Spring Boot
  private productsDB: Product[] = [
    {
      id: 1,
      title: 'Smartphone Samsung Galaxy A54 5G 128GB',
      price: 1699.00,
      oldPrice: 2299.00,
      installments: '10x de R$ 169,90 sem juros',
      image: 'https://placehold.co/300x300/white/222?text=Galaxy+A54',
      category: 'Celulares',
      isFreeShipping: true,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Smart TV 50" 4K LED LG UHD ThinQ AI',
      price: 2399.90,
      installments: '10x de R$ 239,99 sem juros',
      image: 'https://placehold.co/300x300/white/222?text=Smart+TV',
      category: 'TV e Vídeo',
      isFreeShipping: true,
      rating: 4.5
    },
    {
      id: 3,
      title: 'Notebook Dell Inspiron 15 Intel Core i5 8GB',
      price: 3499.00,
      oldPrice: 4100.00,
      installments: '12x de R$ 291,58 sem juros',
      image: 'https://placehold.co/300x300/white/222?text=Notebook+Dell',
      category: 'Informática',
      isFreeShipping: false,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Fritadeira Elétrica Air Fryer Mondial 4L',
      price: 399.90,
      oldPrice: 599.90,
      installments: '4x de R$ 99,97 sem juros',
      image: 'https://placehold.co/300x300/white/222?text=Air+Fryer',
      category: 'Eletroportáteis',
      isFreeShipping: true,
      rating: 4.7
    },
    {
      id: 5,
      title: 'Sofá Retrátil e Reclinável 3 Lugares Suede',
      price: 1299.00,
      installments: '10x de R$ 129,90 sem juros',
      image: 'https://placehold.co/300x300/white/222?text=Sofá',
      category: 'Móveis',
      isFreeShipping: false,
      rating: 4.2
    }
  ];

  // Retorna uma Promise para simular uma requisição HTTP assíncrona
  getProducts(): Promise<Product[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.productsDB), 500); // Simula 500ms de delay de rede
    });
  }
}