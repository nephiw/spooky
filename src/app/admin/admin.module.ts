import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent, ContactsComponent, PasswordChangePageComponent } from './admin-page';
import { BcCommonModule } from 'common/bc-common.module';
import { ContactsPageComponent } from './admin-page/contacts-page/contacts-page.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BcCommonModule,
    FormsModule
  ],
  declarations: [
    AdminPageComponent,
    ContactsComponent,
    PasswordChangePageComponent,
    ContactsPageComponent
  ]
})
export class AdminModule { }
