import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilescodePageRoutingModule } from './filescode-routing.module';

import { FilescodePage } from './filescode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilescodePageRoutingModule
  ],
  declarations: [FilescodePage]
})
export class FilescodePageModule {}
