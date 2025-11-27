// --- Arquivo: Componente de Cabeçalho/Header (Layout) ---
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Topo Institucional (Links úteis) -->
    <div class="bg-gray-100 text-xs text-gray-500 py-1 px-4 hidden md:block">
      <div class="container mx-auto flex justify-between">
        <div class="flex gap-4">
          <span class="cursor-pointer hover:underline">Nossas lojas</span>
          <span class="cursor-pointer hover:underline">Tenha sua loja</span>
        </div>
        <div class="flex gap-4">
          <span class="cursor-pointer hover:underline">Regulamentos</span>
          <span class="cursor-pointer hover:underline">Acessibilidade</span>
        </div>
      </div>
    </div>

    <!-- Header Principal (Busca e Logo) -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-500 text-white sticky top-0 z-50 shadow-md">
      <div class="container mx-auto px-4 py-3 md:py-4">
        <div class="flex items-center justify-between gap-4 md:gap-8">
          
          <!-- Logo e Menu Hambúrguer (Mobile) -->
          <div class="flex items-center gap-3">
            <button class="md:hidden text-white text-2xl">
              <i class="fas fa-bars"></i>
            </button>
            <h1 class="font-bold text-2xl tracking-tighter cursor-pointer flex items-center gap-1 group/logo select-none">
              <div class="relative flex items-center">
                <span class="text-white">Lojinha</span>
                <span class="bg-yellow-400 text-blue-700 px-2 py-0.5 rounded transform -skew-x-6 text-sm md:text-lg font-black shadow-sm ml-1 group-hover/logo:rotate-3 transition-transform">App</span>
              </div>
            </h1>
          </div>

          <!-- Barra de Busca Central (Desktop) -->
          <div class="hidden md:flex flex-1 max-w-2xl relative group">
            <input 
              type="text" 
              placeholder="O que você procura na Lojinha hoje?" 
              [(ngModel)]="searchText"
              (keyup.enter)="onSearch()"
              class="w-full py-2.5 px-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 shadow-inner border-0"
            />
            <button (click)="onSearch()" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
              <i class="fas fa-search text-lg"></i>
            </button>
          </div>

          <!-- Área do Usuário e Carrinho -->
          <div class="flex items-center gap-6">
            <div class="hidden md:block text-sm text-center cursor-pointer hover:bg-blue-600/50 p-1 rounded transition">
              <p class="font-normal text-xs opacity-90">Bem-vindo :)</p>
              <p class="font-bold text-xs">Entre ou cadastre-se</p>
            </div>
            
            <div class="cursor-pointer relative hover:opacity-80 transition" title="Favoritos">
               <i class="fas fa-heart text-2xl"></i>
            </div>

            <div class="cursor-pointer relative hover:opacity-80 transition flex items-center gap-2 border border-white/30 p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40" title="Carrinho">
               <i class="fas fa-shopping-bag text-2xl"></i>
               <span class="hidden md:block text-sm font-bold">Cesta</span>
               <!-- Badge de Contador do Carrinho -->
               <span *ngIf="cartCount() > 0" class="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-bounce-short">
                 {{ cartCount() }}
               </span>
            </div>
          </div>
        </div>

        <!-- Barra de Busca (Mobile) -->
        <div class="md:hidden mt-3 relative">
           <input 
             type="text" 
             placeholder="Procure por código, nome, marca..." 
             [(ngModel)]="searchText"
             (keyup.enter)="onSearch()"
             class="w-full py-2 px-4 rounded text-sm text-gray-800 border-0 shadow-inner"
           >
           <i class="fas fa-search absolute right-3 top-2.5 text-gray-400" (click)="onSearch()"></i>
        </div>
      </div>

      <!-- Barra de Categorias -->
      <nav class="bg-blue-700 text-white py-2 hidden md:block border-t border-blue-400/30">
        <div class="container mx-auto px-4 flex justify-between text-sm font-medium overflow-x-auto no-scrollbar">
          <a href="#" class="hover:underline whitespace-nowrap px-2">Todos os departamentos</a>
          <a href="#" class="hover:underline whitespace-nowrap px-2">Celulares</a>
          <a href="#" class="hover:underline whitespace-nowrap px-2">Móveis</a>
          <a href="#" class="hover:underline whitespace-nowrap px-2">Eletrodomésticos</a>
          <a href="#" class="hover:underline whitespace-nowrap px-2">TV e Vídeo</a>
          <a href="#" class="hover:underline whitespace-nowrap px-2">Informática</a>
          <a href="#" class="hover:text-yellow-300 whitespace-nowrap px-2 font-bold">Ofertas da Lojinha</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  searchText = '';
  // Sinais (Signals) para input reativo
  @Input() cartCount = signal(0);
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }
}