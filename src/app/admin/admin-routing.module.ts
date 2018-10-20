import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PasswordChangePageComponent } from './admin-page';
import { ContactsPageComponent } from './admin-page/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'contacts', component: ContactsPageComponent },
      { path: 'password', component: PasswordChangePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
