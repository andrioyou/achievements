import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// environment
import { environment } from '@src/environments/environment';

// state
import { NgxsModule } from '@ngxs/store';
import { TasksState } from '../store/tasks.state';

// charts
import { ChartsModule } from 'ng2-charts';

// firebase
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// firebase config
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect',
  // signInFlow: 'popup',
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    NgxsModule.forRoot([TasksState], { developmentMode: !environment.production }),
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [AuthGuard, AuthService, FirestoreService]
})
export class CoreModule { }
