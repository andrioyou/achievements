import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '@src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() list!: ITask[];
  @Output() completeTask = new EventEmitter<string>();
  @Output() uncompleteTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onChangeCompleteStatus(task: ITask) {
    (task.completed)
      ? this.uncompleteTask.emit(task.id)
      : this.completeTask.emit(task.id);
  }
}
