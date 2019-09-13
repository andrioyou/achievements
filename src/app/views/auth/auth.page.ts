import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { TasksState, ITasksState } from '@src/app/store/tasks.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @Select(TasksState) state$!: Observable<ITasksState>;
  stateSub!: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.stateSub = this.state$.subscribe(state => {
      if (state.isAuthenticated) {
        this.router.navigate(['']);
      }
    });
  }

  ionViewDidLeave() {
    this.stateSub.unsubscribe();
  }

}
