import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetUser, RemoveUser } from '@src/app/store/tasks.actions';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetUser());
  }

  onSignOut() {
    this.store.dispatch(new RemoveUser());
  }
}
