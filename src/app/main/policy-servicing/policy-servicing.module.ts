import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicyServicingPageRoutingModule } from './policy-servicing-routing.module';

import { PolicyServicingPage } from './policy-servicing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyServicingPageRoutingModule
  ],
  declarations: [PolicyServicingPage]
})
export class PolicyServicingPageModule {}
