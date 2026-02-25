import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  like(): void {
    this.product.likes++;
    console.log('LIKE', this.product.name, this.product.likes);
  }

  onDelete(): void {
    console.log('DELETE click', this.product.id);
    this.deleteProduct.emit(this.product.id);
  }

  shareWhatsApp(): void {
    const text = encodeURIComponent(`Смотри товар на Kaspi: ${this.product.name}\n${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  stars(): string {
    const full = Math.round(this.product.rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }
}