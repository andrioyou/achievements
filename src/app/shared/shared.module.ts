import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [TaskListComponent]
})
export class SharedModule { }
