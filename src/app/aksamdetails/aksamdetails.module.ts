import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AksamdetailsPageRoutingModule } from './aksamdetails-routing.module';

import { AksamdetailsPage } from './aksamdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AksamdetailsPageRoutingModule
  ],
  declarations: [AksamdetailsPage]
})
export class AksamdetailsPageModule { }
