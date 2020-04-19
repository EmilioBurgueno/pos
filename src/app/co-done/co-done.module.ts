import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoDonePageRoutingModule } from './co-done-routing.module';

import { CoDonePage } from './co-done.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoDonePageRoutingModule
  ],
  declarations: [CoDonePage]
})
export class CoDonePageModule {}
