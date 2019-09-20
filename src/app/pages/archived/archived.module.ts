import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArchivedPage } from './archived.page';
import { SharedModule } from '@src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ArchivedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ArchivedPage]
})
export class ArchivedPageModule { }
