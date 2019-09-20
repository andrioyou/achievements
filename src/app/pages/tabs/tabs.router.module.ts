import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ChangeRouteGuard } from './change-route.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksPageModule)
          }
        ]
      },
      {
        path: 'completed',
        children: [
          {
            path: '',
            loadChildren: () => import('../completed/completed.module').then(m => m.CompletedPageModule)
          }
        ]
      },
      {
        path: 'add-task',
        children: [
          {
            path: '',
            loadChildren: () => import('../add-task/add-task.module').then(m => m.AddTaskPageModule)
          }
        ],
        canDeactivate: [ChangeRouteGuard],
      },
      {
        path: 'stats',
        children: [
          {
            path: '',
            loadChildren: () => import('../stats/stats.module').then(m => m.StatsPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: 'archived',
        children: [
          {
            path: '',
            loadChildren: () => import('../archived/archived.module').then(m => m.ArchivedPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
