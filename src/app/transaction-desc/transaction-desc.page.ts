import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/models/transaction.model';
import { Item } from 'src/models/item.model';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transaction-desc',
  templateUrl: './transaction-desc.page.html',
  styleUrls: ['./transaction-desc.page.scss'],
})
export class TransactionDescPage implements OnInit {

  transaction: Transaction;
  items: any

  constructor(private transactionService: TransactionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const transID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTrans(transID);
    
  }

  getTrans(transId: string) {
    this.transactionService.getTransaction(transId).subscribe((trans) => {
      this.transaction = trans;
      this.getCItems()
    })
  }

  getCItems() {
    console.log(this.transaction)
    this.items = Object.entries(this.transaction.items);
    console.log(this.items)
  }
}
