import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;

  constructor() {
    if (!this.isEnabled()) {
      this.setCart()
    }
    else {
      
    }
  }

  addCItem(citem: Item) {
    const fullItem = {
      item: citem,
      quantity: 1,
      price: citem.price
    }
    this.cart.items = fullItem
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addCCE(pri: number) {
    // const CE  = {
    //   name: "Custom Entry",
    //   price: pri
    // }
    // this.cart.customEntries.push(CE)
    // localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addTip(ctip: number) {
    this.cart.tips = ctip;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): any {
    return this.cart.items;
  }

  setCart(): void {
    const emptyCart: Cart = {
      items: {},
      customEntries: [],
      totalQuantity: 0,
      subtotal: 0,
      tax: 0,
      tips: 0,
      total: 0
    }
    localStorage.setItem('cart', JSON.stringify(emptyCart));
    this.cart = emptyCart;
  }

  clearCart(): void {
    localStorage.removeItem('cart');
    this.cart = null;
    this.setCart();
  }

  isEnabled(): boolean {
    const cart = localStorage.getItem('cart');
    return (cart !== null && cart !== undefined);
  }
}

