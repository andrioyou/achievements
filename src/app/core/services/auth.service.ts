import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'achievementsUser';
  private userStateSubject = new BehaviorSubject<IUser | null>(this.getUser());
  private userState$ = this.userStateSubject.asObservable();

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(userData => {
      if (userData && userData.providerData[0]) {
        const user: IUser | null = userData.providerData[0];
        if (user) {
          this.setUser(user);
          this.userStateSubject.next(user);
        }
      } else {
        this.removeUser();
        this.userStateSubject.next(null);
      }
    });
  }

  getUserState() {
    return this.userState$;
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
