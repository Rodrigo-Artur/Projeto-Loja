// Arquivo: header.component.ts (Componente Standalone)
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Topo Institucional -->
    <div class="bg-gray-100 text-[11px] text-gray-500 py-1 px-4 hidden md:block border-b border-gray-200">
      <div class="container mx-auto flex justify-between">
        <div class="flex gap-4">
          <a href="#" class="hover:underline hover:text-magalu-blue">Nossas lojas</a>
          <a href="#" class="hover:underline hover:text-magalu-blue">Tenha sua loja</a>
        </div>
        <div class="flex gap-4">
          <a href="#" class="hover:underline hover:text-magalu-blue"><i class="fas fa-wheelchair"></i> Acessibilidade</a>
          <a href="#" class="hover:underline hover:text-magalu-blue">Ajuda</a>
        </div>
      </div>
    </div>

    <!-- Header Principal -->
    <header class="bg-gradient-to-r from-blue-700 to-magalu-blue text-white sticky top-0 z-50 shadow-lg">
      <div class="container mx-auto px-4 py-3 md:py-5">
        <div class="flex items-center justify-between gap-4 md:gap-8">
          
          <!-- Logo -->
          <div class="flex items-center gap-4">
            <button class="md:hidden text-white text-xl"><i class="fas fa-bars"></i></button>
            <h1 class="font-black text-2xl md:text-3xl tracking-tighter cursor-pointer flex items-center select-none group">
              <span>Lojinha</span>
              <div class="w-3 h-3 bg-magalu-yellow rounded-full ml-1 mt-3 animate-bounce"></div>
            </h1>
          </div>

          <!-- Barra de Busca -->
          <div class="hidden md:flex flex-1 max-w-3xl relative">
            <input 
              type="text" 
              placeholder="Procure por código, nome, marca..." 
              [(ngModel)]="searchText"
              (keyup.enter)="onSearch()"
              class="w-full py-3 pl-5 pr-12 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-magalu-yellow shadow-inner text-sm"
            />
            <button (click)="onSearch()" class="absolute right-2 top-1/2 -translate-y-1/2 text-magalu-blue hover:bg-gray-100 p-2 rounded-full transition-colors">
              <i class="fas fa-search text-lg"></i>
            </button>
          </div>

          <!-- Ícones e Menu -->
          <div class="flex items-center gap-6">
            <!-- Usuário -->
            <div class="hidden md:flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded transition">
              <i class="far fa-user-circle text-2xl opacity-80"></i>
              <div class="text-xs leading-tight">
                <p>Bem-vindo :)</p>
                <p class="font-bold">Entre ou cadastre-se</p>
              </div>
            </div>
            
            <!-- Favoritos -->
            <div class="cursor-pointer hover:opacity-80 transition relative group">
               <i class="far fa-heart text-2xl"></i>
               <span class="opacity-0 group-hover:opacity-100 absolute -bottom-8 -left-2 text-[10px] bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap transition-opacity">Favoritos</span>
            </div>

            <!-- Carrinho -->
            <div class="cursor-pointer hover:opacity-80 transition flex items-center gap-2 border border-white/20 p-2 rounded-lg bg-white/5 hover:bg-white/10">
               <div class="relative">
                 <i class="fas fa-shopping-basket text-xl"></i>
                 <span *ngIf="cartCount() > 0" class="absolute -top-2 -right-2 bg-magalu-yellow text-blue-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                   {{ cartCount() }}
                 </span>
               </div>
               <span class="hidden md:block text-sm font-bold">Cesta</span>
            </div>
          </div>
        </div>

        <!-- Busca Mobile -->
        <div class="md:hidden mt-3 relative">
           <input 
             type="text" 
             placeholder="Procure por produtos..." 
             [(ngModel)]="searchText"
             (keyup.enter)="onSearch()"
             class="w-full py-2.5 pl-4 pr-10 rounded text-sm text-gray-800 border-0 shadow-inner"
           >
           <i class="fas fa-search absolute right-3 top-3 text-gray-400" (click)="onSearch()"></i>
        </div>
      </div>
      
      <!-- Categorias -->
      <nav class="bg-magalu-darkBlue text-white py-2 hidden md:block border-t border-white/10">
        <div class="container mx-auto px-4 flex justify-between text-xs font-bold uppercase tracking-wide overflow-x-auto no-scrollbar">
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">Todos os departamentos</a>
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">Celulares</a>
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">Móveis</a>
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">Eletrodomésticos</a>
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">TV e Vídeo</a>
          <a href="#" class="hover:text-magalu-yellow whitespace-nowrap px-3 py-1 transition">Informática</a>
          <a href="#" class="text-magalu-yellow hover:text-white whitespace-nowrap px-3 py-1 transition bg-white/10 rounded">Ofertas do Dia</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  searchText = '';
  @Input() cartCount = signal(0);
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }
}