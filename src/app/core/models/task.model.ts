import { ITask } from '../interfaces/task.interface';

export class Task implements ITask {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  archived: boolean;
  createdDate: Date;
  completedDate: Date;

  constructor(params: {
    id?: string;
    title: string;
    completed?: boolean;
    category?: string;
    archived?: boolean;
    createdDate?: Date;
    completedDate?: Date;
  }) {
    this.id = new Date().getTime().toString();
    this.title = params.title;
    this.completed = params.completed || false;
    this.category = params.category || '';
    this.archived = params.archived || false;
    this.createdDate = new Date();
    this.completedDate = params.completedDate || new Date();
  }
}
