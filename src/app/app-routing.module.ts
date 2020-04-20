import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/checkout',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    redirectTo: 'menu/checkout',
    pathMatch: 'full'
  },
  {
    path: 'menu/checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'menu/transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'menu/items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'menu/transactions/:id',
    loadChildren: () => import('./transaction-desc/transaction-desc.module').then( m => m.TransactionDescPageModule)
  },
  {
    path: 'menu/charge',
    loadChildren: () => import('./charge/charge.module').then( m => m.ChargePageModule)
  },
  {
    path: 'menu/tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'menu/co-done',
    loadChildren: () => import('./co-done/co-done.module').then( m => m.CoDonePageModule)
  },
  {
    path: 'menu/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'item-add',
    loadChildren: () => import('./modals/item-add/item-add.module').then( m => m.ItemAddPageModule)
  },
  {
    path: 'item-edit',
    loadChildren: () => import('./modals/item-edit/item-edit.module').then( m => m.ItemEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}