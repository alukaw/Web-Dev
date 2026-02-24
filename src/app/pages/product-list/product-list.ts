import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  // активная картинка 
  activeImage: Record<number, string> = {};

  getMainImage(p: Product): string {
    return this.activeImage[p.id] ?? p.image;
  }

  setMainImage(p: Product, img: string) {
    this.activeImage[p.id] = img;
  }

  // рейтинг
  stars(rating: number): { filled: boolean }[] {
    const rounded = Math.round(rating); // округление
    return Array.from({ length: 5 }, (_, i) => ({ filled: i < rounded }));
  }

  whatsappShareLink(p: Product): string {
    const text = `Check out this product: ${p.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareLink(p: Product): string {
    return `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  }
}