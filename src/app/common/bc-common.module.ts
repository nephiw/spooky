import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { ContactService } from './contact.service';
import { RandomService } from './random.service';
import { AdminButtonComponent } from './admin-button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
    })
  ],
  providers: [
    ContactService,
    RandomService
  ],
  exports: [
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AdminButtonComponent,
    ToastrModule
  ],
  declarations: [
    AdminButtonComponent
  ],
})
export class BcCommonModule { }
