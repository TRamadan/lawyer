import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AksamPage } from './aksam.page';

const routes: Routes = [
  {
    path: '',
    component: AksamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AksamPageRoutingModule {}
