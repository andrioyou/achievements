import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TasksPage } from './tasks.page';
import { SharedModule } from '@src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TasksPage
  }
];

@NgModule({
  declarations: [TasksPage],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes), SharedModule]
})
export class TasksPageModule { }
