import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeName = 'achievementsUserData';
  private userSubject = new Subject<IUser | null>();
  user$ = this.userSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(userData => {
      if (userData && userData.providerData[0]) {
        const user: IUser | null = userData.providerData[0];
        if (user) {
          this.setUserUid(user.uid);
          this.userSubject.next(user);
        }
      } else {
        this.removeUserUid();
        this.userSubject.next(null);
      }
    });
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  setUserUid(uid: string): void {
    localStorage.setItem(this.storeName, uid);
  }

  getUserUid(): string | null {
    return localStorage.getItem(this.storeName);
  }

  removeUserUid(): void {
    localStorage.removeItem(this.storeName);
  }

  isAuthenticated(): boolean {
    return (this.getUserUid())
      ? true
      : false;
  }
}

// UIDs are just identifiers for users. Knowing a users UID
// does not grant you any permissions that are associated
// with that user. Sharing the UID in URLs is about as safe as
// sharing your username on Github, or your unique ID on Stack
// Overflow.
