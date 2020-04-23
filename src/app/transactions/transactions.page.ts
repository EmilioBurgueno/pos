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

  item: Item;
  test: number;
  groupArrays: {key: string, value: string}[];
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
      
      const groups = this.transactions.reduce((groups, trans) => {
        const date  = new Date(trans.date).toDateString();
        if(!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(trans);
        return groups;
      }, {});


      this.groupArrays = Object.keys(groups).map((date) => {
        return {
          key: date,
          value: groups[date]
        };
      });
      this.groupArrays.sort(function(a, b) {
        var dateA: any = new Date(a.key), dateB: any = new Date(b.key);
        return dateB - dateA;
      });
      
    });
    
  }
  
}