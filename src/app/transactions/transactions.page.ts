import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { Transaction } from 'src/models/transaction.model';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ItemService } from '../services/item.service';
import { TransactionDescPage } from '../modals/transaction-desc/transaction-desc.page';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  today = Date.now();

  time: any = new Date().toISOString();

  item: Item;

  transaction: Transaction;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private transactionService: TransactionService) { }

  ngOnInit() {
  }

  async openModal(transId) {
    const modal = await this.modalCtrl.create({
      component: TransactionDescPage,
      componentProps: {
        tID: transId
      }
    });
    return await modal.present();
  }

  createTransaction(): void{
    if(true) {
      //const desc = this.addnoteForm.controls.description.value;

      const transaction = {
        customEntries: 0,
        items: '',
        totalQuantity: 0,
        subtotal: 0,
        tax: 0.0975,
        tips: 0,
        total: 0,
        date: ''
      };

      // this.transactionService.createTransaction(transaction).then(() => {
      //   //this.addAlert()
      // }).catch((error) => {
      //   console.log(error)
      // });
    }
    else{
      console.log('Error')
    }
  }
}
