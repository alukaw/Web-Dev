import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Online Store';

  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.productService.getProductsByCategoryId(this.selectedCategoryId);
  }

  get selectedCategoryName(): string {
    if (this.selectedCategoryId === null) return '';
    return this.categories.find(c => c.id === this.selectedCategoryId)?.name ?? '';
  }
}
