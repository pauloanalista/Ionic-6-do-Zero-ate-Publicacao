import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashPageRoutingModule } from './flash-routing.module';

import { FlashPage } from './flash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashPageRoutingModule
  ],
  declarations: [FlashPage]
})
export class FlashPageModule {}
