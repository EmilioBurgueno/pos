import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transaction: Transaction;
  group: any;

  constructor(private afs: AngularFirestore) { }

  createTransaction(transaction:any){
    return this.afs.collection('transaction').add(transaction);
  }

  getTransactions() {
    return this.afs.collection('transaction').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const trans = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return { id, ...trans } as Transaction;
      }))
    )
  }

  getTransaction(transId: string) {
    return this.afs.doc(`transaction/${transId}`).snapshotChanges().pipe(
      map(doc => {
        const trans = doc.payload.data() as any;
        const id = doc.payload.id;
        
        return { id, ...trans } as Transaction;
      })
    );
  }

  groupTransactions(transactionList: Transaction) {
    const groups = transactionList;
    this.group = this.transaction.date[transactionList.id];
    if(!this.group) {
      this.group = {
        key: this.transaction.date,
        value: this.transaction
      };

      this.transaction.date[transactionList.id]= this.group;
    }
  }
}
