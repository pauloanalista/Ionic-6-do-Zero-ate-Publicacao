import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashPage } from './flash.page';

const routes: Routes = [
  {
    path: '',
    component: FlashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashPageRoutingModule {}
