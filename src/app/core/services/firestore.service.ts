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
  private tasks$!: Observable<ITask[]>;
  private tasksCollection!: AngularFirestoreCollection<ITask>;
  private userCollection!: AngularFirestoreCollection<IUser>;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
  ) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.tasksCollection = this.afs.collection('users').doc(user.uid).collection('tasks');
        this.tasks$ = this.tasksCollection.snapshotChanges().pipe(
          map(changes => {
            return changes.map(a => {
              const data = a.payload.doc.data() as ITask;
              data.id = a.payload.doc.id;
              return data;
            });
          })
        );
        this.userCollection = this.afs.collection<IUser>('users');
      }
    });
  }

  getTasks() {
    return this.tasks$;
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

  writeUser(user: IUser) {
    this.userCollection.doc(user.uid).set({ ...user });
  }
}
