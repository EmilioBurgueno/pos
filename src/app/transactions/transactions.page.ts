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

  transactions: Transaction[]

  constructor(private navCtrl: NavController,
              private transactionService: TransactionService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    this.getTrans()
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
