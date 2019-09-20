import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { SignOut } from '@app/store/tasks.actions';
import { TasksState, ITasksState } from '@app/store/tasks.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor(private store: Store) { }

  onSignOut() {
    this.store.dispatch(new SignOut());
  }
}
