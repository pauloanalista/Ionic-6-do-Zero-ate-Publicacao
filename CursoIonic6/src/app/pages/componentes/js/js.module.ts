import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsPageRoutingModule } from './js-routing.module';

import { JsPage } from './js.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsPageRoutingModule
  ],
  declarations: [JsPage]
})
export class JsPageModule {}
