import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoignPage } from './loign.page';

const routes: Routes = [
  {
    path: '',
    component: LoignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoignPageRoutingModule {}
