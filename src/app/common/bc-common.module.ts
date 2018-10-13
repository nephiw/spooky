import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ContactService } from './contact.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ContactService
  ],
  exports: [
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
})
export class BcCommonModule { }
