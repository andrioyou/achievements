export class GetTasks {
  static readonly type = '[Tasks] Get tasks';
}

export class CompleteTask {
  static readonly type = '[Tasks] Complete task';
  constructor(public id: string) { }
}

export class UncompleteTask {
  static readonly type = '[Tasks] Complete task';
  constructor(public id: string) { }
}

export class GetUser {
  static readonly type = '[Tasks] Get user';
}

export class RemoveUser {
  static readonly type = '[Tasks] Remove user';
}
