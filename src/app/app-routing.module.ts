import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'terms',
    loadChildren: './pages/terms/terms.module#TermsPageModule',
  },
  {
    path: 'privacy-policy',
    loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule'
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#AuthPageModule'
  },
  {
    path: '**',
    redirectTo: '',
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
