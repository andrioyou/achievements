import { State, StateContext, Action, Store, NgxsOnInit } from '@ngxs/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/services/auth.service';
import { FirestoreService } from '../core/services/firestore.service';
import { ITask } from '../core/interfaces/task.interface';
import { IUser } from '../core/interfaces/user.interface';
import { Task } from '../core/models/task.model';
import {
  GetTasks, SignOut,
  GetCategories, CompleteTask,
  AddTask, DeleteTask,
  ArchiveTask, GetTasksArchived,
  SignIn,
  RegisterUser
} from './tasks.actions';

export interface ITasksState {
  list: ITask[];
  listArchived: ITask[];
  categories: string[];
  isAuthenticated: boolean;
  user: IUser | null;
}

@State<ITasksState>({
  name: 'posts',
  defaults: {
    list: [],
    listArchived: [],
    categories: [],
    isAuthenticated: false,
    user: null,
  }
})
export class TasksState implements NgxsOnInit {
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  cancelSubscriptions() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }

  ngxsOnInit(ctx: StateContext<ITasksState>) {
    this.authService.getUserState().subscribe(user => {
      if (user) {
        this.store.dispatch(new SignIn());
      }
    });
  }

  @Action(RegisterUser)
  registerUser(ctx: StateContext<ITasksState>) {
    const user = this.authService.getUser();
    if (user) {
      this.firestoreService.registerUser(user);
    }
  }

  @Action(SignIn)
  signIn(ctx: StateContext<ITasksState>) {
    const state = ctx.getState();
    if (!state.isAuthenticated) {
      ctx.patchState({
        isAuthenticated: this.authService.isAuthenticated(),
        user: this.authService.getUser()
      });
      this.store.dispatch(new GetTasks());
      this.store.dispatch(new GetCategories());
    }
  }

  @Action(SignOut)
  signOut(ctx: StateContext<ITasksState>) {
    this.authService.signOut().then(() => {
      ctx.patchState({
        list: [],
        categories: [],
        user: null,
        isAuthenticated: false
      });
      this.cancelSubscriptions();
      this.router.navigate(['auth']);
    });
  }

  @Action(GetTasks)
  getTasks(ctx: StateContext<ITasksState>) {
    const sub = this.firestoreService.getTasks().subscribe(list => ctx.patchState({ list }));
    this.subscriptions.push(sub);
  }

  @Action(GetTasksArchived)
  getTasksArchived(ctx: StateContext<ITasksState>) {
    const sub = this.firestoreService.getTasksArchived().subscribe(listArchived => ctx.patchState({ listArchived }));
    this.subscriptions.push(sub);
  }

  @Action(AddTask)
  addTask(ctx: StateContext<ITasksState>, action: AddTask) {
    this.firestoreService.addTask(new Task(action.task));
  }

  @Action(DeleteTask)
  deleteTask(ctx: StateContext<ITasksState>, action: DeleteTask) {
    this.firestoreService.deleteTask(action.task);
  }

  @Action(ArchiveTask)
  archiveTask(ctx: StateContext<ITasksState>, action: ArchiveTask) {
    const list = ctx.getState().list;
    const taskIndex = list.findIndex((item => item.id === action.task.id));
    const task = list[taskIndex];
    task.archived = true;
    this.firestoreService.archiveTask(task);
  }

  @Action(CompleteTask)
  completeTask(ctx: StateContext<ITasksState>, action: CompleteTask) {
    const list = ctx.getState().list;
    const taskIndex = list.findIndex((item => item.id === action.task.id));
    const task = list[taskIndex];
    task.completed = true;
    task.completedDate = new Date();
    this.firestoreService.updateTask(task);
  }

  @Action(GetCategories)
  getCategories(ctx: StateContext<ITasksState>) {
    const categories = ['Home', 'Job', 'Family'];
    ctx.patchState({ categories });
  }

}
