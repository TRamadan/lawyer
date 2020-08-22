import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostshareenPageRoutingModule } from './mostshareen-routing.module';

import { MostshareenPage } from './mostshareen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostshareenPageRoutingModule
  ],
  declarations: [MostshareenPage]
})
export class MostshareenPageModule {}
