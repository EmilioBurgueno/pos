import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { Item } from 'src/models/item.model';
import { ItemAddPage } from '../modals/item-add/item-add.page';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart;
  sItem: any;

  constructor() {
    if (!this.isEnabled()) {
      this.setCart()
    }
    else {
      this.cart = JSON.parse(localStorage.getItem('cart'))
    }
  }

  addCItem(citem: Item) {
    this.sItem = this.cart.items[citem.id]
    if(!this.sItem) {
      this.sItem = {
        item: citem,
        quantity: 0,
        price: 0
      };
      this.cart.items[citem.id]= this.sItem;
    }
    const price = Number(citem.price);
    this.sItem.quantity++;
    this.sItem.price = this.sItem.item.price * this.sItem.quantity;
    this.cart.totalQuantity++;
    this.cart.subtotal += price;
    this.cart.tax = this.cart.subtotal * 0.0975;
    this.cart.total = this.cart.subtotal + this.cart.tax;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addCCE(pri: number) {
    const CE  = {
      name: "Custom Entry",
      price: pri
    }
    this.cart.customEntries.push(CE)
    this.cart.totalQuantity++;
    this.cart.subtotal += pri;
    this.cart.tax = this.cart.subtotal * 0.0975;
    this.cart.total = this.cart.subtotal + this.cart.tax;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addTip(ctip: number) {
    const price = Number(ctip);
    this.cart.tips = price;
    this.cart.total += price;
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

  isEnabled(): boolean {
    const cart = localStorage.getItem('cart');
    return (cart !== null && cart !== undefined);
  }
}

