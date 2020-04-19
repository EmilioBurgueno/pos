import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async customTipAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Add your tip!',
      inputs: [
        {
          name: 'tipu',
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
            console.log('Tip added');
          }
        },
      ]
    });
    await alert.present();
  }

}
