import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.page.html',
  styleUrls: ['./item-add.page.scss'],
})

export class ItemAddPage implements OnInit {

  additemForm: FormGroup;

  constructor(private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private itemService: ItemService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.additemForm = new FormGroup({
      name: new FormControl (null, [Validators.required]),
      price: new FormControl (null,[Validators.required])
    })
  }

  addItem(): void {
    if(this.additemForm.valid){
      const nameform = this.additemForm.controls.name.value;
      const priceform = this.additemForm.controls.price.value;

      const item = {
        name: nameform,
        price: priceform,
        status: 'available'
      };

    this.itemService.addItem(item).then(() => {
      this.addAlert()
    }).catch((error)=> {
      console.log(error)
    });
  }
      else{
       console.log('Error')
     } 
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async addAlert(){
    const alert = await this.alertCtrl.create ({
      header: 'Done!',
      message: 'Your item has been created succesfully',
      buttons: [
        {
          text:'OK',
          handler:()=> {
            this.closeModal();
          }
        }
      ]
    });
  await alert.present();
  }
}



