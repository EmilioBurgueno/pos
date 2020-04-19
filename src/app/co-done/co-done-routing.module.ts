import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoDonePage } from './co-done.page';

const routes: Routes = [
  {
    path: '',
    component: CoDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoDonePageRoutingModule {}
