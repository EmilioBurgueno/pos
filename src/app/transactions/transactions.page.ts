import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item.model';
import { Transaction } from 'src/models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  date = Date.now();

  item: Item;

  transactions: Transaction[] = [
    {
      id: '001',
      customEntries: [],
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
      date: this.date
    },
    {
      id: '001',
      customEntries: [],
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
      date: this.date
    }
  ];

  constructor(private navCtrl: NavController,
              private transactionService: TransactionService,
              private datePipe: DatePipe) { }

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
  
  groupTransactions(transactions: Transaction) {
    this.transactionService.groupTransactions(transactions);
  }
  
  //sortedDates = this.transactions.slice().sort((a, b) => b.date - a.date)
}
