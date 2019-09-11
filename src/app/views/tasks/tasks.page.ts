import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState, ITasksState } from '@app/store/tasks.state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss']
})
export class TasksPage implements OnInit {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor() {}

  ngOnInit() {}
}
