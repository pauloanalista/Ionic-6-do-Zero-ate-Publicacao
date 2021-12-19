import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordionPage } from './accordion.page';

const routes: Routes = [
  {
    path: '',
    component: AccordionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionPageRoutingModule {}
