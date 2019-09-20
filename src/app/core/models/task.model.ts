import { ITask } from '../interfaces/task.interface';

export class Task implements ITask {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  hasProgress: boolean;
  progressDone: number;
  progressLevel: number;
  archived: boolean;
  createdDate: Date;
  completedDate: Date;

  constructor(params: {
    id?: string;
    title: string;
    completed?: boolean;
    category?: string;
    hasProgress?: boolean;
    progressDone?: number;
    progressLevel?: number;
    archived?: boolean;
    createdDate?: Date;
    completedDate?: Date;
  }) {
    this.id = new Date().getTime().toString();
    this.title = params.title;
    this.completed = params.completed || false;
    this.category = params.category || '';
    this.hasProgress = params.hasProgress || false;
    this.progressDone = params.progressDone || 0;
    this.progressLevel = params.progressLevel || 0;
    this.archived = params.archived || false;
    this.createdDate = new Date();
    this.completedDate = params.completedDate || new Date();
  }
}
