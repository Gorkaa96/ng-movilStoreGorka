import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ProductData implements InMemoryDbService {

  createDb() {
    let products = [
      {
        "id": 1,
        "name": "Mi 10 Lite",
        "company": "Xiaomi",
        "price": 324.03,
        "inches": 6.57,
        "colors": ["White", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/30/300205/1390-xiaomi-mi-10-lite-5g-6-64gb-blanco-libre.jpg"
      },
      {
        "id": 2,
        "name": "K51S",
        "company": "LG",
        "price": 148.99,
        "inches": 6.55,
        "colors": ["Blue", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/29/298691/lg-k51s-3-64gb-dual-sim-titan-libre.jpg"
      },
      {
        "id": 3,
        "name": "Galaxi S21",
        "company": "Samsung",
        "price": 1309,
        "inches": 6.8,
        "colors": ["White", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/34/348326/1623-samsung-galaxy-s21-ultra-5g-256gb-plata-libre.jpg"
      },
      {
        "id": 4,
        "name": "iPhone 12",
        "company": "Apple",
        "price": 959,
        "inches": 6.1,
        "colors": ["Red", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/32/328931/1319-apple-iphone-12-128gb-product-rojo-libre.jpg"
      },
      {
        "id": 5,
        "name": "Poco X3",
        "company": "Xiaomi",
        "price": 229,
        "inches": 6.67,
        "colors": ["Grey", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/32/321341/1317-xiaomi-poco-x3-nfc-6-128gb-gris-sombra-libre.jpg"
      },
      {
        "id": 6,
        "name": "7 Pro",
        "company": "Realme",
        "price": 299,
        "inches": 6.4,
        "colors": ["Blue", "Black"],
        "image": "https://thumb.pccomponentes.com/w-530-530/articles/32/323047/1210-realme-7-pro-8-128gb-azul-libre.jpg"
      },
    ];
    return { products: products };
  }
}
