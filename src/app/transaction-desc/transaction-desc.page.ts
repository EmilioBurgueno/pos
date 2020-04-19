import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/models/transaction.model';
import { Item } from 'src/models/item.model';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';
import { TransactionService } from 'src/app/services/transaction.service';


@Component({
  selector: 'app-transaction-desc',
  templateUrl: './transaction-desc.page.html',
  styleUrls: ['./transaction-desc.page.scss'],
})
export class TransactionDescPage implements OnInit {

  today = Date.now();

  date = new Date();
  options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
  };
  time = new Intl.DateTimeFormat('en-US', this.options).format(this.date);

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  transaction: Transaction = {
    id: '001',
    customEntries: 0.22,
    items: [
      {
        id: '002',
        name: 'Test',
        price: 10,
        status: 'available'
      },
      {
        id: '003',
        name: 'Test',
        price: 10,
        status: 'available'
      }
    ],
    totalQuantity: 1,
    subtotal: 10,
    tax: 1.25,
    tips: 0,
    total: 11.25,
    date: this.today
  };
  
  //day = this.days[ this.transaction.date.getDay() ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {

  }

  getTrans(transId: string) {
    this.transactionService.getTransaction(transId).subscribe((trans) => {
      this.transaction = trans;
      console.log(trans);
    })
  }
}
