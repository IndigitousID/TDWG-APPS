import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsAddPageRoutingModule } from './settings-add-routing.module';

import { SettingsAddPage } from './settings-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsAddPageRoutingModule
  ],
  declarations: [SettingsAddPage]
})
export class SettingsAddPageModule {}
