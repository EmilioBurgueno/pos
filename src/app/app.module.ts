import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ItemAddPageModule } from './modals/item-add/item-add.module';
import { ItemEditPageModule } from './modals/item-edit/item-edit.module';
import { TransactionDescPageModule } from './modals/transaction-desc/transaction-desc.module';
import { ChargePageModule } from './modals/charge/charge.module';
import { TipsPageModule } from './modals/tips/tips.module';
import { CoDonePageModule } from './modals/co-done/co-done.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule, ReactiveFormsModule,
    ItemAddPageModule,
    ItemEditPageModule,
    TransactionDescPageModule,
    ChargePageModule,
    TipsPageModule,
    CoDonePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
