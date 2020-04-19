import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDescPage } from './transaction-desc.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionDescPageRoutingModule {}
