import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { TipsPage } from '../tips/tips.page';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  confirmPayment(){

  }

  async openTipsModal() {
    const modal = await this.modalCtrl.create({
      component: TipsPage
    });
    return await modal.present();
  }

  closeChargeModal() {
    //await this.modalCtrl.dismiss();
  }

}
