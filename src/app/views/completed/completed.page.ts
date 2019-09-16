import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { ArchiveTask } from '@src/app/store/tasks.actions';
import { ITask } from '@src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor(private store: Store) { }

  onDeleteTask(task: ITask) {
    this.store.dispatch(new ArchiveTask(task));
  }
}
