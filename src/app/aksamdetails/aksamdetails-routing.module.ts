import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AksamdetailsPage } from './aksamdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AksamdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AksamdetailsPageRoutingModule {}
