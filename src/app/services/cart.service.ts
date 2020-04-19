import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cart } from 'src/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore ) { }

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

  //Agregar Item a carrito
  //Entrada manual al carrito
  //Se agrega tip al carrito
  // Se devuelve una lista de items del carrito
  // Se guarda en el LocalStorage el carrito
  //Se elimina del LocalStorage el carrito

}
