import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private afAuth: AngularFireAuth) {
    console.log(this.afAuth.auth.currentUser);
    setTimeout(() => {
      console.log(this.afAuth.auth.currentUser);
    }, 2000);
  }

  canActivate(): boolean {
    return true;
    // this.router.navigateByUrl('/auth');
    // return false;
    // if (this.authService.hasToken()) {
    //   return true;
    // } else {
    //   this.router.navigateByUrl('/auth');
    //   return false;
    // }
  }
}
