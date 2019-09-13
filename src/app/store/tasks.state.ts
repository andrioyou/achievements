import { State, StateContext, Action, Store, NgxsOnInit } from '@ngxs/store';
import { ITask } from '../core/interfaces/task.interface';
import { GetTasks, SignOut, GetCategories, CompleteTask, AddTask, DeleteTask } from './tasks.actions';
import { IUser } from '../core/interfaces/user.interface';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../core/services/firestore.service';

export interface ITasksState {
  list: ITask[];
  categories: string[];
  isAuthenticated: boolean;
  user: IUser | null;
}

@State<ITasksState>({
  name: 'posts',
  defaults: {
    list: [],
    categories: [],
    isAuthenticated: false,
    user: null,
  }
})
export class TasksState implements NgxsOnInit {

  constructor(
    private store: Store,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngxsOnInit(ctx: StateContext<ITasksState>) {

    ctx.patchState({ isAuthenticated: this.authService.isAuthenticated() });

    this.authService.user$.subscribe(user => {
      if (user) {
        this.firestoreService.writeUser(user);
        this.store.dispatch(new GetTasks());
        this.store.dispatch(new GetCategories());
        ctx.patchState({
          user,
          isAuthenticated: true
        });
      } else {
        ctx.patchState({
          user: null,
          isAuthenticated: false
        });
      }
    });
  }

  @Action(GetTasks)
  getTasks(ctx: StateContext<ITasksState>) {
    this.firestoreService.getTasks().subscribe(list => ctx.patchState({ list }));
  }

  @Action(AddTask)
  addTask(ctx: StateContext<ITasksState>, action: AddTask) {
    this.firestoreService.addTask(action.task);
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<ITasksState>, action: DeleteTask) {
    this.firestoreService.deleteTask(action.task);
  }

  @Action(CompleteTask)
  completeTask(ctx: StateContext<ITasksState>, action: CompleteTask) {
    const list = ctx.getState().list;
    const taskIndex = list.findIndex((item => item.id === action.task.id));
    const task = list[taskIndex];
    task.completed = true;
    this.firestoreService.updateTask(task);
  }

  @Action(GetCategories)
  getCategories(ctx: StateContext<ITasksState>) {
    const categories = ['Job', 'Home'];
    ctx.patchState({ categories });
  }

  @Action(SignOut)
  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['auth']);
    });
  }
}
