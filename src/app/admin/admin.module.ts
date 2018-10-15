import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent, ContactsComponent } from './admin-page';
import { BcCommonModule } from 'common/bc-common.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BcCommonModule,
    FormsModule
  ],
  declarations: [
    AdminPageComponent,
    ContactsComponent
  ]
})
export class AdminModule { }
