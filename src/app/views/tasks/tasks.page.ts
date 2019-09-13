import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState, ITasksState } from '@app/store/tasks.state';
import { CompleteTask } from '@src/app/store/tasks.actions';
import { ITask } from '@src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss']
})
export class TasksPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor(private store: Store) { }

  onCompleteTask(task: ITask) {
    this.store.dispatch(new CompleteTask(task));
  }
}
