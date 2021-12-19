import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsPage } from './js.page';

const routes: Routes = [
  {
    path: '',
    component: JsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsPageRoutingModule {}
