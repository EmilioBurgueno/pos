import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})

export class ChargePage implements OnInit {

  constructor(private navCtrl: NavController,
              private cartService: CartService,
              private loadingController: LoadingController) { }


  totalValue = JSON.parse(localStorage.getItem('cart')).total;
  subtotalValue = JSON.parse(localStorage.getItem('cart')).subtotal;
  taxValue = JSON.parse(localStorage.getItem('cart')).tax;
  ;
  items: any;
  CEs: Object[];

  ngOnInit() {
    this.getCItems();
  }

  async confirmPayment() {
    const loading = await this.loadingController.create({
      message: 'Processing Payment...',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.navCtrl.navigateRoot(['menu', 'tips']);
  }

  getCItems() {
    this.items = Object.entries(this.cartService.getCart());
    this.getCEs();
  }

  getCEs() {
    this.CEs = JSON.parse(localStorage.getItem('cart')).customEntries;
  }

}
