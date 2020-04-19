import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { Transaction } from 'src/models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  today = Date.now();

  date = new Date();
  options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
  };
  time = new Intl.DateTimeFormat('en-US', this.options).format(this.date);

  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  day = this.days[ this.date.getDay() ];

  item: Item;

  transactions: Transaction[] = [
    {
      id: '001',
      customEntries: 0.22,
      items: [
        {
          id: '002',
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
    },
    {
      id: '001',
      customEntries: 0.22,
      items: [
        {
          id: '002',
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
    }
  ];

  constructor(private navCtrl: NavController,
    private transactionService: TransactionService) { }

  ngOnInit() {
  }

  goToDesc(transId: String) {
    this.navCtrl.navigateForward(['menu', 'transactions', transId])
  }

  getTrans() {
    this.transactionService.getTransactions().subscribe(transacs => {
      this.transactions = transacs;
    });
  }

}
