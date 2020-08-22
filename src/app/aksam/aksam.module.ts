import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AksamPageRoutingModule } from './aksam-routing.module';

import { AksamPage } from './aksam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AksamPageRoutingModule
  ],
  declarations: [AksamPage]
})
export class AksamPageModule {}
