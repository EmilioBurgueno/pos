import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item } from 'src/models/item.model';
import { ItemService } from '../services/item.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  Items: Item[] = [];

  chargeValue = JSON.parse(localStorage.getItem('cart')).subtotal;
  numVal = 0.0;
  viewMode = 'basket'
  des: boolean

  constructor(private navCtrl: NavController,
              private itemService: ItemService,
              private cartService: CartService) {
                if (!this.cartService.isEnabled()) {
                this.cartService.setCart()
              }}

  ngOnInit() {
    this.getAvItems()
    if (this.chargeValue == 0){
      this.des = true;
    }
    else{
      this.des = false;
    }
  }

  goToCharge() {
    this.navCtrl.navigateForward(['menu', 'charge'])
  }

  getAvItems() {
    this.itemService.getAvItems().subscribe(items => {
      this.Items = items.filter(x => x !== undefined);
    });
  }

  clearItems() {
    this.cartService.setCart()
    this.chargeValue = JSON.parse(localStorage.getItem('cart')).subtotal;
    this.des = true;
  }

  addCItem(item: Item) {
    this.cartService.addCItem(item);
    this.chargeValue = JSON.parse(localStorage.getItem('cart')).subtotal;
    this.des = false;
  }

  addValue() {
    this.cartService.addCCE(this.numVal)
    this.clearAll()
    this.chargeValue = JSON.parse(localStorage.getItem('cart')).subtotal;
    this.des = false;
  }

  addNumber(numberInput: number) {
    this.numVal = (this.numVal*10)+numberInput
  }

  clearAll() {
    this.numVal = 0
  }

}
