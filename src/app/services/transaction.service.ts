import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private afs: AngularFirestore) { }

  // createTransaction(transaction:any){
  //   return this.afs.collection('transaction').add(transaction);
  // }

  // getTransactions() {
  //   return this.afs.collection('transaction').snapshotChanges().pipe(
  //     map(docs => docs.map(doc => {
  //       const item = doc.payload.doc.data() as any;
  //       const id = doc.payload.doc.id;

  //       return { id, ...date } as Transaction;
  //     }))
  //   )
}
