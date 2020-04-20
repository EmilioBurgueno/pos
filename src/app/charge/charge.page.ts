import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TipsPage } from '../tips/tips.page';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  confirmPayment(){


    this.navCtrl.navigateForward(['menu', 'tips'])
  }

}
