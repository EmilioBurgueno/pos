import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-co-done',
  templateUrl: './co-done.page.html',
  styleUrls: ['./co-done.page.scss'],
})
export class CoDonePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToCheckout() {
    this.navCtrl.navigateRoot(['menu', 'checkout'])
  }
}
