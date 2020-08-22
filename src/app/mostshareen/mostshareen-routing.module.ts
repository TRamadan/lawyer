import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostshareenPage } from './mostshareen.page';

const routes: Routes = [
  {
    path: '',
    component: MostshareenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostshareenPageRoutingModule {}
