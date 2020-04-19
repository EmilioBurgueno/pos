import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Item } from 'src/models/item.model';
import { ChargePage } from '../charge/charge.page';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  Items: Item[] = [];

  viewMode = 'basket'

  //checkoutTotal: number;

  constructor(private modalCtrl: ModalController,
              private itemService: ItemService) { }

  ngOnInit() {
    this.getAvItems()
  }

  async openchargeModal(){
    const modal = await this.modalCtrl.create({
      component: ChargePage
    });
    return await modal.present();
  }

  getAvItems() {
    this.itemService.getAvItems().subscribe(items => {
      this.Items = items;
      console.log(this.Items);
    });
  }

}
