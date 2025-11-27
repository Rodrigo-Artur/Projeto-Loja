// --- Arquivo: Componente de Cartão de Produto (Visual) ---
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe], // Importa módulos necessários para este componente
  template: `
    <div class="bg-white rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-200 h-full flex flex-col cursor-pointer group">
      <!-- Seção da Imagem -->
      <div class="relative mb-4 flex justify-center items-center h-48">
        <img [src]="product.image" [alt]="product.title" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300">
        
        <!-- Badge de Frete Grátis -->
        <div *ngIf="product.isFreeShipping" class="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-r-full flex items-center gap-1 shadow-sm">
          <i class="fas fa-truck"></i> Frete Grátis
        </div>
      </div>

      <!-- Seção de Detalhes -->
      <div class="flex-1">
        <h3 class="text-sm text-gray-800 font-medium line-clamp-3 mb-2 group-hover:text-blue-600 transition-colors">
          {{ product.title }}
        </h3>
        
        <!-- Estrelas de Avaliação -->
        <div class="flex items-center gap-1 text-xs text-yellow-400 mb-2">
          <i class="fas fa-star"></i>
          <span class="text-gray-500 font-bold ml-1">{{ product.rating }}</span>
        </div>

        <!-- Preços -->
        <div class="mt-2">
          <div *ngIf="product.oldPrice">
            <span class="text-xs text-gray-400 line-through block">{{ product.oldPrice | currency:'BRL' }}</span>
          </div>
          <div class="text-xl font-bold text-gray-900 leading-tight">
            {{ product.price | currency:'BRL' }}
          </div>
          <div class="text-xs text-gray-500 mt-1">
            à vista no Pix
          </div>
          <div class="text-xs text-blue-600 font-medium mt-1">
            {{ product.installments }}
          </div>
        </div>
      </div>

      <!-- Botão de Ação -->
      <button class="mt-4 w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-green-700 active:scale-95 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100">
        Adicionar à Sacola
      </button>
    </div>
  `
})
export class ProductCardComponent {
  // Recebe os dados do produto como input obrigatório
  @Input({ required: true }) product!: Product;
}