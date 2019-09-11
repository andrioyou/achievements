import { State, StateContext, Action, Store, NgxsOnInit } from '@ngxs/store';
import { ITask } from '../core/interfaces/task.interface';
import { GetTasks, GetUser, RemoveUser, CompleteTask, UncompleteTask } from './tasks.actions';
import { Task } from '../core/models/task.model';
import { User } from '../core/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

export interface ITasksState {
  list: ITask[];
  uncompleted: ITask[];
  completed: ITask[];
  categories: string[];
  isAuthenticated: boolean;
  user: User | null;
}

@State<ITasksState>({
  name: 'posts',
  defaults: {
    list: [],
    uncompleted: [],
    completed: [],
    categories: [],
    isAuthenticated: false,
    user: null,
  }
})
export class TasksState implements NgxsOnInit {
  constructor(
    private store: Store,
    private afAuth: AngularFireAuth
  ) { }

  ngxsOnInit() {
    this.store.dispatch(new GetTasks());
  }

  @Action(GetTasks)
  getTasks(ctx: StateContext<ITasksState>) {
    const list = [
      new Task({
        id: '1',
        title: 'Drink water',
        completed: false,
        category: 'Home'
      }),
      new Task({
        id: '2',
        title: 'Do running',
        completed: true,
        category: 'Home'
      }),
      new Task({
        id: '3',
        title: 'Pay taxes',
        completed: false,
        category: 'Job'
      }),
      new Task({
        id: '4',
        title: 'Do something',
        completed: false,
        category: 'Home'
      }),
    ];
    const uncompleted = list.filter(task => !task.completed);
    const completed = list.filter(task => task.completed);
    const categories = ['Job', 'Home'];
    ctx.patchState({
      list,
      uncompleted,
      completed,
      categories
    });
  }

  @Action(CompleteTask)
  completeTask(ctx: StateContext<ITasksState>, action: CompleteTask) {
    ctx.patchState({});
  }

  @Action(CompleteTask)
  UncompleteTask(ctx: StateContext<ITasksState>, action: UncompleteTask) {
    ctx.patchState({});
  }

  @Action(GetUser)
  getUser(ctx: StateContext<ITasksState>) {
    let user: User | null = null;

    this.afAuth.authState
      .subscribe(userIn => {
        if (userIn) {
          user = {
            uid: userIn.uid,
            displayName: userIn.displayName,
            email: userIn.email,
            photoURL: userIn.photoURL,
          };
        }

        ctx.patchState({ user });
      });
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<ITasksState>) {
    this.afAuth.auth.signOut();
    ctx.patchState({ user: null });
  }
}
