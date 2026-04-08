import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item'; // <-- если файл product-item.ts

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  view: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.view = [...this.products];
    }
  }

  handleDelete(productId: number): void {
    console.log('PARENT got delete', productId);
    this.view = this.view.filter(p => p.id !== productId);
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }
}