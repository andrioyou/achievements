export interface ITask {
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
}
