import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '@src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() list!: ITask[];
  @Input() completedStatus = false;
  @Output() taskClick = new EventEmitter<string>();

  constructor() { }

  onTaskClick(id: string) {
    setTimeout(() => {
      this.taskClick.emit(id);
    }, 500);
  }
}
