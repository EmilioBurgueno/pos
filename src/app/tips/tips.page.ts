import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(private alertCtrl: AlertController,
              private navCtrl: NavController,
              private loadingController: LoadingController,
              private cartService: CartService,
              private transService: TransactionService) { }

  totalValue = JSON.parse(localStorage.getItem('cart')).total;
  Tip20 = this.totalValue * 0.20
  Tip15 = this.totalValue * 0.15
  Tip10 = this.totalValue * 0.10

  ngOnInit() {

  }

  async customTipAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Add your tip!',
      message: '',
      inputs: [
        {
          name: 'tip',
          placeholder: '$ USD',
          type: 'number',
          min: 0
        }
      ],
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: data => {
            console.log('Tip canceled');
          }
        },
        {
          text: 'OK',
          handler: data => {
            if (data.tip > 0) {
              console.log('Tip added');
              this.addTip(data.tip)
            } else {
              alert.message = "You need to input a tip above $0.00 USD"
              return false
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmTip() {
    const loading = await this.loadingController.create({
      message: 'Processing Tip...',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.navCtrl.navigateRoot(['menu', 'co-done']);
    console.log('Loading dismissed!');
  }

  addTip(tip: number) {
    this.cartService.addTip(tip);
    const ls = JSON.parse(localStorage.getItem('cart'))
    const trans = {
      customEntries: ls.customEntries,
      items: ls.items,
      totalQuantity: ls.totalQuantity,
      subtotal: ls.subtotal,
      tax: ls.tax,
      tips: ls.tips,
      total: ls.total,
      date: Date.now()
    }
    this.confirmTip();
    this.transService.createTransaction(trans)
    this.cartService.setCart();
  }
}
