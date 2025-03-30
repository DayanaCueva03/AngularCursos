import { Injectable } from '@angular/core';


export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  // Añadir un producto al carrito
  addToCart(productId: number, quantity: number): void {
    const product = this.getProductById(productId); // Obtén el producto desde algún lugar
    if (!product) {
      console.error('Producto no encontrado.');
      return;
    }

    const existingItem = this.cartItems.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity; // Incrementa la cantidad si ya está en el carrito
    } else {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }

  // Obtener todos los items del carrito
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Limpiar el carrito
  clearCart(): void {
    this.cartItems = [];
  }

  // Simulación de obtención de producto por ID (debería venir del ProductService)
  private getProductById(id: number): any {
    const products = [
      { id: 1, name: 'Curso de Programación', price: 300 },
      { id: 2, name: 'Curso de Diseño', price: 250 },
      { id: 3, name: 'Curso de Estética', price: 400 }
    ];
    return products.find(p => p.id === id);
  }
}