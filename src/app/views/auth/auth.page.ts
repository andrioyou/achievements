import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { Router } from '@angular/router';
import { RegisterUser } from '@src/app/store/tasks.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  @Select(TasksState) state$!: Observable<ITasksState>;
  stateSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.stateSub = this.state$.subscribe(state => {
      if (state.isAuthenticated) {
        this.store.dispatch(new RegisterUser());
        this.router.navigate(['']);
      }
    });
  }

  ionViewDidLeave() {
    this.stateSub.unsubscribe();
  }

}
