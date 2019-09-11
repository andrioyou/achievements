import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  @Select(TasksState) state$!: Observable<ITasksState>;

  constructor() { }

  ngOnInit() { }
}
