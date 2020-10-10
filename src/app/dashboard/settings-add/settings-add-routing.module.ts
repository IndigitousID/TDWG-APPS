import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsAddPage } from './settings-add.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsAddPageRoutingModule {}
