import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoignPageRoutingModule } from './loign-routing.module';

import { LoignPage } from './loign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoignPageRoutingModule
  ],
  declarations: [LoignPage]
})
export class LoignPageModule { }
