import { Component, OnInit } from '@angular/core';
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

  //@Input() iID: string;

  edititemForm: FormGroup;

  item: Item;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navParams: NavParams,
              private itemService: ItemService) { }

  ngOnInit() {
  }

  getItem(itemId: string) {
    this.itemService.getItem(itemId).subscribe((item) => {
      this.item = item;
      console.log(item);
      this.patchForm();
    })
  }

  

  patchForm() {
    this.edititemForm.patchValue({
      name: this.item.name,
      price: this.item.price
    })
  }
}
