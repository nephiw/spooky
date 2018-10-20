import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';

import { ContactService } from './contact.service';
import { AdminButtonComponent } from './admin-button/admin-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ContactService
  ],
  exports: [
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AdminButtonComponent
  ],
  declarations: [
    AdminButtonComponent
  ],
})
export class BcCommonModule { }
