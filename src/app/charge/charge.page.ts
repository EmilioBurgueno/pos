import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TipsPage } from '../tips/tips.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage implements OnInit {

  constructor(private navCtrl: NavController,
              private cartService: CartService) { }

  totalValue = JSON.parse(localStorage.getItem('cart')).total;
  subtotalValue = JSON.parse(localStorage.getItem('cart')).subtotal;
  taxValue = JSON.parse(localStorage.getItem('cart')).tax;
  items: any;


  ngOnInit() {
    this.getCItems()
  }

  getCItems() {
    this.items = this.cartService.getCart();
    console.log(this.items)
    this.items = Array.from(this.items);
    console.log(this.items)
  }

  confirmPayment(){
    this.navCtrl.navigateRoot(['menu', 'tips'])
  }

}
