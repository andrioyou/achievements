import { ITask } from '../interfaces/task.interface';

export class Task implements ITask {
  id: string;
  title: string;
  completed: boolean;
  category: string;

  constructor(params: {
    id: string;
    title: string;
    completed: boolean;
    category: string
  }) {
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed;
    this.category = params.category;
  }
}
