import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionDescPageRoutingModule } from './transaction-desc-routing.module';

import { TransactionDescPage } from './transaction-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionDescPageRoutingModule
  ],
  declarations: [TransactionDescPage]
})
export class TransactionDescPageModule {}
