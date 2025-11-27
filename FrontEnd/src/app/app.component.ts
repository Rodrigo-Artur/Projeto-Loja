// Arquivo: app.component.ts (Componente Raiz)
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
// Removemos RouterOutlet temporariamente se não houver rotas configuradas
import { HeaderComponent } from './layout/header/header.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductService } from './core/services/product.service';
import { Product } from './core/models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductCardComponent],
  templateUrl: './app.component.html';
})
export class AppComponent {
  productService = inject(ProductService);

  // Estado
  products = signal<Product[]>([]);
  cartCount = signal<number>(0);
  isLoading = signal<boolean>(true);
  currentFilter = signal<string>('');
  
  // Computed para filtragem em tempo real
  filteredProducts = computed(() => {
    const term = this.currentFilter().toLowerCase();
    return this.products().filter(p => 
      p.title.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term)
    );
  });

  isFiltering = computed(() => this.currentFilter() !== '');

  constructor() {
    this.loadData();
  }

  async loadData() {
    this.isLoading.set(true);
    try {
      const data = await this.productService.getProducts();
      this.products.set(data);
    } finally {
      this.isLoading.set(false);
    }
  }

  handleSearch(term: string) {
    this.currentFilter.set(term);
  }

  clearFilter() {
    this.currentFilter.set('');
  }

  addToCart(product: Product) {
    this.cartCount.update(v => v + 1);
    console.log(`Produto ${product.title} adicionado ao carrinho.`);
  }
}