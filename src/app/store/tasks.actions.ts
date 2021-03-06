import { ITask } from '../core/interfaces/task.interface';

export class RegisterUser {
  static readonly type = '[Tasks] Register user';
}

export class SignIn {
  static readonly type = '[Tasks] Sign In';
}

export class SignOut {
  static readonly type = '[Tasks] Sign Out';
}

export class GetTasks {
  static readonly type = '[Tasks] Get tasks';
}

export class GetTasksArchived {
  static readonly type = '[Tasks] Get tasks archived';
}

export class GetStats {
  static readonly type = '[Tasks] Get stats';
}

export class GetCategories {
  static readonly type = '[Tasks] Get categories';
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

export class IncProgressTask {
  static readonly type = '[Tasks] Increment progress of task';
  constructor(public task: ITask) { }
}

export class DecProgressTask {
  static readonly type = '[Tasks] Decrement progress of task';
  constructor(public task: ITask) { }
}

export class ArchiveTask {
  static readonly type = '[Tasks] Archive task';
  constructor(public task: ITask) { }
}
