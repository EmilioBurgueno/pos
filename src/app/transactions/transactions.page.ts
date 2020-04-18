import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  today = Date.now();

  time: any = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

}
