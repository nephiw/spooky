import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationPageComponent } from 'common/authentication';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authentication',  component: AuthenticationPageComponent },
  { path: 'admin',           loadChildren: './admin/admin.module#AdminModule' },
  { path: 'trunkOrTreat',    loadChildren: './trunk-or-treat/trunk-or-treat.module#TrunkOrTreatModule' },
  { path: 'booYourNeighbor', loadChildren: './boo-your-neighbor/boo-your-neighbor.module#BooYourNeighborModule' },
  { path: 'houseDecoration', loadChildren: './house-decoration/house-decoration.module#HouseDecorationModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
