import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyServicingPage } from './policy-servicing.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyServicingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyServicingPageRoutingModule {}
