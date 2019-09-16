import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'achievementsUser';
  private userSubject = new Subject<IUser | null>();
  user$ = this.userSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(userData => {
      if (userData && userData.providerData[0]) {
        const user: IUser | null = userData.providerData[0];
        if (user) {
          this.setUser(user);
          this.userSubject.next(user);
        }
      } else {
        this.removeUser();
        this.userSubject.next(null);
      }
    });
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  setUser(user: IUser): void {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  getUser(): IUser | null {
    const value = localStorage.getItem(this.storageKey);
    return (value)
      ? JSON.parse(value)
      : null;
  }

  removeUser(): void {
    localStorage.removeItem(this.storageKey);
  }

  isAuthenticated(): boolean {
    return (this.getUser())
      ? true
      : false;
  }
}
