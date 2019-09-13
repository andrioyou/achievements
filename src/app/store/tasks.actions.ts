import { ITask } from '../core/interfaces/task.interface';

export class GetTasks {
  static readonly type = '[Tasks] Get tasks';
}

export class AddTask {
  static readonly type = '[Tasks] Add task';
  constructor(public task: ITask) { }
}

export class DeleteTask {
  static readonly type = '[Tasks] Delete task';
  constructor(public task: ITask) { }
}

export class CompleteTask {
  static readonly type = '[Tasks] Complete task';
  constructor(public task: ITask) { }
}

export class GetCategories {
  static readonly type = '[Tasks] Get categories';
}

export class SignOut {
  static readonly type = '[Tasks] Remove user';
}
