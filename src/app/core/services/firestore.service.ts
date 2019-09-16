import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { IUser } from '../interfaces/user.interface';
import { ITask } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private userCollection!: AngularFirestoreCollection<IUser>;
  private tasksCollection!: AngularFirestoreCollection<ITask>;
  private tasksArchivedCollection!: AngularFirestoreCollection<ITask>;
  private tasks$!: Observable<ITask[]>;
  private tasksArchived$!: Observable<ITask[]>;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
  ) {
    this.init();
    this.authService.user$.subscribe(user => {
      if (user) {
        this.init();
      }
    });
  }

  init() {
    const user: IUser | null = this.authService.getUser();
    if (user) {
      this.userCollection = this.afs.collection('users');

      this.tasksCollection = this.userCollection.doc(user.uid).collection('tasks');
      this.tasksArchivedCollection = this.userCollection.doc(user.uid).collection('tasksArchived');

      this.tasks$ = this.dataToTasks(this.tasksCollection);
      this.tasksArchived$ = this.dataToTasks(this.tasksArchivedCollection);
    }
  }

  dataToTasks(dataIn: AngularFirestoreCollection<ITask>) {
    return dataIn.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as ITask;
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

  addTask(task: ITask) {
    this.tasksCollection.doc(task.id).set({ ...task });
  }

  deleteTask(task: ITask) {
    this.tasksCollection.doc(task.id).delete();
  }

  updateTask(task: ITask) {
    this.tasksCollection.doc(task.id).update({ ...task });
  }

  archiveTask(task: ITask) {
    this.tasksCollection.doc(task.id).delete();
    this.tasksArchivedCollection.doc(task.id).set({ ...task });
  }

  writeUser(user: IUser) {
    this.userCollection.doc(user.uid).set({ ...user });
  }
}
