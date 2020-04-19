import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Item } from 'src/models/item.model';
import { ChargePage } from '../modals/charge/charge.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  Items: Item[] = [];

  checkoutTotal:number;

  constructor(private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async openchargeModal(){
    const modal = await this.modalCtrl.create({
      component: ChargePage
    });
    return await modal.present();
  }

}
