import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Item } from 'src/models/item.model';
import { Cart } from 'src/models/cart.model';
import { ItemService } from '../services/item.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  Items: Item[] = [];
  cart: Cart;

  chargeValue = 0.0;
  numpadValue = '0';
  viewMode = 'basket'

  constructor(private navCtrl: NavController,
              private itemService: ItemService,
              private cartService: CartService) {
                if (!this.cartService.isEnabled()) {
                this.cartService.setCart()
              }}

  ngOnInit() {
    this.getAvItems()
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
    this.cartService.clearCart()
  }

  addCItem(item: Item) {
    this.cartService.addCItem(item);
  }

  addValue (chargeValue,numpadValue){
    var decimal = '.';
    var len = numpadValue.len;
    var text = numpadValue.substring(0, len-2) + "." + numpadValue.substring(len-2);
    this.chargeValue = this.chargeValue + parseFloat(this.numpadValue)
  }

  addNumber(numberInput: string) {
    this.numpadValue.concat(this.numpadValue,numberInput);
  }

}
