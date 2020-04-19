import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { ModalController } from '@ionic/angular';
import { ItemService } from '../services/item.service';
import { ItemAddPage } from '../modals/item-add/item-add.page';
import { ItemEditPage } from '../modals/item-edit/item-edit.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  Items: Item[] = [];

  constructor(
    private modalCtrl: ModalController,
    private itemService: ItemService
  ) {}

  ngOnInit() {
   this.getItems();
  }

  //Modal
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ItemAddPage
    });
    return await modal.present();
  }

  async openModalEdit(itemId: string) {
    const modal = await this.modalCtrl.create({
      component: ItemEditPage,
      componentProps: {
        iID: itemId
      }
    });
    return await modal.present();
  }

  // funciones

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.Items = items;
    });
  }

  deleteItem(itemId: string) {
    this.itemService
      .deleteItem(itemId)
      .then(() => {
        console.log(itemId);
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeStatus(item: Item) {
    if (item.status === "available") {
      item.status = "hidden";
    } else {
      item.status = "available";
    }
    this.itemService
      .updateItem(item.id, item)
      .then(() => {
        console.log("Status Changed");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
