import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {

  @Input() iID: string;

  edititemForm: FormGroup;

  item: Item;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navParams: NavParams,
              private itemService: ItemService) { }

  ngOnInit() {
    const iID = this.navParams.get('iID');
    this.getItem(iID);
    this.initForm();
  }

  getItem(itemId: string) {
    this.itemService.getItem(itemId).subscribe((item) => {
      this.item = item;
      console.log(item);
      this.patchForm();
    })
  }

  updateItem() {
    const updatedItem = {
      ...this.edititemForm.value
    };

    this.itemService.updateItem(this.iID, updatedItem).then(() => {
      this.editAlert();
    }).catch((error) => {
      console.log(error)
    });
  }  

  patchForm() {
    this.edititemForm.patchValue({
      name: this.item.name,
      price: this.item.price
    })
  }

  initForm() {
    this.edititemForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async editAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your Item has been updated successfully',
      buttons: [
        {
          text: 'OKAY',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });

    await alert.present();
  }
}
