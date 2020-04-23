import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'menu',
    children: [
      {
        path: 'checkout',
        children: [
          {
            path: '',
            loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsPageModule),
            canLoad: [AuthGuard]
          },
          {
            path: ':id',
            loadChildren: () => import('./transaction-desc/transaction-desc.module').then(m => m.TransactionDescPageModule),
            canLoad: [AuthGuard]
          },
        ]
      },
      {
        path: 'items',
        children: [
          {
            path: '',
            loadChildren: () => import('./items/items.module').then(m => m.ItemsPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'charge',
        children: [
          {
            path: '',
            loadChildren: () => import('./charge/charge.module').then(m => m.ChargePageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'tips',
        children: [
          {
            path: '',
            loadChildren: () => import('./tips/tips.module').then(m => m.TipsPageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: 'co-done',children: [
          {
            path: '',
            loadChildren: () => import('./co-done/co-done.module').then(m => m.CoDonePageModule),
            canLoad: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: 'menu/checkout',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'menu',
    redirectTo: 'menu/checkout',
    pathMatch: 'full'
  },
  {
    path: 'item-add',
    loadChildren: () => import('./modals/item-add/item-add.module').then(m => m.ItemAddPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'item-edit',
    loadChildren: () => import('./modals/item-edit/item-edit.module').then(m => m.ItemEditPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
