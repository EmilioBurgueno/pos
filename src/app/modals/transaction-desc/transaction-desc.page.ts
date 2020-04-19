import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/models/transaction.model';
import { Item } from 'src/models/item.model';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-transaction-desc',
  templateUrl: './transaction-desc.page.html',
  styleUrls: ['./transaction-desc.page.scss'],
})
export class TransactionDescPage implements OnInit {

  today = Date.now();

  time: any = new Date().toISOString();

  transaction: Transaction;

  item: Item;

  @Input() tID: string;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private itemService: ItemService) { }

  ngOnInit() {
  }

}
