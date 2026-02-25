import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // простой автономный placeholder-картинки, чтобы UI работал без внешних CDN
  private readonly placeholder =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#eef2ff"/>
            <stop offset="1" stop-color="#fdf2f8"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx="24" fill="url(#g)"/>
        <circle cx="120" cy="120" r="54" fill="#dbeafe"/>
        <rect x="200" y="92" width="520" height="56" rx="16" fill="#e5e7eb"/>
        <rect x="80" y="220" width="640" height="36" rx="12" fill="#e5e7eb"/>
        <rect x="80" y="280" width="560" height="28" rx="12" fill="#e5e7eb"/>
        <rect x="80" y="332" width="480" height="28" rx="12" fill="#e5e7eb"/>
        <text x="80" y="420" font-size="22" fill="#6b7280" font-family="Arial">
          Online Store • Product Image
        </text>
      </svg>
    `);

  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private readonly products: Product[] = [
    // ============ Smartphones (5) ============
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 15 128Gb (черный)',
      description: 'Dynamic Island, отличная камера и автономность.',
      price: 420000,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
      likes: 0,
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Samsung Galaxy S24 5G 8/256 (желтый)',
      description: 'Флагман, AMOLED 120 Гц, защита IP68.',
      price: 399990,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hde/h25/84960806535198.png?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-zheltyi-116040955/',
      likes: 0,
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13 Pro 4G NFC 8/256 (черный)',
      description: 'AMOLED 120 Гц, хороший баланс цена/качество.',
      price: 139990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h6d/ha2/84950367436830.png?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-chernyi-115994614/',
      likes: 0,
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Google Pixel 8 8/128 (черный)',
      description: 'Чистый Android, отличная камера, OLED 120 Гц.',
      price: 299990,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcf/he9/84136091254814.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-chernyi-113692654/',
      likes: 0,
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Samsung Galaxy A55 5G 8/256 (сиреневый)',
      description: 'Super AMOLED, 120 Гц, отличный mid-range.',
      price: 199990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/',
      likes: 0,
    },

    // ============ Laptops (5) ============
    {
      id: 201,
      categoryId: 2,
      name: 'Apple MacBook Air 13 (2022) M2 8/256',
      description: 'Легкий, тихий, мощный для учебы и работы.',
      price: 549990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      likes: 0,
    },
    {
      id: 202,
      categoryId: 2,
      name: 'ASUS TUF Gaming F15 15.6" 16Gb 1Tb (FX507VI)',
      description: 'Игровой ноутбук, мощная видеокарта и охлаждение.',
      price: 799990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h55/85794792636446.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-16-gb-ssd-1000-gb-bez-os-fx507vi-hq108-90nr0fh7-m005v0-118582837/',
      likes: 0,
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Lenovo IdeaPad 3 15.6" 8Gb 512Gb (15ALC6)',
      description: 'Универсальный ноутбук для учебы/домашних задач.',
      price: 239990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h87/hfc/64342837919774.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-dos-15alc6-82ku002srk-106887883/',
      likes: 0,
    },
    {
      id: 204,
      categoryId: 2,
      name: 'HP Pavilion 15.6" 16Gb 512Gb Win 11 (15-eg2020ci)',
      description: 'IPS экран, подходит для работы и мультимедиа.',
      price: 329990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h2f/hdd/66793199796254.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eg2020ci-6g811ea-108001774/',
      likes: 0,
    },
    {
      id: 205,
      categoryId: 2,
      name: 'Acer Aspire 5 15.6" 16Gb 512Gb (A515-57G)',
      description: 'Надежный ноутбук для учебы/офиса.',
      price: 289990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hbb/h55/84179375718430.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-15-6-16-gb-ssd-512-gb-bez-os-a515-57g-nx-knzer-001-113816470/',
      likes: 0,
    },

    // ============ Headphones (5) ============
    {
      id: 301,
      categoryId: 3,
      name: 'Apple AirPods Pro 2nd generation',
      description: 'Шумоподавление и отличный звук, удобные для звонков.',
      price: 129990,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
      likes: 0,
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (черный)',
      description: 'Топовое ANC, комфорт, крутая детализация звука.',
      price: 199990,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
      likes: 0,
    },
    {
      id: 303,
      categoryId: 3,
      name: 'JBL Tune 510BT (черный)',
      description: 'Bluetooth 5.0, Pure Bass, до 40 часов работы.',
      price: 19990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/',
      likes: 0,
    },
    {
      id: 304,
      categoryId: 3,
      name: 'Marshall Major IV (коричневый)',
      description: 'Стиль, легендарный звук, долго держит заряд.',
      price: 69990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-korichnevyi-104024603/',
      likes: 0,
    },
    {
      id: 305,
      categoryId: 3,
      name: 'HyperX Cloud II (черно-красный)',
      description: 'Геймерская гарнитура, комфорт и хороший микрофон.',
      price: 49990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-cherno-krasnyi-4800107/',
      likes: 0,
    },

    // ============ Tablets (5) ============
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad 10.9 (2022) Wi-Fi 4/64 (серебристый)',
      description: 'Liquid Retina, A14, отличный для учебы и заметок.',
      price: 249990,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/64865317584926.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/',
      likes: 0,
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 11" 12/256 (графит)',
      description: 'Dynamic AMOLED, мощный Snapdragon, топ-планшет.',
      price: 499990,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/82782516477982.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaeskz-11-djuim-12-gb-256-gb-grafit-112504364/',
      likes: 0,
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Xiaomi Pad 6 11" 8/256 (голубой)',
      description: '11" дисплей, хорошая производительность и звук.',
      price: 199990,
      rating: 4.7,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h53/h7e/82746416398366.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-goluboi-112468565/',
      likes: 0,
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Lenovo Tab M11 11" 8/128 (серый)',
      description: 'Планшет для учебы, видео и базовых задач.',
      price: 119990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h18/h24/86676315570206.png?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m11-11-djuim-8-gb-128-gb-seryi-122010420/',
      likes: 0,
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Huawei MatePad 11.5 8/256 (серый)',
      description: 'Большой экран 11.5", удобно для конспектов и чтения.',
      price: 179990,
      rating: 4.6,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p56/pde/39458720.jpg?format=gallery-medium",
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-11-5-djuim-8-gb-256-gb-seryi-138881499/',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategoryId(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId).map(p => ({ ...p }));
  }
}