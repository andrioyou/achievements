import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState, ITasksState } from '@app/store/tasks.state';
import { DeleteTask, GetTasksArchived } from '@app/store/tasks.actions';
import { ITask } from '@core/interfaces/task.interface';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor(private store: Store) { }

  ionViewWillEnter() {
    this.store.dispatch(new GetTasksArchived());
  }

  onDeleteTask(task: ITask) {
    this.store.dispatch(new DeleteTask(task));
  }
}
