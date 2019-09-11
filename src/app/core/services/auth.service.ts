import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeName = 'achievementsUserData';

  constructor() { }

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
