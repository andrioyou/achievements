import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddTaskPage } from './add-task.page';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AddTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule { }
