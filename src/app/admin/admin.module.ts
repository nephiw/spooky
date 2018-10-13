import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent, ContactsComponent } from './admin-page';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminPageComponent,
    ContactsComponent
  ]
})
export class AdminModule { }
