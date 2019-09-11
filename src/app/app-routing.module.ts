import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'terms',
    loadChildren: './views/terms/terms.module#TermsPageModule',
  },
  {
    path: 'privacy-policy',
    loadChildren: './views/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule'
  },
  {
    path: 'auth',
    loadChildren: './views/auth/auth.module#AuthPageModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
