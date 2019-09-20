import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { TasksState, ITasksState } from '@app/store/tasks.state';
import { AddTask } from '@app/store/tasks.actions';
import { ChangeRouteService } from '../tabs/change-route.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  @Select(TasksState) state$!: Observable<ITasksState>;

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl(''),
    hasProgress: new FormControl(false),
    progressLevel: new FormControl(2, [Validators.min(2), Validators.max(100)]),
  });
  formChangeSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private changeRouteService: ChangeRouteService
  ) { }

  ionViewWillEnter() {
    this.formChangeSub = this.form.valueChanges.subscribe(() => {
      this.changeRouteService.allowChangeRoute = false;
    });
  }

  ionViewDidLeave() {
    this.formChangeSub.unsubscribe();
    this.changeRouteService.allowChangeRoute = true;
    this.form.reset();
  }

  onAddTask() {
    this.store.dispatch(new AddTask(this.form.value));
    this.form.reset();
    this.changeRouteService.allowChangeRoute = true;
    this.router.navigate(['tasks']);
  }

}
