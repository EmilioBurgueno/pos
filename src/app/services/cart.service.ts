import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cart } from 'src/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore ) { }

  addTransaction(cart: any) {
    return this.afs.collection('transaction').add(cart);
  }

  getCarts() {
    return this.afs.collection('cart').snapshotChanges().pipe(
      map(docs => docs.map(doc => {
        const cart = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return {id, ...cart } as Cart;
      }))
    )
  }

  getCart(cartId: string) {
    return this.afs.doc(`cart/${cartId}`).snapshotChanges().pipe(
      map(doc => {
        const cart = doc.payload.data() as any;
        const id = doc.payload.id;
        return { id, ...cart } as Cart;
      })
    )
  }

  deleteCart(cartId: string) {
    return this.afs.doc(`cart/${cartId}`).delete();
  }

  updateCart(cartId: string, updatedCart: any) {
    return this.afs.doc(`cart/${cartId}`).update(updatedCart);
  }


}
