import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { AddTask } from '@src/app/store/tasks.actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  form: FormGroup = new FormGroup({
    id: new FormControl(new Date().getTime().toString()),
    title: new FormControl('', Validators.required),
    category: new FormControl(''),
    completed: new FormControl(false)
  });

  constructor(
    private store: Store,
    private router: Router
  ) { }

  onAddTask() {
    this.store.dispatch(new AddTask(this.form.value));
    this.form.reset();
    this.router.navigate(['tasks']);
  }

}
