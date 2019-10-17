import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {
  PasswordChangePageComponent,
  VotingResultsComponent
} from './admin-page';
import { ContactsPageComponent } from './admin-page/contacts-page/contacts-page.component';
import { TrunkPageComponent } from './admin-page/trunk-page/trunk-page.component';
import { HousePageComponent } from './admin-page/house-page/house-page.component';
import { HouseDetailPageComponent } from './admin-page/house-page/house-detail-page/house-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'contacts', component: ContactsPageComponent },
      { path: 'houses', component: HousePageComponent, pathMatch: 'full' },
      { path: 'houses/:key', component: HouseDetailPageComponent },
      { path: 'trunks', component: TrunkPageComponent },
      { path: 'password', component: PasswordChangePageComponent },
      { path: 'results', component: VotingResultsComponent },
      { path: '', pathMatch: 'full', redirectTo: 'contacts' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
