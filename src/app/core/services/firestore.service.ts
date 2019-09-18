import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { IUser } from '../interfaces/user.interface';
import { ITask } from '../interfaces/task.interface';
import { ITaskStat } from '../interfaces/task-stat.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private userCollection!: AngularFirestoreCollection<IUser>;
  private tasksCollection!: AngularFirestoreCollection<ITask>;
  private tasksArchivedCollection!: AngularFirestoreCollection<ITask>;
  private statsCollection!: AngularFirestoreCollection<ITaskStat>;

  private tasks$: Observable<ITask[]> = EMPTY;
  private tasksArchived$: Observable<ITask[]> = EMPTY;
  private stats$: Observable<ITaskStat[]> = EMPTY;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
  ) {
    this.authService.getUserState().subscribe(user => {
      if (user) {
        this.initUserData();
      }
    });
  }

  private dateToDateLabel(date: Date): string {
    return date.getDate() + ' ' + this.getMonthName(date.getMonth()) + ' ' + date.getFullYear();
  }

  private getMonthName(monthNumber: number) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[monthNumber];
  }

  private initUserData() {
    const user: IUser | null = this.authService.getUser();
    if (user) {
      this.userCollection = this.afs.collection('users');
      this.tasksCollection = this.userCollection.doc(user.uid).collection('tasks');
      this.tasksArchivedCollection = this.userCollection.doc(user.uid).collection('tasksArchived');
      this.statsCollection = this.userCollection.doc(user.uid).collection('stats');

      this.tasks$ = this.parseFirestoreData(this.tasksCollection);
      this.tasksArchived$ = this.parseFirestoreData(this.tasksArchivedCollection);
      this.stats$ = this.parseFirestoreData(this.statsCollection);
    }
  }

  private parseFirestoreData(dataIn: AngularFirestoreCollection<any>) {
    return dataIn.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getTasks() {
    return this.tasks$;
  }

  getTasksArchived() {
    return this.tasksArchived$;
  }

  getStats() {
    return this.stats$;
  }

  addTask(task: ITask) {
    return this.tasksCollection.doc(task.id).set({ ...task });
  }

  deleteTask(task: ITask) {
    return this.tasksCollection.doc(task.id).delete();
  }

  updateTask(task: ITask) {
    return this.tasksCollection.doc(task.id).update({ ...task });
  }

  archiveTask(task: ITask) {
    this.tasksCollection.doc(task.id).delete();
    return this.tasksArchivedCollection.doc(task.id).set({ ...task });
  }

  registerUser(user: IUser) {
    return this.userCollection.doc(user.uid).set({ ...user });
  }

  updateStats(task: ITask) {
    const increment = firestore.FieldValue.increment(1);
    const dateLabel = this.dateToDateLabel(new Date());
    if (!task.completed) {
      // increment created
      return this.statsCollection.doc(dateLabel).set({ created: increment }, { merge: true });
    } else {
      // increment completed
      return this.statsCollection.doc(dateLabel).set({ completed: increment }, { merge: true });
    }
  }
}
