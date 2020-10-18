import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children:[
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/dashboard',
        pathMatch: 'full'
      },{
        path: 'policy-servicing',
        children: [
          {
            path: '',
            loadChildren: () => import('./policy-servicing/policy-servicing.module').then( m => m.PolicyServicingPageModule)
        }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ],
})
export class MainPageRoutingModule {}
