import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '@core/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() list!: ITask[];
  @Input() typeOfList: 'default' | 'completed' | 'archived' = 'default';

  @Output() taskComplete = new EventEmitter<ITask>();
  @Output() taskArchive = new EventEmitter<ITask>();
  @Output() taskDelete = new EventEmitter<ITask>();
  @Output() taskIncProgress = new EventEmitter<ITask>();
  @Output() taskDecProgress = new EventEmitter<ITask>();

  constructor() { }

  onTaskComplete(task: ITask) {
    if (task.hasProgress) {
      return;
    }
    setTimeout(() => {
      this.taskComplete.emit(task);
    }, 500);
  }

  onTaskArchive(task: ITask) {
    this.taskArchive.emit(task);
  }

  onTaskDelete(task: ITask) {
    this.taskDelete.emit(task);
  }

  onTaskIncProgress(task: ITask) {
    this.taskIncProgress.emit(task);
    if ((task.progressDone + 1) === task.progressLevel) {
      setTimeout(() => {
        this.taskComplete.emit(task);
      }, 500);
    }
  }

  onTaskDecProgress(task: ITask) {
    if (task.progressDone <= 0) {
      return;
    }
    this.taskDecProgress.emit(task);
  }
}
