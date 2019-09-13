import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskListComponent } from './components/task-list/task-list.component';
import { GridWrapComponent } from './components/grid-wrap/grid-wrap.component';

@NgModule({
  declarations: [TaskListComponent, GridWrapComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  exports: [TaskListComponent, GridWrapComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
