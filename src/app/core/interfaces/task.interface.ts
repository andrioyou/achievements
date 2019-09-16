export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  archived: boolean;
  createdDate: Date;
  completedDate: Date;
}
